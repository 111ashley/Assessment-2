///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {

    name: "Pizza",
    price: 8,
    category: "Entree",
    popularity: 100,
    rating: 4.7,
    tags: ["homemade", "italian food", "organic", "vegan", "pizza", "dinner"]
    }


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
//console.log(pizza.tags)
console.log(pizza.tags[1])



/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

const price = pizza.price
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

const category = pizza.category
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    {
    name: "Calamari",
    price: 15,
    category: "Appetizer",
    popularity: 100,
    rating: 4.7,
    tags: ["appetizer", "italian food", "seafood", "wine","healthy food"]
    //tags: "wine"
}
,
{
    name: "Steak",
    price: 20,
    category: "Entree",
    popularity: 50,
    rating: 4.7,
    tags: ["meat", "bbq", "juicy"]
    //tags: "wine"
}
,
{
    name: "Burger",
    price: 8,
    category: "Entree",
    popularity: 30,
    rating: 4.8,
    tags: ["bbq", "beef", "american food", "beer"]
    //tags: "food"
},
{
    name: "Spaghetti",
    price: 10,
    category: "Entree",
    popularity: 100,
    rating: 4.3,
    tags: ["dinner", "italian food", "meatballs", "wine","pasta"]
    //tags: "food"
},
{
    name: "Lobster",
    price: 16,
    category: "Entree",
    popularity: 20,
    rating: 4.9,
    tags: ["fresh", "delicious", "seafood", "wine","healthy food"]
    //tags: "food"
}
]



for (let i = 0 ; i<foodArr.length; i++){
    let v = foodArr[i].tags
   // console.log (v)
}


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)


const filteredData = foodArr.filter((food) => {
    
    return food.tags.includes('wine') 
 })
 
 
 console.log(filteredData)



// name: "Lobster",
//     price: 6,
//     category: "Entree",
//     popularity: 100,
//     rating: 4.7,
//     tags: ["appetizer", "italian food", "seafood", "wine","healthy food"]

//////////////////PROBLEM 5////////////////////
/* 
    Now let's 
    write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
//function filterByProperty 

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

function filterByProperty (property, number, type) 
{
    console.log (property, number, type)
    
if (property === 'price' && type == 'Above') 
{
const higherPriceArray = foodArr.filter ( (fa) =>{
    return fa.price > number 
    
})
console.log(higherPriceArray)
console.log ('In the higher price area')
}
else if (property === 'price' && type === 'Below') 
{
    
const lowerPriceArray = foodArr.filter( (fa) => {
    
    return fa.price < number 
   
})
console.log(lowerPriceArray)
console.log('In the lower price area')

}
else if (property === 'rating' && type == 'Above') 
{
const higherRatingArray = foodArr.filter ( (fa) =>{
    return fa.rating > number 
    
})
console.log(higherRatingArray)
console.log ('In the higher rating area')
}
else if (property === 'rating' && type === 'Below') 
{
    
const lowerRatingArray = foodArr.filter( (fa) => {
    
    return fa.rating < number 
  
})
console.log(lowerRatingArray)
console.log('In the lower rating area')

}
else if (property === 'popularity' && type == 'Above') 
{
const higherPopularityArray = foodArr.filter ( (fa) =>{
    return fa.popularity > number 
    
})
console.log(higherPopularityArray)
console.log ('In the higher popularity area')
}
else if (property === 'popularity' && type === 'Below') 
{
    
const lowerPopularityArray = foodArr.filter( (fa) => {
    
    return fa.popularity < number 
   
})
console.log(lowerPopularityArray)
console.log('In the lower popularity area')

}
}

 filterByProperty("price",10, "Above")
 filterByProperty("rating",4.4, "Below")
 filterByProperty("popularity",60, "Below")