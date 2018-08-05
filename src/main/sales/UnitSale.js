class UnitSale {

    constructor(singleOrPackProduct, sellingPrice) {
        this.singleOrPackProduct = singleOrPackProduct;
        this.sellingPrice = sellingPrice;
    }

    profit() {
        return this.singleOrPackProduct.profit(this.sellingPrice);
    }

}

export default UnitSale;