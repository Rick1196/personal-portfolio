export const customFetch = (
  url: string,
  method: string,
  body?: any,
  headers: Headers = new Headers()
) => {
  const customContent: any = {};
  if (body && Object.keys(body).length > 0) {
    customContent["body"] = JSON.stringify(body);
  }
  headers.append("Content-Type", "application/json");
  return fetch(url, {
    method,
    headers,
    ...customContent,
  });
};
