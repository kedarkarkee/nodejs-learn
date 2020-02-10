const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir,'data','products.json');

const getProductsfromFile = cb =>{
    fs.readFile(p,(err, fileContent)=>{
        if(err){
            return cb([]);
        }
        return cb(JSON.parse(fileContent));
    });
}


module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
      getProductsfromFile(products=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products), (err)=>{
            console.log(err);
        });
      })
    }
    static fetchAll(cb){
        getProductsfromFile(cb);
    }
}