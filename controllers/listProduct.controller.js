
const products = [
    {
        id: 1,
        name: 'Áo khoác',
        price: 199,
        count: 200,
        category: "Nam",
        idKh: "2",
        nameKh: "sjadfdsj",
        image: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg",

    },
    {
        id: 2,
        name: 'Áo Phông',
        price: 199,
        count: 200,
        category: "Nu",
        idKh: "2",
        nameKh: "sjadfdsj",
        image: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg",

    },
    {
        id: 3,
        name: 'Áo sơ mi',
        price: 199,
        count: 200,
        category: "Nam",
        idKh: "2",
        nameKh: "sjadfdsj",
        image: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg",

    },
    {
        id: 4,
        name: 'Quần nỉ',
        price: 199,
        count: 200,
        category: "Nam",
        idKh: "2",
        nameKh: "sjadfdsj",
        image: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg",

    },
    {
        id: 5,
        name: 'Quần dài',
        price: 199,
        count: 200,
        category: "Nu",
        idKh: "2",
        nameKh: "sjadfdsj",
        image: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg",

    },
]
exports.getListProduct = (req, res, next) => {
    res.render('home/home', { products: products, countProduct: products.length, title: "Products" })
}
exports.getListProduct2 = (req, res, next) => {
    res.render('product/products', { products: products, countProduct: products.length, title: "Products" })
}
exports.addProduct = (req, res, next) => {
    // if(req.method=="post"){
    let obj = {
        id: req.body.IdProductAdd,
        name: req.body.nameProductAdd,
        price: req.body.priceProductAdd,
        count: req.body.countProductAdd,
        category: req.body.category,
        idKh: req.body.idKh,
        nameKh: req.body.nameKh,
        image: req.body.image,
    }
    products.push(obj);
    res.render('product/products', { products: products, countProduct: products.length, title: "Products" })
    // }
}
exports.put = (req, res, next) => {
    let id = req.body.idProductUpdate
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            let obj = {
                id: id,
                name: req.body.nameProductAdd,
                price: req.body.priceProductUpdate,
                count: req.body.countProductUpdate,
                category: req.body.category,
                idKh: req.body.idKhUpdate,
                nameKh: req.body.nameKhUpdate,
                image: req.body.image,
            }
            products[i] = obj;
            return res.render('product/products', { products: products, countProduct: products.length, title: "Products" })
        }
    }

}
exports.delete = (req, res, next) => {
    let id = req.body.id
    console.log(id);
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            console.log(products[i].id);
            products.splice(i, 1);
            return res.render('product/products', { products: products, countProduct: products.length, title: "Products" })
        }
    }
}