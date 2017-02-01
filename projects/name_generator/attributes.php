<?php

$name = $_POST['attribute'];
$gender = $_POST['gender'];
$country = $_POST['country'];
$attributes = array();

foreach ($name as $attribute){
	$attributes[] = $attribute;
}

echo $gender."<br />";
echo $country."<br />";
print_r($attributes);

?>
<script type="text/javascript">
    printBios();
</script>