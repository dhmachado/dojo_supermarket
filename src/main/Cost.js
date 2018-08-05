class Cost {

    constructor(costValue) {
        this.costValue = costValue;
    }

    minus(price) {
        return price - this.costValue;
    }

    plus(anotherCost) {
        return new Cost(this.costValue + anotherCost.costValue);
    }

    divide(quantity) {
        return new Cost(this.costValue / quantity);
    }

}

export default Cost;