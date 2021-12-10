const products = require("../../src/products");
const handler = (req, res) => {
	if (req.method === "GET") {
		res.send(products);
	}
	if (req.method === "POST") {
		// Post New Product
	}
	res.json(products);
};
export default handler;
