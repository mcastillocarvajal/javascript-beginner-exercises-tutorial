let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost;
    // Your code here
    if (guests<=50){
        cost = '$4,000'
    } else if (guests<=100){
        cost = '$10,000'
    } else if (guests<=200){
        cost = '$15,000'
    } else {
        cost = '$20,000'
    }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
