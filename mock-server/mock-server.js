module.exports = () => {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    products: _.times(50, (numer)=> {
      return {
        id: numer,
        productId: faker.random.alphaNumeric(),
        productName: faker.commerce.productName(),
        product: faker.commerce.product(),
        department: faker.commerce.department(),
        productDescription: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        color: [ ..._.times(4, ()=> { return faker.commerce.color() })  ],
        comment: faker.git.commitMessage(),
        productImage: faker.image.fashion()
      }
    }),
    trending: _.times(10, (numer)=> {
      return {
        id: numer,
        productId: faker.random.alphaNumeric(),
        productName: faker.commerce.productName(),
        product: faker.commerce.product(),
        department: faker.commerce.department(),
        productDescription: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        color: [ ..._.times(4, ()=> { return faker.commerce.color() })  ],
        comment: faker.git.commitMessage(),
        productImage: faker.image.fashion()
      }
    })
  }
}
