//TASK6


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


shoppingCart.unshift('Meat')  //  Add 'Meat' at the beginning of the cart if it's not already added

shoppingCart.push('Sugar')  // Add 'Sugar' at the end of the cart if it's not already added

shoppingCart.splice(4, 1)  //remove 'Honey'           4 - it is Honey 1 -remove

shoppingCart.splice(3, 1, 'Green Tea') // modify Tea to 'Green Tea'  3- it is Tea 1 - remove  'Green Tea' - new 


console.log(shoppingCart)
