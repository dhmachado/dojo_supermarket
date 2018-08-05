# Dojo Supermarket

### What are dojos ?
- A Coding Dojo is a meeting where a bunch of coders get together to work on a programming challenge. They are there have fun and to engage in [DeliberatePractice](https://codingdojo.org/DeliberatePractice/) in order to improve their skills.

See more information [here](https://codingdojo.org/WhatIsCodingDojo/)

### What can you tell me about this dojo ?
In this Dojo we are going to make an app for a SuperMarket, more specificaly we are going to add functionality 
for the profit calculation given different bussiness rules, such as selling single items or selling multiple 
items contained in a pack of products.

The use cases are the following:
- The SuperMarket is selling a product that has a profit equal to selling price minus cost
- The SuperMarket is selling many products that has a profit equal to selling price minus accumulated cost
- The SuperMarket is selling a single product from a pack that has a profit equal to selling price minus cost of one product of the pack
- The SuperMarket is selling many products from a pack that has a profit equal to selling price minus accumulated cost of some products of the pack
- The SuperMarket is bartering products

### What interesting things will I see in this dojo ?
- First of all this app was coded using [TDD](https://en.wikipedia.org/wiki/Test-driven_development) which means that we created first the tests and then implement the logic needed for the tests to pass. This ensure us that every piece of functionality is 100% tested.

- We also used the [Null Object Pattern](https://en.wikipedia.org/wiki/Null_object_pattern). 
This help us to instead of using a null reference to convey absence of an object, one uses an object which implements the expected interface, but whose method body is empty. The advantage of this approach over a working default implementation is that a null object is very predictable and has no side effects: it does nothing. 
The example on this repository is the SingleUnitBuy.js class, and this is the default value for when we create a MultiProductSale for not packs of products.

- We also used a [Double Dispatch](https://en.wikipedia.org/wiki/Double_dispatch).

