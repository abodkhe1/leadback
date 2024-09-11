const path = require('path');
const multer = require('multer');
const Products = require('../model/productModel');

// Set up storage for multer to save the file in 'productImage' folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './productImage');  // Folder to save uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
    }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

// Save product
const saveProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const productImage = req.file.filename;
        const { productName } = req.body;

        const baseUrl = `${req.protocol}://${req.get('host')}`;

        const saveProd = new Products({
            productName,
            productImage: `${baseUrl}/productImage/${productImage}`
        });

        await saveProd.save();

        res.status(201).json({ message: 'Product saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving product' });
    }
};

const getAllProduct = async (req, res) => {
    try {

        const find = await Products.find();
        if (!find) {
            res.status(400).json({ message: 'Products not get' });
        }

        res.status(201).json({ message: 'Products get successfully', data: find });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error get products' });
    }
}

module.exports = {
    upload,
    saveProduct,
    getAllProduct
};
