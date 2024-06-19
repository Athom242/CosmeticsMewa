<?php
// header();
header('Access-Control-Allow-Origin:*');

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type, Authorization");

// header('Content-Type: application/json');
// Récupérer les données envoyées depuis le frontend React
// var_dump($_POST);

// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//     // Répond avec un statut 200 OK et permet à la méthode demandée
//     header("HTTP/1.1 200 OK");
//     exit();
// }

// Traitement de la requête réelle à partir d'ici
// Par exemple, pour une requête POST avec des données JSON
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupère les données envoyées dans le corps de la requête
    $jsonData = file_get_contents('php://input');
    // echo "Bonjour tout le monde"
    $data = json_decode($jsonData, true);

    // Traitez les données comme nécessaire
    // Par exemple, enregistrez-les dans une base de données, etc.

    // Répond avec un message de succès
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Données reçues avec succès',"fichier"=>"Bonjour tout le monde"]);
    // header('Content-Type: text/plain');
    // echo "Bonjour tout le monde";
    // echo json_encode(['messageVia'=>$data]);
    // echo "La requette a été bien reçu"
}

// var_dump($data);
?>