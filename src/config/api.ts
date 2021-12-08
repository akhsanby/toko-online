const baseUrl = "toko-online-backend.herokuapp.com";
const protocol = "https";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface CartData {
  productId?: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  description: string;
  sold: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface UpdateProductData {
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  description: string;
  sold: number;
}

// AUTH
export const _signUp = (registerData: RegisterData) => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/user/register`, {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
};

export const _signIn = (loginData: LoginData) => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
};

export const _logout = () => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/user/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
};

export const _getUser = () => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/user`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

// PRODUCT
export const _getProducts = (query?: string) => {
  let URL = `${protocol}://${baseUrl}/product`;
  if (query) URL += `?category=${query}`;

  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

export const _getProduct = (productId?: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/product/${productId}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

export const _updateProduct = (productId: string, data: UpdateProductData) => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/product/${productId}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

export const _getIncome = () => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/product/income`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

// CART
export const _getCart = () => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/cart/`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((e) => reject(e));
  });
};

// CART
export const _addToCart = (data: CartData) => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/cart/`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: data }),
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
};

export const _deleteFromCart = (productId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/cart/`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
}

export const _chekout = () => {
  return new Promise((resolve, reject) => {
    fetch(`${protocol}://${baseUrl}/cart/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
}