# API Express

## _Gestion de produits et de leur évolution_

L'api permet de récuperer les données d'un ou des produits, d'en ajouter, d'en supprimer ou de les mettre à jour.

## Packages

- [cookie-parser] : ~1.4.4
- [debug] : ~2.6.9
- [dotenv] : ^14.2.0
- [express] : ~4.16.1
- [express-async-errors] : ^3.1.1
- [http-errors] : ^2.0.0
- [morgan] : ~1.9.1
- [mysql] : ^2.18.1
- [nodemon] : ^2.0.15

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd api_express
npm i
npm run dev
```

## Features

### Récuperer les données d'un produit :

url : `/api/product/:nom`
Type de la requète : GET
Réponse :

```
{
    product: {
        idProduct: integer;
        nom: string;
        date_in: date;
        date_up: date;
        description: string;
        prix: float;
    }
}
```

> Note: `:nom` est le nom du produit. Exemple : "pen" ou "book".

### Récuperer les données des produits :

url : `/api/product/`
Type de la requète : GET
Réponse :

```
{
    product1: {
        idProduct: integer;
        nom: string;
        date_in: date;
        date_up: date;
        description: string;
        prix: float;
    },
    product2: {
        idProduct: integer;
        nom: string;
        date_in: date;
        date_up: date;
        description: string;
        prix: float;
    },
    ...
}
```

### Ajouter un produit :

url : `/api/product/`
Type de la requète : PUT

```
data : {
    nom : string,
    description : string,
    prix: float,
}
```

Réponse :

```
{
    product: {
        idProduct: integer;
        nom: string;
        date_in: date;
        date_up: date;
        description: string;
        prix: float;
    }
}
```

### Supprimer un produit :

url : `/api/product/`
Type de la requète : DELETE
`data : { nom : string }` ou `data : { id_production : integer }`
Réponse :

```
{
    success : boolean
}
```

### Update un produit :

url : `/api/product/`
Type de la requète : POST

```javascript
data : {
    nom : string,
    description : string,
    prix: float
}
```

Réponse :

```
{
    success : boolean
}
```

### Récupérer l'évolution des prix d'un produit :

url : `/api/evolution/:nom`
Type de la requète : GET


Réponse :
```
{
    { date_up: date, prix: float },
    { date_up: date, prix: float }
}
```
> Note: `:nom` est le nom du produit. Exemple : "pen" ou "book".

