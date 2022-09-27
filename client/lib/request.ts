interface ILoginData {
  login: string;
  password: string;
}

export async function postData(url: string = "", data: ILoginData) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify(data),
  });
  return response.json();
}
