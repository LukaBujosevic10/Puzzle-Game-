<?php
$server = "localhost";
$username = "root";
$password = "lukac";
$baza = "puzzle";

$conn = mysqli_connect($server, $username, $password, $baza) or die("izgleda da ne valja");

$nickname = $_POST['nick'];
$vrem = $_POST['vr'];

$komanda = "INSERT INTO rezultat (id, username, vreme)
  VALUES (NULL, '$nickname', '$vrem')";
  $rezultat = mysqli_query($conn ,$komanda);

  $komandad = "SELECT * FROM rezultat ORDER BY vreme ASC";
  $izvrsenje = mysqli_query($conn, $komandad);
  print("<div style='float: left;'>
    <div style='height: 30px; width: 50px; border: solid black 1px; float: left; box-sizing: border-box;'><p style='text-align: center;'>No</p></div>
    <div style='height: 30px; width: 125px; border: solid black 1px; float: left; box-sizing: border-box;'><p style='text-align: center;'>Name</p></div>
    <div style='height: 30px; width: 125px; border: solid black 1px; float: left; box-sizing: border-box;'><p style='text-align: center;'>Time</p></div>
  </div>");
  $i = 1;
  while ($red = mysqli_fetch_assoc($izvrsenje)) {
    print("<div style='float: left;'>
      <div style='height: 30px; width: 50px; border: solid black 1px; float: left; box-sizing: border-box;'><p style='text-align: center;'>".$i."</p></div>
      <div style='height: 30px; width: 125px; border: solid black 1px; float: left; box-sizing: border-box;'><p style='text-align: center;'>".$red['username']."</p></div>
      <div style='height: 30px; width: 125px; border: solid black 1px; float: left; box-sizing: border-box;'><p style='text-align: center;'>".$red['vreme']."</p></div>
    </div>");
    $i++;
    if ($i == 11) {
      break;
    }
  }
 ?>
