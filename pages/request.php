<?php
$url = "https://maxauto24.com/pr-maslo-total-quartz-7000-10w40-5-litra";
$string = file_get_contents($url);

$edno=explode('content_name: \'',$string); // поглеждаш изходния код на страницата и определяш от къде да започне взимането на кода
$dve=explode('\',',$edno[1]);// тук е затварящия таг до където искаш да взимаш инфо. после
$title = $dve[0];

echo "<br/>
Link: $url <br/>
<b>Product: </b> $title <br/>
<b>Category: </b> $category <br/>
<b>Price: </b> $price €<br/>
<b>Product: </b> $item_id <br/>
<b>Description: </b> $description <ul><br/><br/>

Photos: Total: $total_image<br/>
$get_image_link[0] <br/>
$get_image_link[1] <br/>
$get_image_link[2] <br/>
$get_image_link[3] <br/>
";