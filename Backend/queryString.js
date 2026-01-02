const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home page </h1><a href="/api/products">products</a>');
});
// start : it will give all products
app.get('/api/products', (req, res) => {
// product → represents the current item in the array during that iteration.

    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});
//reached end of the block

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    //requesting the id from URL
    const singleProduct = products.find((product) => product.id === Number(id));

    if (!singleProduct) {
        return res.status(404).send('Product not found');
    }
// below snippet return the products if it matched 
    const { id: productId, name, image } = singleProduct;
    res.json({ id: productId, name, image });
});

//route parametes
app.get('/api/products/:id/reviews/:reveiwsID',(req,res)=>{
    console.log(req.params)
    res.end('Hello World')
})
//string/URL parameters
//
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProduct = [...products];
    // ... creates an array 

    if (search) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    //  res.send('hello world')
    if((sortedProduct)<1){
        res.status(200).send('no products matched')
    }
    res.status(200).json(sortedProduct)
});



app.listen(5000, () => {
    console.log('server is listening on port 5000');
});