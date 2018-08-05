import { expect, assert } from 'chai';
import SingleProduct from '../main/SingleProduct';
import Cost from '../main/Cost';
import UnitSale from '../main/UnitSale';
import SingleSellingPrice from '../main/SingleSellingPrice';
import Profit from '../main/Profit';

describe('The supermarket is', () => {

  it('Selling a product that has a profit equal to selling price minus cost', () => {
    let product = new SingleProduct(new Cost(100));
    let sale = new UnitSale(product, new SingleSellingPrice(300));

    expect(sale.profit().toJson()).to.be.equal(new Profit(200).toJson());
  });

});