<?php
header("Content-Type:application/json");
require "data.php";


if (!empty($_GET['url'])) {
    if ($_GET['url'] == 'listAll') {
        $products = listAll_bdd();
        if (empty($products)) {
            response(200, "Product Not Found", NULL);
        } else {
            response(200, "Product Found", $products);
        }
    } else if ($_GET['url'] == 'delete') {

        if (!delete($name)) {
            response(200, "Product Not Found", NULL);
        } else {
            response(200, "Product Found", $products);
        }
    } else if ($_GET['url'] == 'add') {
        $name = $_GET['name'];
        $price = $_GET['price'];
        if (!add($name, $price)) {
            response(200, "Product Not Found", NULL);
        } else {
            response(200, "Product Found", $products);
        }
    } else if ($_GET['url'] == 'get') {
        $name = $_GET['name'];
        print_r($name);
        $product = get_price_bdd($name);
        if (empty($product)) {
            response(200, "Product Not Found", NULL);
        } else {
            $price = $product[0]['prix'];
            response(200, "Product Found",  $price);
        }
    } else {
    }
} else {
    response(400, "Invalid Request", NULL);
}

function response($status, $status_message, $data)
{
    header("HTTP/1.1 " . $status);
    $response['status'] = $status;
    $response['status_message'] = $status_message;
    $response['data'] = $data;
    $json_response = json_encode($response);
    echo $json_response;
}

function console_log($data)
{
    echo '<script>';
    echo 'console.log(' . json_encode($data) . ')';
    echo '</script>';
}
