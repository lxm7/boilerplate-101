/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from "react";
import MaterialTable from "material-table";
import * as R from "ramda";

import { headers } from "./data";
import WebWorker from "worker-loader!./worker.js";

const WebworkerExport = () => {
  const [data, setData] = useState([]);
  const [isExporting, setIsExporting] = useState(false);

  const downloadTxtFile = text => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/csv" });
    element.href = URL.createObjectURL(file);
    element.download = "report.csv";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const fetchWebWorker = () => {
    // Start up the webworker when we start an export
    const worker = new WebWorker();

    // This can post tokens, data, etc
    worker.postMessage("Fetch table data starting ...");
    setIsExporting(true);

    worker.addEventListener("message", event => {
      if (!R.isEmpty(event.data.data)) {
        setData(event.data.users);
        downloadTxtFile(event.data.fileDownload.file);
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
        style={{ padding: "1rem", margin: "1rem", cursor: "pointer" }}
        disabled={isExporting}
        className="btn-worker"
        onClick={fetchWebWorker}
      >
        CSV download Web Worker
      </button>

      <section>
        <MaterialTable
          columns={headers}
          data={data}
          title="CSV export in Webworker"
        />
      </section>
    </div>
  );
};

export default WebworkerExport;
