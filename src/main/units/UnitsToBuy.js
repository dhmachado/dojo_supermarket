class UnitsToBuy {

    constructor(quantity) {
        this.quantity = quantity;
    }

    calculateProducts(singleOrPackProduct) {
        return singleOrPackProduct.obtainProducts(this.quantity);
    }

}

export default UnitsToBuy;