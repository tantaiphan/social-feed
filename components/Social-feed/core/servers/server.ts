import { CustomError } from "../models/MetaType";

export const fetchData = async ({
  url,
  method,
  params,
  body,
}: {
  url: string;
  method: string;
  params?: any;
  body?: any;
}) => {
  let searchParam: any = undefined;

  if (!url) {
    throw new Error("Please specify a URL to fetch");
  }

  if (params) {
    searchParam = new URLSearchParams(params).toString();
  }

  const response = await fetch(url + (searchParam || ""), {
    method,
    body:   
      body === undefined
        ? body
        : typeof body === "string"
        ? body
        : JSON.stringify(body),
  });

  const text = await response.text();
  let json: Record<string, any> = { text };

  try {
    json = JSON.parse(text);
  } catch (e) {
    json = { text };
  }

  if (!response.ok) {
    const error = new Error(response.statusText) as CustomError;
    error.info = json;
    error.status = response.status;
    throw error;
  }

  return json;
};
