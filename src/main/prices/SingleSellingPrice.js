class SingleSellingPrice {

    constructor(priceValue) {
        this.priceValue = priceValue;
    }

    minus(cost) {
        return cost.minus(this.priceValue);
    }

}

export default SingleSellingPrice;