import Profit from "../Profit";

class ProductPack {

    constructor(quantity, totalCost) {
        this.quantity = quantity;
        this.totalCost = totalCost;
    }

    profit(price) {
        let unitCost = this.totalCost.divide(this.quantity);
        return new Profit(unitCost.minus(price));
    }

}

export default ProductPack;