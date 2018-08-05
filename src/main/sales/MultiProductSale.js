import Cost from "../Cost";
import Profit from "../Profit";
import SingleUnitBuy from "../units/SingleUnitBuy";

const accumulatedCost = function(singleOrPackProduct) {
    return singleOrPackProduct.reduce((acc, productOrPack) => {
        return productOrPack.accumulatedCost(acc);
    }, new Cost(0));
}

class MultiProductSale {

    constructor(singleOrPackProduct, sellingPrice, unitsToBuy = new SingleUnitBuy()) {
        this.unitsToBuy = unitsToBuy;
        this.singleOrPackProduct = singleOrPackProduct;
        this.sellingPrice = sellingPrice;
    }

    profit() {
        let products = this.unitsToBuy.calculateProducts(this.singleOrPackProduct);
        return new Profit(accumulatedCost(products).minus(this.sellingPrice));
    }

}

export default MultiProductSale;