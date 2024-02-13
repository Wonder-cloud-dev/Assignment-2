(function () {
  'use strict'

   angular.module('ShoppingListApp', [])
   .controller('ShoppingListController', ShoppingListController)

   ShoppingListController.$inject = ['$scope'];
   function ShoppingListController($scope) {
    var shoppingList = this;
    

    shoppingList.toBuyList = [
      {name: "Cookies", quantity: 14},
      {name : "Milk", quantity: 3},
      {name: "Bread", quantity: 3},
      {name: "Eggs", quantity: 11},
      {name: "Bananas", quantity: 7}
    ]

    shoppingList.alreadyBoughtList = [];

    shoppingList.buyItem = function (index) {
      var boughtitem = shoppingList.toBuyList.splice(index, 1)[0];
      shoppingList.alreadyBoughtList.push(boughtitem);
    }
   }
    
})()