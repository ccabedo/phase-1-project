document.addEventListener("DOMContentLoaded", function() {

fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then(res => res.json())
.then(dataList => {
    console.log(dataList)

dataList.forEach(products => {
    renderProducts(products)
})
})
})

const renderProducts = (products) => {
    let div = document.querySelector('.container')
    let itemCard = document.createElement('div');
    let img = document.createElement('img')
    img.src = products.image_link
    
    let p = document.createElement('p')
    p.innerText = products.name
    

    p.addEventListener('mouseover', () => {
        p.style.color = "pink";
    })

    p.addEventListener('mouseout', () => {
        p.style.color = "black";
    })

    let button = document.createElement('button')
    button.innerText = "Add to cart"

    button.addEventListener('click', () => {
        let addToCart = document.querySelector(".sub")
        cartTotal++
        console.log(cartTotal)
        addToCart.textContent = cartTotal

        
    })

    itemCard.append(img, p, button)
    div.appendChild(itemCard);
}
let addToCart = document.querySelector(".sub")
let cartTotal = 0;

