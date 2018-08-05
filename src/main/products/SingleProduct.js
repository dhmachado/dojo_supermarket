import Profit from "../Profit";

class SingleProduct {

    constructor(cost) {
        this.cost = cost;
    }

    profit(price) {
        return new Profit(price.minus(this.cost));
    }

    accumulatedCost(accumulatedTotal) { 
        return accumulatedTotal.plus(this.cost);
    }

}

export default SingleProduct;