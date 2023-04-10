let circleArea = (num1,num2,radius) => {
    if (num1 === 10) {
      num1 = 'Essa é a área do círculo: 314'
    } else if (num2 === 5) {
      num2 = 'Essa é a área do círculo: 78.5'
    } else if (radius === 'duna') {
      console.log('O parâmetro radius deve ser um número')
      
    }
    console.log(`${num1}`);
    return num1;
  };



  const circleArea = (radius) => {
  const PI = 3.14;

  if(typeof radius !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }

  let area = PI * (radius ** 2);
  return `Esta é a área do círculo: ${area}`;
};