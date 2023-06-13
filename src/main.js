const advice = document.querySelector('#advice');
const adviceId = document.querySelector('#adviceId');
const diceBtn = document.querySelector('#diceBtn');

getAdvice()

diceBtn.addEventListener('click', () => {
  getAdvice()
});

function getAdvice() {

  // Generar un numero aleatorio entre 1 y 200
  const id = Math.floor(Math.random() * 600) + 1;
  
  // Consultar la API
  fetch(`https://api.adviceslip.com/advice/${id}`)
  .then(res => res.json())
  .then(data => {
    const adviceMsg = data.slip.advice;
    adviceId.innerHTML = id;
    advice.innerHTML = adviceMsg;
  })
  .catch(err => getAdvice());

};