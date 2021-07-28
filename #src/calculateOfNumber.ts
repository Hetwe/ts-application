class CalculateOfNubmer{
    private arrayOfNumber: number[];

    constructor(consoleNumber: string){
        this.arrayOfNumber = consoleNumber.split('').map( item => parseInt(item));
    }

    getMaxElementFromNumber(){
        return Math.max(...this.arrayOfNumber);
    }
    
    getMinElementFromNumber(){
        return Math.min(...this.arrayOfNumber);
    }

    getSummaElementFromNumber(){
        return this.arrayOfNumber.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    getAverageElementFromNumber(){
        return this.arrayOfNumber.reduce((previousValue, currentValue) => previousValue + currentValue) / this.arrayOfNumber.length;
    }
}