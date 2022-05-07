<?php
function get_price($name)
{
    $json_data = file_get_contents('donnees.json');
    $products = json_decode($json_data, true);
    foreach ($products as $product => $price) {
        if ($product == $name) {
            return $price;
            break;
        }
    }
}

function listAll()
{
    $json_data = file_get_contents('donnees.json');
    $products = json_decode($json_data, true);
    return $products;
}

function add($name, $price)
{
    $data[] = $name . ":" . $price;

    $inp = file_get_contents('donnees.json');
    $tempArray = json_decode($inp);
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    $res = file_put_contents('donnees.json', $jsonData);
    return $res;
}

function delete($name)
{
    //get all your data on file
    $data = file_get_contents('donnees.json');

    // decode json to associative array
    $json_arr = json_decode($data, true);

    // get array index to delete
    $arr_index = array();
    foreach ($json_arr as $key => $value) {
        if ($value[$key] == $name) {
            $arr_index[] = $key;
        }
    }

    // delete data
    foreach ($arr_index as $i) {
        unset($json_arr[$i]);
    }

    // rebase array
    $json_arr = array_values($json_arr);

    // encode array to json and save to file
    $res = file_put_contents('donnees.json', json_encode($json_arr));
}

#--------------------------- AVEC LA BDD ---------------------------#
require 'config/db.php';

// Initialise une seule fois la connection à la base de donnée
function getDatabase() {
  static $db = null;

  if ($db == null) {
    $db = $_ENV['db'];
  }

  return $db;
}

function get_price_bdd($name)
{
    $db = getDatabase();
    $get = $db->prepare("SELECT * FROM `produits` WHERE nom = :name");
    $get->execute(array(':name' => $name));
    if (!$get) { 
        echo "<script> alert('lecture impossible') </script>"; 
	} 
	else {
        $result=$get->fetchAll();
        #print_r($result);
        return $result;
    }

}

function listAll_bdd()
{
    $db = getDatabase();
    $get = $db->query("SELECT * FROM `produits`");
    if (!$get) { 
        echo "<script> alert('lecture impossible') </script>"; 
	} 
	else {
        $result=$get->fetchAll();
        #print_r($result);
        return $result;
    }

}

function add_bdd($name, $description, $price)
{
    $db = getDatabase();
    $add = $db->query("INSERT INTO `produits` (`nom`, `description`, `prix`) VALUES ('$name', '$description','$price');");
    if (!$add) { 
        echo "<script> alert('lecture impossible') </script>"; 
        return false;
        } 
    else {
        return true;
    }

}