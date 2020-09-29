 export const createNumber = (size, max) => {
    const numbers = [];
    while(numbers.length != size){
  
      const num = Math.floor(Math.random() * Math.floor(max));
      if(!numbers.includes(num))
      {
        numbers.push(num);
      }
    }        
    return numbers;
  }