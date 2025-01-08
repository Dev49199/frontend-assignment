import { API_URL } from "./constants";

export const fetchTableData = async () => {
  const resp = await fetch(API_URL);
  return resp.json();
};
