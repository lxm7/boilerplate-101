import React, { useState } from "react";
import MaterialTable from "material-table";
import * as R from "ramda";

import { headers } from "./columns";
import { tableIcons } from "./tableIcons";
import WebWorker from "worker-loader!./worker.js"; // eslint-disable-line

const downloadTxtFile = (text, title) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/csv" });
  console.info({ file, text });
  element.href = URL.createObjectURL(file);
  element.download = title;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const WebworkerExport = () => {
  const [data, setData] = useState([]);
  const [isExporting, setIsExporting] = useState(false);

  const fetchWebWorker = () => {
    // Start up the webworker when we start an export
    const worker = new WebWorker();

    // This can post tokens, data, etc
    worker.postMessage("Fetch table data starting ...");
    setIsExporting(true);

    worker.addEventListener("message", event => {
      if (!R.isEmpty(event.data.data)) {
        const { file, title } = event.data.fileDownload;
        setData(event.data.users);
        downloadTxtFile(file, title);
        setIsExporting(false);

        // We need to terminate the worker right after export is finished so it 'forgets' the previous actions
        // and stops us getting incrementing number of fired actions each time via this listener.
        // also keeps it to one webworker at any time in the stack
        worker.terminate();
      }
    });
  };

  return (
    <div style={{ margin: "2rem" }}>
      <button
        style={{
          height: "57px",
          lineHeight: "57px",
          padding: "0 16px",
          border: "1px solid rgba(0,0,0,.15)",
          borderRadius: "4px",
          background: "#03a87c",
          borderColor: "#03a87c",
          color: "#fff",
          fontSize: "1.5rem",
          margin: "0.5em 0 1em",
          cursor: "pointer"
        }}
        disabled={isExporting}
        className="btn-worker"
        onClick={fetchWebWorker}
      >
        Generate CSV
      </button>
      <p>
        Fetch data and Generate CSV download via a Web Worker. Within the
        webworker we:
      </p>
      <ul className="ul">
        <li>Use the webworker loader so we can import it inline</li>
        <li>This allows for required modules to used for extensibility</li>
        <li>Fetch remote data, transform and convert to CSV</li>
      </ul>

      <p>
        The file generation and download happens in the main thread due to
        document object being used in this purely client-side demo
      </p>
      <section style={{ marginTop: "3em" }}>
        <MaterialTable
          columns={headers}
          data={data}
          title={
            data.length > 0 ? `Breaking Bad Chars` : `Empty Material Table`
          }
          icons={tableIcons}
        />
      </section>
    </div>
  );
};

export default WebworkerExport;
