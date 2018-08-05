import Profit from "../Profit";
import SingleProduct from './SingleProduct';

class ProductPack {

    constructor(quantity, totalCost) {
        this.quantity = quantity;
        this.totalCost = totalCost;

        this.unitCost = this.totalCost.divide(this.quantity);
    }

    profit(price) {
        return new Profit(this.unitCost.minus(price));
    }

    obtainProducts(quantity) {
        return Array(quantity).fill(new SingleProduct(this.unitCost));
    }
    
}

export default ProductPack;