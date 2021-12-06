const baseUrl = "https://toko-online-backend.herokuapp.com";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const _signUp = (registerData: RegisterData) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/user/register`, {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e.message));
  });
};

export const _signIn = (loginData: LoginData) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/user/login`, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e.message));
  });
};

export const _logout = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/user/logout`, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e.message));
  });
};

export const _getUser = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/user`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e.message));
  });
};

export const _getProducts = (query?: string) => {
  let URL = `${baseUrl}/product`;
  if (query) URL += `?category=${query}`;

  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e.message));
  });
};

export const _getProduct = (productId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/product/${productId}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e.message));
  });
};
