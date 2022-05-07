<?php require_once 'header.php' ?>

<main class="mt-5">
    <div class="alert alert-primary" role="alert">Ajouter un produit (ADD => POST)</div>
    <form id="myform">
        <label for="name">Name</label>
        <input type="text" name="name" class="form-control" placeholder="Enter Product Name" required />
        <label for="price">Price</label>
        <input type="number" name="price" class="form-control" placeholder="Enter Product Price" required />
        <br>
        <button id="addProduct" class="btn btn-primary">Submit</button>
    </form>
    <h3 id="disp"></h3>
</main>

<?php require_once 'footer.php' ?>