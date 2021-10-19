

const buttons = document.querySelectorAll('button');


const display = document.querySelector('.output');

buttons.forEach(function (button){
  button.addEventListener('click' , calculate) ; 
});

function calculate(event){
  const currentValue = event.target.value;
  console.log(currentValue);

  if( currentValue === '='){
    if(display.value !== ''){
      display.value= eval(display.value);
    }
  }else if (currentValue === 'C'){
    display.value= '';
  }else{
    display.value += currentValue;
  }
}
