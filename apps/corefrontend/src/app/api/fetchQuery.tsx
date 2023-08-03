import { NlpResponse } from "../types";

export async function fetchQuery(query: string): Promise<NlpResponse> {
  const backendUrl = "http://localhost:3333/api"; //process.env.REACT_APP_BACKEND_URL;

  const url = `${backendUrl}/query`;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to fetch query");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("Error fetching users: " + error.message);
  }
}
