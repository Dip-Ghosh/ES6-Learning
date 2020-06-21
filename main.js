//  //concept of let and conts
 let divs = document.getElementsByTagName('div');
 console.log(divs);
for(let i = 0; i < divs.length; i++)
{
    divs[i].addEventListener('click',function(){
        console.log('you have clicked div #'+ i);

    });
}

// //string literals
  function retrunEmployee()
  {
      const name = "Dip";
      const age =  26;
      const position = "Associate software Engineer";
      console.log(`Name is ${name} and age is ${age} and positio is ${position}`);
  }
  retrunEmployee();

  //object literals
  const users = {
      name:'Dip',
      age : '21'
  }
  console.log(`name is ${users.name} and age is ${users.age}`);

// //user list
let list = document.querySelector('.user_list');
 function addUsers(name,lastName)
 {
    let  template = String.raw `
     <div class="user">
        <div>Name  ${name}</div>
        <div>LastName ${lastName}</div>
    </div>
     `;
     list.insertAdjacentHTML('beforeEnd',template);
 }
 addUsers('Dip ','Ghosh');

//forEach
const artists = ['singer','actor','dramer'];
artists.forEach(function(item){

    console.log(item);

});
let purchases = [
    { quantity : 2, amount : 200 },
    { quantity : 3, amount : 300 },
    { quantity : 4, amount : 500}
]
let totalAmount = 0;
purchases.forEach(function(item){
    totalAmount += item.amount * item.quantity;
})
console.log(totalAmount);

// //exercise
 var products = [
    { name : 'iphone', price : 200 },
    { name : 'samsung', price : 70 },
    { name : 'nokia', price : 150 },
    { name : 'blackbery', price : 98 },
    { name : 'windows Phone', price : 10 }
 ];


 let list = document.querySelector('.product_list');

 products.forEach(function(item){


    function discount(){
        if(item.price<100){
        return `<span>On sale !!</span></div>`
    }
    else{
        return `<span> </span></div>`
    }
    }
    let  template =  `
    <div class="product">
       <h1><strong> ${item.name}</strong </h1>
       ${discount()}
       <strong>Price:$${item.price}</strong>
      </div>
    `;
    list.insertAdjacentHTML('beforeEnd',template);
 })

//map

const arr = [2,3,4,5,7,8,9,10];
const number = arr.map(function (arr) {
    return arr;

})
console.log(number);
const users = [
    {name:'Dip',width:200,height:300},
    {name:'mahi',width:400,height:500},
    {name:'saiful',width:700,height:800},

    ];
const value = users.map(function (user) {
    return user;

})
value.forEach(function (item) {
  console.log(`name is ${item.name} and width is ${item.width} and height is ${item.height}`)

})

