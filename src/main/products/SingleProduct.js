import Profit from "../Profit";

class SingleProduct {

    constructor(cost) {
        this.cost = cost;
    }

    profit(price) {
        return new Profit(this.cost.minus(price));
    }

    accumulatedCost(accumulatedTotal) { 
        return accumulatedTotal.plus(this.cost);
    }

}

export default SingleProduct;