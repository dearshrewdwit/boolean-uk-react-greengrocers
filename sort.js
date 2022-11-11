
const storeItems =  [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
      type: 'veg'
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.55,
      type: 'veg'
    },
    {
      id: "003-apple",
      name: "apple",
      price: 1.00,
      type: 'fruit'
    },

]
var res1 = storeItems.sort(({price:a}, {price:b}) => a-b);
var res2 = storeItems.sort(({name:a}, {name:b}) => a-b);

// console.log(res1);
// console.log(res2);

function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  
  console.log(storeItems.sort( compare ))