<?php require_once 'header.php' ?>

<main class="mt-5">
    <div class="alert alert-primary" role="alert">Afficher le prix d’un produit (GET)</div>
    <form class="" action="" method="POST">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" placeholder="Enter Product Name" required />
        </div>
        <button id="btnAfficher" type="submit" name="submit" class="btn btn-primary">Submit</button>
    </form>
    <p>&nbsp;</p>
    <h3>
        <?php
        if (isset($_POST['submit'])) {
            $name = $_POST['name'];
            $url = "http://localhost:8888/TP1_RIA/Version1/api/get?name=" . $name;
            echo $url;
            // $url = "http://localhost/Master1/Semestre_2/gitTP1/TP1_RIA-main/TP1_RIA/Version1/api" . $name;
            $client = curl_init($url);
            curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($client);
            $result = json_decode($response);
            echo $result;
        }
        ?>
    </h3>
</main>

<?php require_once 'footer.php' ?>