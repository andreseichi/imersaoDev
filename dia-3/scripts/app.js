const secretNumber = Math.round(Math.random() * 11);

const divLimits = document.getElementById('limits');
const divPlay = document.getElementById('play');
divPlay.style.display = 'none';

const setLimit = () => {
  const minValue = document.getElementById('min-value').value;
  const maxValue = document.getElementById('max-value').value;

  const pDiv = document.querySelector('.guess-text');
  pDiv.innerHTML = `Digite um número de ${minValue} a ${maxValue}`;

  divPlay.style.display = 'block';
  divLimits.style.display = 'none';

  return {
    minValue,
    maxValue,
  };
};

const guessValue = () => {
  const values = setLimit();

  const guess = parseInt(document.getElementById('value').value);

  let result = document.getElementById('result');

  guess > values.maxValue || guess < values.minValue
    ? (result.innerHTML = `Tente um valor entre ${values.minValue} a ${values.maxValue} apenas`)
    : guess === secretNumber
    ? (result.innerHTML = `Você acertou 😁 O valor secreto é ${secretNumber}`)
    : (result.innerHTML = `Você errou 😥 ${
        guess > secretNumber
          ? ' O valor secreto é menor'
          : ' O valor secreto é maior'
      }`);
};
