function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var price = itemNode.querySelector(".unit-cost .money").innerHTML; //
  return price;
}

function updatePriceByProduct(productPrice, index){
  var item = document.getElementsByClassName('item')[index];
  var quantity = item.querySelector(".units-to-buy .quantity").value; //
  var total = productPrice * quantity;
  item.querySelector(".total-price .money").innerHTML = total;
  return total;
}

function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var price = getPriceByProduct(item);
    total += updatePriceByProduct(price, i);
  }
  document.querySelector(".total-final .money").innerHTML = total;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
