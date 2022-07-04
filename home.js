///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE

const greetUser = username => {
    return ('Welcome back, ' + username)
}

console.log(greetUser('Andrew'))


//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE

function canWeDeliver(zipCode){
   // for (let i = 0 ; i< deliveryAreaZipCodes.length ; i++)
    if (zipCode == 85205){
        return `You're in our delivery zone!`
    } else if 
        (zipCode == 85204){
            return `You're in our delivery zone!`
    
       
    } else if (
        zipCode == 85203
    ) {return `You're in our delivery zone!`
} else if (zipCode == 85213){
    return `You're in our delivery zone!`
    
} else if ( zipCode == 85206) {
    return `You're in our delivery zone!`
    
} else {return `Sorry, we can't deliver to that address.`}
} 
console.log(canWeDeliver(85206))

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE


function canWeDeliverTwo(zipCode) {

    var deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206];

    
    return deliveryAreaZipCodes.includes(zipCode);

    }
   let zipCodeCheck = canWeDeliverTwo(85209)
    if (zipCodeCheck == true) {
        console.log (`You're in our delivery zone!`)
    }
    else {console.log(`Sorry, we can't deliver to that address.`)}
   
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

//CODE HERE

// let check = deals[0].title
// console.log(check)

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: 'This deal lasts until the end of March!'
    }
]

const newTitle = deals[0].title = '10% off!'
console.log(newTitle)

/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE



function  changeDesc (array,desc,newdesc) 
{
    for (let i=0; i< array.length; i++)
    {
    let tempstring = array[i].desc
//console.log(tempstring)
//console.log(desc)
      if(tempstring === desc)
      {
      tempstring = tempstring.replace(desc,newdesc) 
      deals[i].desc = tempstring
      } 
    }
  }

  changeDesc(deals,'This deal lasts until the end of March!','This deal lasts until the end of April!')
  console.log(deals)

