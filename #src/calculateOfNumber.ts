export default class CalculateOfNubmer{
    private arrayOfNumber: number[];

    constructor(consoleNumber: string){
        this.arrayOfNumber = consoleNumber.split('').map( item => parseInt(item));
    }

    getMaxElementFromNumber(): number{
        return Math.max(...this.arrayOfNumber);
    }
    
    getMinElementFromNumber(): number{
        return Math.min(...this.arrayOfNumber);
    }

    getSummaElementFromNumber(): number{
        return this.arrayOfNumber.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    getAverageElementFromNumber(): number{
        return this.arrayOfNumber.reduce((previousValue, currentValue) => previousValue + currentValue) / this.arrayOfNumber.length;
    }
}