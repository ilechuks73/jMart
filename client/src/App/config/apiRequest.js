const baseURL = "https://pos.eocambo.com/api"

// , {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(body),
// }

//------GET Product + category+ add favorite same time-------

export const getAllProductsCategoryFavorites = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/products/1196520494051841/16`)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//-----get specific product------
export const getProduct = (params) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pos.eocambo.com/api/product/search/${params.productID}`)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//-----get specific customer------
export const getCustomer = (params) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pos.eocambo.com/api/contact/search/${params.customerID}`)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//-----create cutomer profile-------
export const get_users = (body) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pos.eocambo.com/api/contact/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//-------ADD A NEW USER--------
export const register_user = (body) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/user/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//--------GET ALL ADMINS---------
export const get_admins = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/admin`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc4ODM2M2E1OWM3NTRiNzA4MTlhOGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTg1MTA3MjB9.6OKc9HdW6FKuthFVmhem1iKuYgGEhfd6ZZTbQa3HX58",
      },
    })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//----=====-GET A SINGLE PROFILE DATA-------
export const get_profile_data = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/${data.role}/info`, {
      method: "GET",
      headers: {
        "auth-token": data.auth_token,
      },
    })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

//----=====-DELETE A SINGLE PROFILE DATA-------
export const delete_profile_data = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/user/${data}`, {
      method: "DELETE",
    })
    .then((res) => resolve(res.json()))
    .catch((err) => reject(err));
  });
};

//---------------LOGIN-----------=--------
export const login_validation = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error(res.statusText);
        }
        resolve(res.json());
      })
      .catch((err) => reject(err));
  });
};