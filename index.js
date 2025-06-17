let initial_price=7.00;
let lettuce_count=0;
let bacon_count=0;
let cheese_count=0;
let meat_count=0;
 let burger_text=document.querySelector('.burger-text');
 let orderbtn=document.getElementById('orderbtn');
let showorder=document.getElementById('helo');
let lettuce=[];
let cheese=[];
let bacon=[];
let meat=[];


if(sessionStorage.getItem('isLoggedIn')=='true')
{
    showorder.style.display="flex";
}

 function update_ingrediants()
 {
    if(lettuce_count==0 && bacon_count==0 && cheese_count==0 && meat_count ==0)
    burger_text.innerHTML='No ingrediants Added';
    else
    burger_text.innerHTML='';
 }

let parenttext=document.getElementById('parent-text');
parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;

function lattuce_increase(){
    
   if(lettuce_count>=3)
    {
        alert("Maximun lettuce you can add  is 3");
    }
    else
    {
    lettuce_count++;
    initial_price+=4.50;
    parenttext.innerText=`Currrent Price: $${initial_price.toFixed(2)}`;
    }
    if(lettuce_count==1)
    {
        burger_text.innerHTML='';
        let lettuce1=document.querySelector('.lettuce1');
        lettuce1.style.margin="3px";
        lettuce1.style.height='30px';
        lettuce1.style.width='500px';
        lettuce1.style.borderRadius='50px';
        lettuce1.style.backgroundColor="red";
    }
    if(lettuce_count==2)
    {
        let lettuce2=document.querySelector('.lettuce2');
        lettuce2.style.margin="3px";
         lettuce2.style.height='30px';
        lettuce2.style.width='500px';
        lettuce2.style.borderRadius='50px';
        lettuce2.style.backgroundColor="red";
    }
    if(lettuce_count==3)
    {
        let lettuce3=document.querySelector('.lettuce3');
        lettuce3.style.margin="3px";
         lettuce3.style.height='30px';
        lettuce3.style.width='500px';
        lettuce3.style.borderRadius='50px';
        lettuce3.style.backgroundColor="red";
    }
    localStorage.setItem('lettuce_count',lettuce_count);
}
function lattuce_decrease(){
    if(lettuce_count>0)
    {
        lettuce_count--;
        initial_price-=4.50;
        parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;
        
    }
    else
    parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;

        if(lettuce_count==0){
            update_ingrediants();
            let lettuce_dec1=document.querySelector('.lettuce1');
             lettuce_dec1.style.margin="0px";
             lettuce_dec1.style.height='0px';
             lettuce_dec1.style.width='0px';
             lettuce_dec1.style.borderRadius='0px';
              lettuce_dec1.style.backgroundColor="white";
            lettuce.innerHTML='No Ingrediants Added';

        }
        if(lettuce_count==1)
        {
            let lettuce_dec2=document.querySelector('.lettuce2');
             lettuce_dec2.style.margin="0px";
             lettuce_dec2.style.height='0px';
             lettuce_dec2.style.width='0px';
             lettuce_dec2.style.borderRadius='0px';
             lettuce_dec2.style.backgroundColor="white";

        }
        if(lettuce_count==2)
        {
            let lettuce_dec3=document.querySelector('.lettuce3');
             lettuce_dec3.style.margin="0px";
         lettuce_dec3.style.height='0px';
        lettuce_dec3.style.width='0px';
        lettuce_dec3.style.borderRadius='0px';
        lettuce_dec3.style.backgroundColor="white";

        }
        console.log(lettuce_count);
        
}
function bacon_increase(){
    if(bacon_count>=3)
    {
        alert("Maximun bacon you can add  is 3");
    }
    else
    {
    bacon_count++;
    initial_price+=3.70;
    parenttext.innerHTML=`Current Price:$${initial_price.toFixed(2)}`;
    }
    if(bacon_count==1)
    {
        burger_text.innerHTML='';
        let bacon1=document.querySelector('.bacon1');
        bacon1.style.margin="3px";
        bacon1.style.height='20px';
        bacon1.style.width='500px';
        bacon1.style.borderRadius='30px';
        bacon1.style.backgroundColor="yellow";
    }
     if(bacon_count==2)
    {
        let bacon2=document.querySelector('.bacon2');
        bacon2.style.margin="3px";
        bacon2.style.height='20px';
        bacon2.style.width='500px';
        bacon2.style.borderRadius='30px';
        bacon2.style.backgroundColor="yellow";
    }
    if(bacon_count==3)
    {
         let bacon3=document.querySelector('.bacon3');
        bacon3.style.margin="3px";
        bacon3.style.height='20px';
        bacon3.style.width='500px';
        bacon3.style.borderRadius='30px';
        bacon3.style.backgroundColor="yellow";
    }
    

    
}
function bacon_decrease()
{
    if(bacon_count>0)
    {
         bacon_count--;
        initial_price-=3.70;
        
        parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;
    }
    else
     parenttext.innerText=`Currrent Price: $${initial_price.toFixed(2)}`;

     if(bacon_count==0)
     {
         update_ingrediants();
        let bacon_dec1=document.querySelector('.bacon1');
         bacon_dec1.style.margin="0px";
         bacon_dec1.style.height='0px';
         bacon_dec1.style.width='0px';
        bacon_dec1.style.borderRadius='0px';
         bacon_dec1.style.backgroundColor="white";
     }
      if(bacon_count==1)
     {
        let bacon_dec2=document.querySelector('.bacon2');
         bacon_dec2.style.margin="0px";
         bacon_dec2.style.height='0px';
         bacon_dec2.style.width='0px';
        bacon_dec2.style.borderRadius='0px';
         bacon_dec2.style.backgroundColor="white";
     }
      if(bacon_count==2)
     {
        let bacon_dec3=document.querySelector('.bacon3');
         bacon_dec3.style.margin="0px";
         bacon_dec3.style.height='0px';
         bacon_dec3.style.width='0px';
        bacon_dec3.style.borderRadius='0px';
         bacon_dec3.style.backgroundColor="white";
     }
}
function cheese_increase()
{
   if(cheese_count>=3)
    {
        alert("Maximun cheese you can add  is 3");
    }
    else
    {
    cheese_count++;
    initial_price+=5.40;
    parenttext.innerHTML=`Current Price:$${initial_price.toFixed(2)}`;
    }
    console.log(cheese_count);
    if(cheese_count==1)
    {
        burger_text.innerHTML='';
        let cheese1=document.querySelector('.cheese1');
        cheese1.style.margin="3px";
        cheese1.style.height='10px';
        cheese1.style.width='500px';
        cheese1.style.borderRadius='50px';
        cheese1.style.backgroundColor="green";
    }
    if(cheese_count==2)
    {
        let cheese2=document.querySelector('.cheese2');
        cheese2.style.margin="3px";
        cheese2.style.height='10px';
        cheese2.style.width='500px';
        cheese2.style.borderRadius='50px';
        cheese2.style.backgroundColor="green";
    }
     if(cheese_count==3)
    {
        let cheese3=document.querySelector('.cheese3');
        cheese3.style.margin="3px";
        cheese3.style.height='10px';
        cheese3.style.width='500px';
        cheese3.style.borderRadius='50px';
        cheese3.style.backgroundColor="green";
    }
}
function cheese_decrease()
{
    if(cheese_count>0)
    {
        cheese_count--;
        initial_price-=5.40;
       
        parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;
    }
    else
     parenttext.innerText=`Currrent Price: $${initial_price.toFixed(2)}`;
     if(cheese_count==0)
     {
        update_ingrediants();
        let cheese_dec1=document.querySelector('.cheese1');
         cheese_dec1.style.margin="0px";
         cheese_dec1.style.height='0px';
         cheese_dec1.style.width='0px';
         cheese_dec1.style.borderRadius='0px';
         cheese_dec1.style.backgroundColor="white";
     }
      if(cheese_count==1)
     {
        let cheese_dec2=document.querySelector('.cheese2');
         cheese_dec2.style.margin="0px";
         cheese_dec2.style.height='0px';
         cheese_dec2.style.width='0px';
         cheese_dec2.style.borderRadius='0px';
         cheese_dec2.style.backgroundColor="white";
     }
      if(cheese_count==2)
     {
        let cheese_dec3=document.querySelector('.cheese3');
         cheese_dec3.style.margin="0px";
         cheese_dec3.style.height='0px';
         cheese_dec3.style.width='0px';
         cheese_dec3.style.borderRadius='0px';
         cheese_dec3.style.backgroundColor="white";
     }
      

     
}
function meat_increase()
{
   if(meat_count>=3)
    {
        alert("Maximun meat you can add  is 3");
    }
    else
    {
    meat_count++;
    initial_price+=10.40;
    parenttext.innerHTML=`Current Price:$${initial_price.toFixed(2)}`;
    }
    console.log(meat_count);
    if(meat_count==1)
    {
         burger_text.innerHTML='';
        let meat1=document.querySelector('.meat1');
        meat1.style.margin="3px";
        meat1.style.height='10px';
        meat1.style.width='500px';
        meat1.style.borderRadius='50px';
        meat1.style.backgroundColor="red";
    }
     if(meat_count==2)
    {
      
        let meat2=document.querySelector('.meat2');
        meat2.style.margin="3px";
        meat2.style.height='10px';
        meat2.style.width='500px';
        meat2.style.borderRadius='50px';
        meat2.style.backgroundColor="red";
    }
    if(meat_count==3)
    {
      
        let meat3=document.querySelector('.meat3');
        meat3.style.margin="3px";
        meat3.style.height='10px';
        meat3.style.width='500px';
        meat3.style.borderRadius='50px';
        meat3.style.backgroundColor="red";
    }
}
function meat_decrease() 
{
    if(meat_count>0)
    {
        meat_count--;
        initial_price-=10.40;
       
        parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;
    }
    else
     parenttext.innerText=`Current Price: $${initial_price.toFixed(2)}`;
     if(meat_count==0)
     {
        update_ingrediants();
        
        let meat_dec1=document.querySelector('.meat1');
         meat_dec1.style.margin="0px";
         meat_dec1.style.height='0px';
         meat_dec1.style.width='0px';
         meat_dec1.style.borderRadius='0px';
         meat_dec1.style.backgroundColor="white";
     }
      if(meat_count==1)
     {
        let meat_dec2=document.querySelector('.meat2');
         meat_dec2.style.margin="0px";
         meat_dec2.style.height='0px';
         meat_dec2.style.width='0px';
         meat_dec2.style.borderRadius='0px';
         meat_dec2.style.backgroundColor="white";
     }
       if(meat_count==2)
     {
        let meat_dec3=document.querySelector('.meat3');
         meat_dec3.style.margin="0px";
         meat_dec3.style.height='0px';
         meat_dec3.style.width='0px';
         meat_dec3.style.borderRadius='0px';
         meat_dec3.style.backgroundColor="white";
     }
}

let signup=document.getElementById('signup')
function submit()
{
sessionStorage.removeItem('isLoggedIn');
let main=document.querySelector('main');
main.innerHTML = ' ';
const form = document.createElement('form');
form.id = 'signup-form';
form.style.height='200px';
form.style.width='30%';
form.style.border='1px solid black';
form.style.display='flex';
form.style.backgroundColor="#ffffff";
form.style.margin='40px 500px';
form.style.boxShadow='black';
form.style.justifyContent='center';
form.style.alignItems='center'
form.style.flexDirection='column';
let sign_in_board=document.createElement('p');
sign_in_board.id='sign_in_baord';
sign_in_board.textContent='';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.placeholder="E-mail Address";
usernameInput.id = 'username';
usernameInput.name = 'username';
usernameInput.style.margin='10px';
usernameInput.style.padding='5px';
usernameInput.style.width='200px';
usernameInput.required = true;

const passwordInput = document.createElement('input');
passwordInput.style.marginBottom="10px";
passwordInput.style.padding="6px";
passwordInput.style.width="200px"
passwordInput.type = 'password';
passwordInput.placeholder="PassWord";
passwordInput.id = 'password';
passwordInput.name = 'password';
passwordInput.required = true;


const submitButton = document.createElement('button');
submitButton.type ='button';
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';
submitButton.style.border="none";
submitButton.style.cursor="pointer";
submitButton.style.backgroundColor="White";
submitButton.style.color="#5c9210";

const signinbtn = document.createElement('button');
signinbtn.type='button';
signinbtn.style.cursor='pointer';
signinbtn.id='signbtn';
signinbtn.textContent='SignIn';
signinbtn.style.margin='10px';
signinbtn.style.padding='2px';
signinbtn.style.width='60px';
signinbtn.style.border='none';
signinbtn.style.backgroundColor="White";
signinbtn.style.color="#944137";


// Append all elements to the form
form.appendChild(sign_in_board);
form.appendChild(usernameInput);
form.appendChild(passwordInput);
form.appendChild(submitButton);
form.appendChild(signinbtn);


main.appendChild(form);



let signin_btn=document.getElementById('signbtn');
signin_btn.onclick=function()
{
      if(signin_btn.innerHTML=="SignIn")
      {
        signin_btn.innerHTML="Register";
      }
      else if(signin_btn.innerHTML=='Register')
      {
        signinbtn.innerHTML="SignIn";
      }
      
}
let submit_btn=document.getElementById('submit-btn');

 let count=0;
submit_btn.onclick=function()
{
     var usernames=[];
 var passwords=[];
    
   if (signin_btn.innerHTML == 'Register') {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let corr_username = false;
    let email_exist = false;

    for (let i = 0; i < username.length; i++) {
        if (username[i] == '@')
            corr_username = true;
    }

    if (corr_username == false)
        sign_in_board.innerText='Incorrect E-mail';
    else {
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] == username)
                email_exist = true;
        }

        if (email_exist == true) {
            sign_in_board.innerHTML='User Exist';
        } else {
            usernames.push(username);
            passwords.push(password);
            
            count=+1;
            sign_in_board.innerText='Sign Up Successfull';
            localStorage.setItem('passwords',JSON.stringify(passwords));
             localStorage.setItem('usernames',JSON.stringify(usernames));
        }
    }
}
     
if (signin_btn.innerHTML == "SignIn") 
    {
       
           let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
      let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
let passwords = JSON.parse(localStorage.getItem('passwords')) || [];

    let corr_email = false;
    let corr_pass = false;

    if (username.length == 0) {
        sign_in_board.innerHTML='Please First SignUP';
    } else {
        console.log(usernames);
        console.log(passwords);
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] == username)
                corr_email = true;
            if (passwords[i] == password)
                corr_pass = true;
        }

            if (corr_email == true && corr_pass == true) {
                

                  window.location.href = 'index.html';
                 sessionStorage.setItem('isLoggedIn','true');
                       } 
                      
         else if (corr_email == false) {

            sign_in_board.innerHTML='Email Dosent Exist Please SignUp';
        } else if (corr_pass == false) {
            sign_in_board.innerHTML='Incorrect Password';
             
        } else {
            sign_in_board.innerHTML='User Dont Exist';
        }

}


    }
       }
let burgerbuilder=document.getElementById('burgerbuilder');
burgerbuilder.onclick=function()
{
    window.location.href='index.html';
}
}


