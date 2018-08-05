class UnitSale {

    constructor(product, sellingPrice) {
        this.product = product;
        this.sellingPrice = sellingPrice;
    }

    profit() {
        return this.product.profit(this.sellingPrice);
    }

}

export default UnitSale;