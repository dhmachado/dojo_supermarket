class Cost {

    constructor(costValue) {
        this.costValue = costValue;
    }

    minus(price) {
        return price.minus(this.costValue);
    }

}

export default Cost;