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

    itemCard.className = 'item-card'
    let img = document.createElement('img')
    img.src = products.image_link
    
    let p = document.createElement('p')
    p.innerText = products.name
    

    let price = document.createElement('price')
    price.innerText = `$${products.price}`
    

    p.addEventListener('mouseover', () => {
        p.style.color = "pink";
    })

    p.addEventListener('mouseout', () => {
        p.style.color = "black";
    })

    let button = document.createElement('button')
    button.classList = 'add-cart'
    button.innerText = "Add to cart"

  
    button.addEventListener('click', () => {
        cartTotal++
        console.log(cartTotal)
        addToCart.textContent = cartTotal

    })

    itemCard.append(img, p, price, button)
    div.appendChild(itemCard);

  
}

let addToCart = document.querySelector(".sub")
let cartTotal = 0;

// const searchBar = document.getElementById('searchBar')

// let searchBar = document.getElementById('searchBar')

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value;
//     const filteredProducts = products.filter((products) => {
//         products.name.includes(searchString) || 
//         products.product_type.includes(searchString)
//     })
//     console.log(filteredProducts)
// })



