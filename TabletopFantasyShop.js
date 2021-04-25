

function setTheStoreUp(){

  fetch('https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear')
     .then(response => response.json())
     .then(items => showitems(items.equipment));


showitems = items => {
const itemsDiv = document.querySelector('#dataGoesHere');
items.forEach(item => {

  let fetchSpecficItemDetails = 'https://www.dnd5eapi.co'+item.url;
  fetch(fetchSpecficItemDetails)

  .then(response => response.json())
  .then(itemDetails => showItemDetails(itemDetails));

  showItemDetails = itemDetails => {
console.log(itemDetails);
 //ids for P and div  created with index and url for fun later :D
const itemElementURL = document.createElement('div');
itemElementURL.setAttribute('id', itemDetails.url);
const itemElement = document.createElement('p');
itemElement.setAttribute('id', itemDetails.index);
itemElement.innerText = 'Equipment Name: '+ itemDetails.name;
const itemCostElement = document.createElement('p');

itemCostElement.innerText = 'Cost: '+ itemDetails.cost.quantity + itemDetails.cost.unit;

itemsDiv.append(itemElementURL);
itemsDiv.append(itemElement);
itemsDiv.append(itemCostElement);
  }
  });
}
}
