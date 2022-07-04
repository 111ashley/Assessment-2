///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce((total, food) => {
    return total + food.price
}, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    let cartTax = 0
    cartTax = cartTotal * tax
    let finalTotal = 0
    // couponValue = coupon * discountRate
    finalTotal = cartTotal + tax - couponValue
    return finalTotal
}
let finalCost = calcFinalPrice(summedPrice, 15, .10)
console.log(finalCost)
//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
    Important information a restaurant would need about its customer is, 
    
     - order info (string)
     - name (string)
     - phone number (number)
     - email (string)
     - address (string)
     - card info (string)
    
*/
    
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    order : 'pasta, breadsticks, soda',
    name : 'Adam Sandler',
    number : '248-305-2222',
    email : 'happy.gilmore@gmail.com',
    address : '1234 golf lane',
    card : '6890-5345-6546-9999'
}
console.log(customer)