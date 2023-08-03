import { NlpResponse } from "../types";

export async function saveFeedback(queryId: string, value: string, comment?: string): Promise<void> {
  const backendUrl = "http://localhost:3333/api"; //process.env.REACT_APP_BACKEND_URL;

  const url = `${backendUrl}/feedback`;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ queryId, value, comment }),
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
