//  all information about each product:
db.products.find({});
// the product price which is between 400 and 800
db.products.find({ "product_price": { $gte: 400, $lte: 800 } });
// the product price which is not between 400 and 600
db.products.find({ $or: [ { "product_price": { $lt: 400 } }, { "product_price": { $gt: 600 } } ] });
// List the four products with a price greater than 500
db.products.find({ "product_price": { $gt: 500 } }).limit(4);
// Find the product name and product material of each product
db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 0 });
// Find the product with a row id of 10
db.products.find({ "id": "10" });
// the product name and product material

db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 0 });

// products which contain the value 'soft' in product material

db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 0 });

// products which contain 'indigo' in product color and have a price of 492.00

db.products.find({ "product_color": "indigo", "product_price": 492.00 });

// the products with the same product price value:

db.products.remove({ "product_price": { $in: db.products.distinct("product_price", { "product_price": { $exists: true } }) }, "_id": { $nin: db.products.distinct("_id", { "product_price": { $exists: true } }) } });
