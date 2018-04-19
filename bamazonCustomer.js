var mysql = require("mysql");
var cTable = require('console.table');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "andirules",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayInventory();
});

function displayInventory() {
  console.log( "\n");
  // connection.connect(function (err) {
  //   if (err) throw err;
  //   // console.log("connected as id " + connection.threadId + "\n");
  // });
  connection.query("SELECT * FROM products", function (err, res) {
    console.table(res)
    // connection.end();
  });
}

function buyerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the ID of the item you would like to purchase?",
        name: "productselection"
      },
      {
        type: "input",
        message: "How much of that would you like to buy?",
        name: "quantity"
      }
    ])
    .then(function(inquirerResponse) {

      // if quantity of a partiular item is less than the current store quantity 

      // if () {

      // } else {

      // }
      
      //then update the sql database
      
      //and show the customer the total cost of the purchase

      // else console log "insufficient quantity and prevent order from going thru"
      console.log(inquirerResponse.productselection, inquirerResponse.quantity);
    });
}


function buyProduct(itemID, quantitySelected) {
  connection.query(
    "SELECT stock_quantity FROM products WHERE ?", 
    {
      item_id: itemID
    },
    function(err, res) {
      stockAmount = res[0].stock_quantity;
      if (stockAmount >= quantitySelected) {
        updateProduct(itemID, stockAmount - quantitySelected);
      } else {
        console.log("out of stock. Unable to place your order")
      }
    }
  );
}

function updateProduct(itemID, newQuantity) {
  console.log("Updating quantity...\n");
  console.log(itemID, newQuantity, "dsf");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newQuantity
      },
      {
        item_id: itemID
      }
    ],
    function(err, res) {
      // console.log(res.affectedRows + " products updated!\n");
    }
  );
}

connection.connect(function (err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");
});



updateProduct(1,12);
buyProduct(1,1);
updateProduct(1,7);
displayInventory();
connection.end();

// buyerPrompt();

//  function quantityAvailable(itemID) {
//    var amount = 0;
//   connection.query(
//     "SELECT stock_quantity FROM products WHERE ?", 
//     {
//       item_id: itemID
//     },
//     function(err, res) {
//       amount = res[0].stock_quantity;
//       console.log(amount + "<3");
//     }
//   );
//   return amount;
// }

// console.log(quantityAvailable(5));

