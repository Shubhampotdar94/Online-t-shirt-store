import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get All Categories
export const getAllCategories = ()=>{
  return fetch(`${API}/categories` , {
      method: "GET"
  })
  .then(response=>{
      return response.json();
  })
  .catch(err=>console.log(err));
}

//get a Category

export const getCategory = categoryId => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Delete a Category
export const deleteCategory = (categoryId , userid , token) =>{
  return fetch(`${API}/category/${categoryId}/${userid}` , {
      method: "DELETE",
      headers:{
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      }
  }).then(response =>{
      return response.json()
  })
  .catch(err=> console.log(err))
}

//Update Category

export const updateCategory = ( categoryId , userid , token , category_name) =>{
  return fetch(`${API}/category/${categoryId}/${userid}` , {
      method: "PUT",
      headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category_name)
  }).then(response =>{
      return response.json()
  })
  .catch(err=> console.log(err))
}

//products calls

//Product Calls
export const createaProduct = (userid , token , product) =>{
  return fetch(`${API}/product/create/${userid}` , {
      method: "POST",
      headers:{
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      },
      body: product
  }).then(response =>{
      return response.json()
  })
  .catch(err=> console.log(err))
}

//get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//delete a product

export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get a product

export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update a product

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
