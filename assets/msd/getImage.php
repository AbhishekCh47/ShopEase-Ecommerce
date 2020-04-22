<?php
header("Access-Control-Allow-Origin: *");
	header("Content-type:image/jpg");
	if ($_POST["id"] == 0){
		$fname = "1.jpeg";
	}
	else if ($_POST["id"] == 1){
		$fname = "2.jpeg";
	}
	else if ($_POST["id"] == 2){
		$fname = "3.jpeg";
	}
	else if ($_POST["id"] == 3){
		$fname = "4.jpeg";
	}
	else{
		$fname = "5.jpeg";
	}
    $file = fopen($fname,"rb");
    $size = filesize($fname);
    $media = fread($file,$size);
	fclose($file);
    echo $media;
?>
