Inputvalue();
function Inputvalue(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('ask you question ?', question => {
        findanswer(question);
      });
    
}
function findanswer(question){
  
    const words = question.split(" ")

    if(words.length >= 4){
        const num1 = Number(words[2]);
        const num2 = Number(words[words.length - 1].split('?')[0])
        let operation = words[3];

        let result;

        switch(operation){
          case 'plus':{
            result = num1 + num2;
            break;
          }
          case 'minus':{
            result = num1 - num2;
            break;
          }
          case 'multiplied':{
            operation = 'multiplied by'
            result = num1 * num2;
            break;
          }
          case 'divided':{
            operation = 'divided by'
            result = num1 / num2;
            break;
          }
          default:{
            console.log('invalid oprator');
          }
        }

        if(result){
            console.log(`${num1} ${operation} ${num2} is ${result}`)
        }

    }else{
        console.log('please enter a valid question')
    }
    return;
}

