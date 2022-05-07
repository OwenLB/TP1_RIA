let db = require('./config/db')

class Product {

    static findOne(data) {
        return new Promise((resolve, reject) => {
            db.query('SELECT `id_produit`,`nom`,`date_in`,`date_up`,`description`,`prix` FROM `Produits` WHERE `id_produit` = ?',
                [data.id_produit], 
                (err, result) => {
                    if (err) {
                        reject({
                            success: false,
                            error: err
                        })
                    } else {
                        if (result.length)
                            resolve({
                                success: true,
                                data: result[0]
                            })
                        else
                            resolve({
                                success: false,
                                errors: ["Le nom du produit ne correspond à aucun produit"]
                            })
                    }
                })
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT `id_produit`,`nom`,`date_in`,`date_up`,`description`,`prix` FROM `Produits`',
            (err, result) => {
                if (err) {
                    reject({
                        success: false,
                        error: err
                    })
                } else {
                    resolve({
                        success: true,
                        data: result
                    })
                }
            })
        })
    }

    static add(data) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO `Produits`(`nom`, `description`, `prix`) VALUES (?,?,?)',
            [data.nom, data.description, data.prix],
            (err, result) => {
                if (err) {
                    reject({
                        success: false,
                        error: err
                    })
                } else {
                    resolve({
                        success: true,
                        data: result
                    })
                }
            })
        })
    }

    static deleteFromNom(data) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM `Produits` WHERE `nom` = ?',
            [data.nom],
            (err, result) => {
                if (err) {
                    reject({
                        success: false,
                        error: err
                    })
                } else {
                    resolve({
                        success: true,
                        data: result
                    })
                }
            })
        })
    }

    static deleteFromId(data) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM `Produits` WHERE `id_produit` = ?',
            [data.id_produit],
            (err, result) => {
                if (err) {
                    reject({
                        success: false,
                        error: err
                    })
                } else {
                    resolve({
                        success: true,
                        data: result
                    })
                }
            })
        })
    }

    static update(data) {
        
        return new Promise((resolve, reject) => {
            const datetime = new Date().toJSON().slice(0, 19).replace('T', ' ')
            db.query('UPDATE `Produits` SET `nom` = ?, `description` = ? , `prix` = ? , `date_up` = ? WHERE `id_produit` = ?',
            [data.nom, data.description, data.prix, datetime, data.id_produit],
            (err, result) => {
                if (err) {
                    reject({
                        success: false,
                        error: err
                    })
                } else {
                    resolve({
                        success: true
                    })
                }
            })
        })
    }
}

module.exports = Product
