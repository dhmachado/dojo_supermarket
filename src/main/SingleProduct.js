import Profit from "./Profit";

class SingleProduct {

    constructor(cost) {
        this.cost = cost;
    }

    profit(price) {
        return new Profit(this.cost.minus(price));
    }

}

export default SingleProduct;