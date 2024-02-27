const express = require('express');
const fs = require('fs');
const app = express();

// Read yarn data from JSON file
let yarnsData;
try {
    const rawData = fs.readFileSync('yarnData.json');
    yarnsData = JSON.parse(rawData);
} catch (error) {
    console.error('Error reading JSON file:', error);
    process.exit(1);
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Endpoint to retrieve all yarns
app.get('/yarns', (req, res) => {
    res.json(yarnsData);
});

// Endpoint to retrieve yarns by brand
app.get('/yarns/brand/:brandName', (req, res, next) => {
    const brandName = req.params.brandName;
    const filteredYarns = yarnsData.yarns.filter(yarn => yarn.brand.toLowerCase() === brandName.toLowerCase());
    if (filteredYarns.length === 0) {
        const err = new Error('Brand not found');
        err.status = 404;
        next(err);
    } else {
        res.json(filteredYarns);
    }
});

// Endpoint to retrieve yarns by product name
app.get('/yarns/product/:productName', (req, res, next) => {
    const productName = req.params.productName;
    const filteredYarns = yarnsData.yarns.filter(yarn => yarn.product.toLowerCase() === productName.toLowerCase());
    if (filteredYarns.length === 0) {
        const err = new Error('Product not found');
        err.status = 404;
        next(err);
    } else {
        res.json(filteredYarns);
    }
});

// 404 error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry, page not found!');
});

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
