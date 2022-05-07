let db = require('./config/db')

class Evolution {
    
    static findLastOne(data) {
        return new Promise((resolve, reject) => {
            db.query('SELECT `id_evo`, `id_produit`, `date_up`, `prix` FROM `Evolutions` WHERE `id_produit` = ? ORDER BY `Evolutions`.`date_up` DESC',
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
                                errors: ["L'id du produit ne correspond à aucun produit"]
                            })
                    }
                })
        })
    }

    static findAllByName(data) {
        return new Promise((resolve, reject) => {
            db.query('SELECT `date_up`, `prix` FROM `Evolutions` WHERE `id_produit` = ? ORDER BY `Evolutions`.`date_up` ASC',
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
                                data: result
                            })
                        else
                            resolve({
                                success: false,
                                errors: ["L'id du produit ne correspond à aucun produit"]
                            })
                    }
                })
        })
    }

    static findLastOneById(data) {
        return new Promise((resolve, reject) => {
            db.query('SELECT `id_evo`, `id_produit`, `date_up`, `prix` FROM `Evolutions` WHERE `id_evo` = ? ORDER BY `Evolutions`.`date_up` DESC',
                [data.id_evo], 
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
                                errors: ["L'id du produit ne correspond à aucun produit"]
                            })
                    }
                })
        })
    }

    static add(data) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO `Evolutions`(`id_produit`, `prix`) VALUES (?,?)',
                [data.id_produit, data.prix], 
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

}

module.exports = Evolution