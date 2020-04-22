<?php
header("Access-Control-Allow-Origin: *");
	if ($_GET["id"] == 0){
		$text = "Image 1";
	}
	else if ($_GET["id"] == 1){
		$text = "Image 2";
	}
	else if ($_GET["id"] == 2){
		$text = "Image 3";
	}
	else if ($_GET["id"] == 3){
		$text = "Image 4";
	}
	else{
		$text = "Image 5";
	}
    echo $text;
?>
