const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController');

menuRouter.get('/get-all-menu', menuController.getAllMenu);
menuRouter.get('/get-menu', menuController.getMenu);
menuRouter.post('/upload-menu', menuController.uploadMenu);
menuRouter.put('/update-menu', menuController.updateMenu);
menuRouter.put('/delete-menu/:id_menu', menuController.deleteMenu);

module.exports = menuRouter;