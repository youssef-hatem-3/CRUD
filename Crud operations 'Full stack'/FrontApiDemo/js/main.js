let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productDesc = document.getElementById('productDesc');
let add = document.getElementById('add');
let update = document.getElementById('update');
let products = [];

function getDataFromApi() {
  fetch('http://localhost:3000/getAllproducts')
  .then(response => response.json())
  .then(json => {
  products = json.products;
  showData()
    }
  )
}
getDataFromApi();
function showData() {
  str = ``;
  for (let i = 0; i < products.length; i++) {
    str +=
      `
        <tr>
          <td>${products[i].name}</td>
          <td>${products[i].price}</td>
          <td>${products[i].description}</td>
          <td>
            <button onClick="deleteProducts(${products[i].id})" class="btn btn-danger">Delete</button>
            <button onClick="updateButton(${i} ,${products[i].id} )" class="btn btn-success">Update</button>
          </td>
        </tr>
      `
  }
  document.getElementById('tbody').innerHTML = str;
}
function inputsData() {
  let data =
  {
    name: productName.value,
    price: productPrice.value,
    description: productDesc.value,
  }
  crudProduct('addProduct','POST', data )
  console.log(data);
  
}

function crudProduct(endPoint, method, data) {
  fetch(`http://localhost:3000/${endPoint}`, {
    method: method,
    body: JSON.stringify(data),
    headers: 
    {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(obj =>{
    if(obj.message=='success'){
      getDataFromApi()
      console.log('tmam');
    }
    else
    {
      console.log('mshtmam');
    }
  });
}
function deleteProducts(id)
{
  crudProduct('delete','DELETE', {id})
}

var sameIndex ;
function updateButton(updatedIndex ,id )
{
    sameIndex = id ; 
    productName.value = products[updatedIndex].name ;
    productDesc.value = products[updatedIndex].description  ;
    productPrice.value = products[updatedIndex].price ;
    add.classList.add("d-none");
    update.classList.replace("d-none","d-block")
}
function sendUpdate()
{
let data = {
  id : sameIndex , 
  name : productName.value ,
  price :  productPrice.value , 
  description : productDesc.value 
}
  crudProduct('updateProduct','PUT', data )
  add.classList.replace("d-none","d-block");
  update.classList.replace("d-block","d-none")
} 
function logout() {
  window.location.replace("file:///D:/Courses/Back-end%20course/Week%204/Assignment5/Crud%20operations%20'Full%20stack'/FrontApiDemo/login.html");
}