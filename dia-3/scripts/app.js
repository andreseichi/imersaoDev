const secretNumber = Math.floor(Math.random() * 11);

const guessValue = () => {
  const guess = parseInt(document.getElementById('value').value);

  let result = document.getElementById('result');

  guess > 10 || guess < 0
    ? (result.innerHTML = `Tente um valor entre 0 a 10 apenas`)
    : guess === secretNumber
    ? (result.innerHTML = `Você acertou 😁 O valor secreto é ${secretNumber}`)
    : (result.innerHTML = `Você errou 😥 ${
        guess > secretNumber
          ? ' O valor secreto é menor'
          : ' O valor secreto é maior'
      }`);
};
