const Convert = async () => {
  const valueElement = document.getElementById('valor');
  const value = valueElement.value;

  const valueDolar = parseFloat(value);

  const valueConvert = await getDolarValue();

  const valueReal = valueDolar * valueConvert;

  const valueConvertedElement = document.getElementById('valorConvertido');
  const valueConverted = `O valor em Real é R$${valueReal.toFixed(2)}`;

  valueConvertedElement.innerHTML = valueConverted;
};

const getDolarValue = async () => {
  const response = await fetch(
    'https://economia.awesomeapi.com.br/last/USD-BRL',
  );

  const json = await response.json();

  const dataInfo = await json.USDBRL;
  const valueConvertedDolar = await parseFloat(dataInfo.high);

  return valueConvertedDolar;
};
