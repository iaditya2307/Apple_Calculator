

let buttons=document.querySelectorAll('button');
// queryselector all ki wajah se array return hoti hai (classlist)
// to isliye we are looping it

let input=document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click',function(event){
         let btnText =event.target.innerText;
         if(btnText==='AC'){
            input.value='';
         }
         else if ( btnText === '=' ){
          try {
            input.value= eval(input.value);
          } catch (error) {
            input.value= 'INVALID';
          }
         }
         else{
         input.value+=btnText;
         }
    })
}


