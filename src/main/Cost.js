class Cost {

    constructor(costValue) {
        this.costValue = costValue;
    }

    minus(price) {
        return price.minus(this.costValue);
    }

    plus(anotherCost) {
        return new Cost(this.costValue + anotherCost.costValue);
    }

}

export default Cost;