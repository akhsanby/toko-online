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

export const signUp = (registerData: RegisterData) => {
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

export const signIn = (loginData: LoginData) => {
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

export const logout = () => {
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

export const getUser = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/user`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e.message));
  });
};
