import { BASE_URL } from "../../constants/api.js";

export async function register(data) {
  const url = `${BASE_URL}auth/register`;

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const json = await response.json();
    console.log(json.errors[0].message);
    throw new Error(json.errors[0].message);
  }

  return await response.json();
}
