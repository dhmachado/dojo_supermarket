import Cost from "../Cost";
import Profit from "../Profit";

const accumulatedCost = function(products) {
    return products.reduce((acc, product) => {
        return product.accumulatedCost(acc);
    }, new Cost(0));
}

class MultiProductSale {

    constructor(products, sellingPrice) {
        this.products = products;
        this.sellingPrice = sellingPrice;
    }

    profit() {
        return new Profit(accumulatedCost(this.products).minus(this.sellingPrice));
    }

}

export default MultiProductSale;