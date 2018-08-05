import {expect} from 'chai';

import UnitSale from '../main/sales/UnitSale';
import MultiProductSale from '../main/sales/MultiProductSale';

import SingleProduct from '../main/SingleProduct';
import Cost from '../main/Cost';
import SingleSellingPrice from '../main/SingleSellingPrice';
import Profit from '../main/Profit';

describe('The supermarket is', () => {

  it('Selling a product that has a profit equal to selling price minus cost', () => {
    let product = new SingleProduct(new Cost(100));
    let sale = new UnitSale(product, new SingleSellingPrice(300));

    expect(sale.profit().toJson()).to.be.equal(new Profit(200).toJson());
  });

  it('Selling many products that has a profit equal to selling price minus accumulated cost', () => {
    let products = [
      new SingleProduct(new Cost(100)),
      new SingleProduct(new Cost(120))
    ];
    let sale = new MultiProductSale(products, new SingleSellingPrice(300));

    expect(sale.profit().toJson()).to.be.equal(new Profit(80).toJson());
  });

});