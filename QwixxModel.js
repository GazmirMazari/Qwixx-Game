export default class QwixxModel {

    constructor(numRows, maxColumn) {
        this.numRows = numRows;
        this.maxColumn = maxColumn;
        // this.color = ['R', 'Y', 'G', 'B']
         



        this.wdice = [1, 2];
        this.dice = [1,2,3, 4, 5, 6,];
        
    }

    // return a random integer in the range [1, 6]
    static rollDie() {
        return Math.floor(Math.random() * 6 + 1);
    }

    //Static method to convert to the index of the row

    // static convertColortoNum (numRows,color){
    //     for (i = 0; i < color.length; i++)
    //         numRows.push(i);
    //         return numRows;
    // }

    rollDice() {
        this.wdice = this.wdice.map(() => QwixxModel.rollDie());
        this.dice = this.dice.map(() => QwixxModel.rollDie());
    }
}