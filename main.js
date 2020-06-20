 //concept of let and conts
 let divs = document.getElementsByTagName('div');
 console.log(divs);
for(let i = 0; i < divs.length; i++)
{
    divs[i].addEventListener('click',function(){
        console.log('you have clicked div #'+ i);
        
    });
}

//string literals
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

//user list
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