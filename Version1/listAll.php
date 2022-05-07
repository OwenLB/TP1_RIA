<?php require_once 'header.php' ?>

<main class="mt-5">
    <div class="alert alert-primary" role="alert">Afficher tous les produits (GET ALL)</div>
    <form class="" action="" method="POST">
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
    </form>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if (isset($_POST['submit'])) {
                $url = "http://localhost:8888/TP1_RIA/Version1/api/listAll";
                $client = curl_init($url);
                curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
                $response = curl_exec($client);
                $result = json_decode($response);
                foreach ($result->data as $product => $price) {
                    echo
                    "<tr>
                        <td>" . $product . "</td>
                        <td>" . $price . "</td>
                    </tr>";
                }
            }
            ?>

        </tbody>
    </table>
</main>

<?php require_once 'footer.php' ?>