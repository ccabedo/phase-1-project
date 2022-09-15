const renderProducts = (products) => {
    let div = document.querySelector('.container')

    let itemCard = document.createElement('div');
    itemCard.className = 'item-card'

    let img = document.createElement('img')
    img.src = products.image_link
    
    let p = document.createElement('p')
    p.innerText = products.name

    let type = document.createElement('type')
    type.innerText = products.product_type
    
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



document.addEventListener("DOMContentLoaded", function() {
let products = []
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then(res => res.json())
.then(obj => {
    console.log(obj)
    obj.forEach(product => {
        renderProducts(product)
        products.push(product)
        // console.log(product.name)
    })






let addToCart = document.querySelector(".sub")
let cartTotal = 0;


const searchBar = document.querySelector('#searchBar')
const movieList = document.querySelector('.genreButton')
const dataList = document.querySelector('.container')

searchBar.addEventListener('input', (e) => {
    console.log(e.target)
    console.log('search', e.target.value)

    dataList.innerHTML = ''

    products.forEach(product => {

        if (product.name.toLowerCase().includes(e.target.value.toLowerCase()) ) {
            renderProducts(product)
            console.log(product)
        }
    })
})
})
})
