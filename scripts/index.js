let bagItems;
onLoad();
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement){
        return;
    }
    let innerHTML = '';
    items.forEach(item =>{

        innerHTML += `
        <div class="item-container">
            <img class="item-image" src="${item.itemImage}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
            </div>
            <div class="company-name">${item.companyName}</div>
            <div class="item-name">${item.itemName}</div>
            <div class="item-price">
                <span class="current-price">Rs. ${item.currentPrice}</span>
                <span class="original-price">${item.originalPrice}</span>
                <span class="discount">${item.discountPercentage}% OFF</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id});">ADD TO BAG</button>
        </div>
        `
    })
    itemsContainerElement.innerHTML = innerHTML;
}
