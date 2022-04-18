var products = [
    { id: "100", name: "iPhone 4S", brand: "Apple", os: "iOS" },
    { id: "101", name: "Moto X", brand: "Motorola", os: "Android" },
    { id: "102", name: "iPhone 6", brand: "Apple", os: "iOS" },
    { id: "103", name: "Samsung Galaxy S", brand: "Samsung", os: "Android" },
    { id: "104", name: "Google Nexus", brand: "ASUS", os: "Android" },
    { id: "105", name: "Surface", brand: "Microsoft", os: "Windows" },
  ];
  
  var productlist =[]	;			
  var table = `<table border='1px'; cellspacing='0px'>
  <tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>`
  
  $(document).ready(function(){
  display();
  
  $("#os").change(()=>{
  sort_values();
  })
  $("#brand").change(()=>{
  sort_values();
  })
  $("#name").on("keyup",function(){
  search();
  })
  $(document).on("click", ".remove" , function(){
  console.log(this.id);
  var id = this.id;
  $(`#${id}`).parent().hide();
  })
  });
  var brand = new Set();
  var os = new Set();
  function display(){
  var list ="";
  var brandval = ""
  var osval
  products.forEach(element => {
  list += ` <tr>
  <td>${element.id}</td>
  <td>${element.name}</td>
  <td>${element.brand}</td>
  <td>${element.os}</td>
  <td class="remove" id="${element.id}">X</td>
  </tr>`;
  
  
  
  brand.add(element.brand);
  os.add(element.os);
  });
  $("#product_table").empty();
  $("#product_table").append(table+list+"</table>");
  os.forEach(element => {
  
  osval += `<option>${element}</option>`
  });
  brand.forEach(element => {
  
  brandval += `<option>${element}</option>`
  });
  $("#brand").append(brandval);
  $("#os").append(osval);
  }
  
  function sort_values(){
  var brand = $("#brand").val();
  //console.log(brand);
  var os = $("#os").val();
  console.log(os);
  var count = 0;
  if(os != "" && brand != ""){
  productlist = [];
  
  products.forEach(element => {
  if(element.brand == brand && element.os == os){
  
    productlist.push(element);
  sortdisplay()
  count =1;
  }
  });
  if(count == 0){
    productlist = [];
  sortdisplay();
  }
  }
  else if(brand != "" && os == "" ){
    productlist = [];
  //console.log("brand");
  products.forEach(element => {
  if(element.brand == brand){
  
    productlist.push(element);
  sortdisplay()
  }
  });
  }
  else if(os != "" &&  brand == ""){
    productlist =[];
  console.log("os");
  products.forEach(element => {
  if(element.os == os){
  
    productlist.push(element);
  sortdisplay()
  }
  });
  }
  else{
    productlist =[];
  sortdisplay()
  }
  }
  
  function search(){
  var value = $("#name").val().toLowerCase();
  productlist =[];
  products.forEach(element => {
  if (element["name"].toLowerCase().search(value) > -1) {
  console.log(element+",");
  productlist.push(element);
  } else if(element["id"].search(value)> -1) {
  console.log(element);
  productlist.push(element);
  }
  });
  
  sortdisplay()
  }
  
  function sortdisplay(){
  var list ="";
  productlist.forEach(element => {
  list += ` <tr>
  <td>${element.id}</td>
  <td>${element.name}</td>
  <td>${element.brand}</td>
  <td>${element.os}</td>
  <td class="remove" id="${element.id}">X</td>
  </tr>`;
  });
  $("#product_table").empty();
  $("#product_table").append(table+list+"</table>");
  } 