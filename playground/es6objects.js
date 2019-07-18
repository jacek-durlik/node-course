const name = 'Jacek';
const age = 37;

const user= {
    name,
    age,
    location: 'Gdansk'
}

console.log(user)

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, price} = product

console.log(label)
console.log(price)