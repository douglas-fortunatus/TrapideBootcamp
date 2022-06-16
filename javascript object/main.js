// code exercise 29

const product = {
    name : 'Gummy Bears',
    inStock : true,
    price : 1.99,
    flavors : ['grape', 'apple', 'chery']
}

// code exercise 30

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
