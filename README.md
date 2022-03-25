# Syngenta-backend-assignment

step 1:npm i
step 2:npm start
step 3:open postman
step 4: create a dish: 1. Use this API : http://localhost:5000/api/dishes
2.add body :{
"dishName": "Parantha",
"price": 50,
"category": "Punjabi"
}

step 5:Get lish of all dishes :Method:Get--http://localhost:5000/api/dishes/all

step 6:Creat Restaurant: Method:post-http://localhost:5000/api/restaurants/

stet 7:List all dishes based on location and restaurant :http://localhost:5000/api/restaurants/restaurantID/location

     Example: restourantID =623d4f70801a79918bb1d778;
     location = Delhi;
     http://localhost:5000/api/restaurants/623d4f70801a79918bb1d778/Delhi;

step-8: Create a user:http://localhost:5000/api/users

step-9: add dishes to cart put request:http://localhost:5000/api/users/dishID/cart

Example: dishID =623d4432b4d6fcb41536f212
http://localhost:5000/api/users/623d4432b4d6fcb41536f212

pass userid in body{
userID = "623cc70e720c6c6ea76d1403"
}

step 10:post method : place order:POST-http://localhost:5000/api/orders

body:
{
"userID":"623d5ae2220bfdd899abce0e",
"dishID":"623d4432b4d6fcb41536f212"
}

step:11 - Get order Method:GET - http://localhost:5000/api/orders/orderID

let orderID =623d666775cf0bd8798993a5;
http://localhost:5000/api/orders/623d666775cf0bd8798993a5;
