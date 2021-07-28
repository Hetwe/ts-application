import CalculateOfNubmer from "./calculateOfNumber";
const chalk = require('chalk') // Для покраски текста ошибки

const patternNumber: RegExp = new RegExp(/^[1-9]{1}[0-9]*$/);


const consoleNumber = process.argv.slice(2).toString();

try {
    if(consoleNumber === ''){
        throw Error('Параметр не передан!')
    }
    else if(!patternNumber.test(consoleNumber)){
        throw Error('Число введено неправильно!');
    }
} catch (error) {
    console.log(chalk.red(error));
}

const calculate: CalculateOfNubmer = new CalculateOfNubmer(consoleNumber);

console.log(
`Сумма: ${calculate.getSummaElementFromNumber()}
Среднее арифметическое цифр: ${calculate.getAverageElementFromNumber()}
Минимальная цифра: ${calculate.getMinElementFromNumber()}
Максимальная цифра: ${calculate.getMaxElementFromNumber()}`
);