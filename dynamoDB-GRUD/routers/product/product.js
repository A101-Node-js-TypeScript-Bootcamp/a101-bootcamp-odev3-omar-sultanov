const express = require("express");
const router = express.Router();
const productController = require("../../controllers/Product")

router.post('/', productController.addData);
router.get('/', productController.readData);
router.get('/:id', productController.readIdItem);
router.get('/discount/:productName', productController.readDiscountItem);
router.put('/:id', productController.updateData)
router.delete('/:id', productController.deleteData)
module.exports=router;
