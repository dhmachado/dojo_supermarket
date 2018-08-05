import {expect} from 'chai';

import UnitSale from '../main/sales/UnitSale';
import MultiProductSale from '../main/sales/MultiProductSale';

import SingleProduct from '../main/products/SingleProduct';
import ProductPack from '../main/products/ProductPack';

import SingleSellingPrice from '../main/prices/SingleSellingPrice';
import BarteringSellingPrice from '../main/prices/BarteringSellingPrice';

import UnitsToBuy from '../main/units/UnitsToBuy';

import Cow from '../main/Cow';
import Cost from '../main/Cost';
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

  it('Selling a single product from a pack that has a profit equal to selling price minus cost of one product of the pack', () => {
    let productPack = new ProductPack(50, new Cost(1000));
    let sale = new UnitSale(productPack, new SingleSellingPrice(300));

    expect(sale.profit().toJson()).to.be.equal(new Profit(280).toJson());
  });

  it('Selling many products from a pack that has a profit equal to selling price minus accumulated cost of some products of the pack', () => {
    let productPack = new ProductPack(50, new Cost(1000));
    let sale = new MultiProductSale(productPack, new SingleSellingPrice(300), new UnitsToBuy(5));

    expect(sale.profit().toJson()).to.be.equal(new Profit(200).toJson());
  });

  it('Bartering products', () => {
    let product = new SingleProduct(new Cost(100));
    let sale = new UnitSale(product, new BarteringSellingPrice(new Cow()));

    expect(sale.profit().toJson()).to.be.equal(new Profit(new Cow()).toJson());
  });

});