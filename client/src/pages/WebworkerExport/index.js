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
        Fetch data and Generate CSV download via a Web Worker: Under the hood:
      </p>
      <ul className="ul">
        <li>
          useState the webworker webpack loader so we can import it inline in
          code
        </li>
        <li>This enables us to require modules within the worker file</li>
        <li>Fetches remote data, transforms and then converts to CSV</li>
        <li>
          Lastly, the file is generated and downloaded.{" "}
          <em>
            Here, this happens in the main thread due to document object only
            being available in this purely client-sided demo
          </em>
        </li>
      </ul>

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
