const con = require('../config/config');

class menuModel {
    static getAllMenu(req, res, next) {
        let query = `SELECT * FROM ${'`db_restaurant`'}.tb_menu
                    WHERE deleted_at IS NULL`
        con.query(query, function(err, result, fields) {
            if (err) {
                res.status(400).send(err);
            }
            res.send(result);
        });
    }

    static getMenu(req, res, next) {
        let id_menu = req.body.id_menu;
        let query = `SELECT * FROM ${'`db_restaurant`'}.tb_menu WHERE id_menu = ` + id_menu

        con.query(query, function(err, result, fields) {
            if (err) res.status(400).send(err);
            res.send(result);
        });
    }

    static uploadMenu(req, res, next) {
        let { nama, harga, kategori, stok } = req.body

        if (!nama) return res.send('Kolom nama tidak boleh kosong!');
        if (!harga) return res.send('Kolom harga tidak boleh kosong!');
        if (!kategori) return res.send('Kolom kategori tidak boleh kosong!');
        if (!stok) return res.send('Kolom stok tidak boleh kosong!');
        
        if (typeof nama != 'string') return res.send('Kolom nama harus string!');
        if (typeof harga != 'number') return res.send('Kolom harga harus number!');
        if (typeof kategori != 'string') return res.send('Kolom kategori harus string!');
        if (typeof stok != 'number') return res.send('Kolom stok harus number!');

        let query = `INSERT INTO ${'`db_restaurant`'}.tb_menu SET 
                    nama = '${nama}', harga = '${harga}', kategori = '${kategori}', stok = '${stok}'`;
        con.query(query, function(err, result, fields) {
            if (err) {
                console.log("INI ERROR GEDE");
                console.log("INI ERROR GEDE");
                console.log("INI ERROR GEDE");
                console.log("INI ERROR GEDE");
                res.status(400).send('err');
            }
            res.status(201).send(result);
        });

    }

    static updateMenu(req, res, next) {
        let { id_menu, nama, harga, kategori, stok } = req.body;
        let updated_at = `CURRENT_TIMESTAMP`;

        if (!id_menu) return res.send('Kolom id_menu tidak boleh kosong!');
        if (!nama) return res.send('Kolom nama tidak boleh kosong!');
        if (!harga) return res.send('Kolom harga tidak boleh kosong!');
        if (!kategori) return res.send('Kolom kategori tidak boleh kosong!');
        if (!stok) return res.send('Kolom stok tidak boleh kosong!');
        
        if (typeof id_menu != 'number') return res.send('Kolom id_menu harus number!');
        if (typeof nama != 'string') return res.send('Kolom nama harus string!');
        if (typeof harga != 'number') return res.send('Kolom harga harus number!');
        if (typeof kategori != 'string') return res.send('Kolom kategori harus string!');
        if (typeof stok != 'number') return res.send('Kolom stok harus number!');

        let query = `UPDATE ${'`db_restaurant`'}.tb_menu SET `;

        if (nama) query += ` nama = '${nama}',`;
        if (harga) query += ` harga = '${harga}',`;
        if (kategori) query += ` kategori = '${kategori}',`;
        if (stok) query += ` stok = '${stok}',`;
        query += ` updated_at = ${updated_at},`

        query = query.slice(0, -1);
        query += ` WHERE id_menu = ${id_menu} `;
        query += ` AND deleted_at IS NULL`

        con.query(query, function(err, result, fields) {
            if (err) res.status(400).send(err);
            res.send(result);
        });
    }

    static deleteMenu(req, res, next) {
        let id_menu = req.params.id_menu;
        let deleted_at = `CURRENT_TIMESTAMP`;

        let query = `UPDATE ${'`db_restaurant`'}.tb_menu SET deleted_at = ${deleted_at} 
                    WHERE id_menu = ` + id_menu
        query += ` AND deleted_at IS NULL`

        con.query(query, function (err, result, fields) {
            if (err) res.status(400).send(err);
            res.status(200).send(result)
        });
    }
}

module.exports = menuModel;