const botones = document.querySelectorAll('.btn-select');
let numberSelected = 0;
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(otroBoton => {
      otroBoton.classList.remove('active');
    });
    numberSelected = boton.textContent;
    console.log(numberSelected)

    boton.classList.add('active');
  });
});
// Submit
const Submit = document.querySelector('.submit');
const surveyCard = document.querySelector('.survey');
const receiveCard = document.querySelector('.receive');
const textSelect = document.querySelector('.text-select');
Submit.addEventListener('click', ()=> {
    console.log('enviado');
    surveyCard.style.display = 'none';
    receiveCard.style.display = 'flex';
    textSelect.textContent = `You selected ${numberSelected} out of 5`;
})
const star = document.querySelector('.star-icon');
star.addEventListener('click', ()=> {
    star.classList.toggle('blank');
})




