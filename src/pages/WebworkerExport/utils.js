// TODO - use promises in worker?
export const fetchUserList = async () =>
  fetch("https://uinames.com/api/?amount=25").then(response => response.json());
