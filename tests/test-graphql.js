const assert = require('assert');
const Client = require('../src/lib/woocommerce.js');

const query = Client.getProductsQuery(5);
assert(query.includes('products(first: 5)'), 'Limit must interpolate');
assert(query.includes('databaseId'), 'Must query databaseId');

console.log('PASS: woo-headless-graphql-starter verified.');
