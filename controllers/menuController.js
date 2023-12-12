const menuModel = require('../models/menuModel');

class menuController {
    static getAllMenu(req, res, next) {
        menuModel.getAllMenu(req, res ,next)
    }

    static getMenu(req, res, next) {
        menuModel.getMenu(req, res ,next)
    }

    static uploadMenu(req, res, next) {
        menuModel.uploadMenu(req, res, next)
    }

    static updateMenu(req, res, next) {
        menuModel.updateMenu(req, res, next)
    }

    static deleteMenu(req, res, next) {
        menuModel.deleteMenu(req, res, next)
    }
}

module.exports = menuController;