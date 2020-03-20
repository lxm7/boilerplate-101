// taken from https://github.com/jcarias/worker-demo
const createFile = data => {
  console.info("Creating file...");
  let fileText = "";
  if (data && Array.isArray(data)) {
    for (let index = 0; index < data.length; index++) {
      const row = data[index];
      fileText += `${row["name"]};${row["surname"]};${row["gender"]};${row["region"]};`;
      fileText += "\n";
    }
  }

  return fileText;
};

export default createFile;
