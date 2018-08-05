class SingleSellingPrice {

    constructor(priceValue) {
        this.priceValue = priceValue;
    }

    minus(cost) {
        return this.priceValue - cost;
    }

}

export default SingleSellingPrice;