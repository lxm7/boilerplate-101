const convertToCSV = data => {
  console.info("Creating file...");
  const array = typeof data !== "object" ? JSON.parse(data) : data;
  let str = "";

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const index in array[i]) {
      if (line !== "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
};

export default convertToCSV;
