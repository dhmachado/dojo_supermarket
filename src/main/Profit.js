class Profit {

    constructor(profitValue) {
        this.profitValue = profitValue;
    }

    toJson() {
        return JSON.stringify(this)
    }

}

export default Profit;