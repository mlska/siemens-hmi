interface ILoginData {
  login: string;
  password: string;
}

export async function loginUser(url: string = "", data: ILoginData) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getRecipes(url: string) {
  const response = await fetch(url);
  return response.json();
}
