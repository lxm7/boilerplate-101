export const headers = [
  { title: "name", field: "name" },
  { title: "status", field: "status" },
  { title: "portrayed", field: "portrayed" },
  { title: "birthday", field: "birthday" }
];

export const getColumnNames = headers.map(column => column.title);
