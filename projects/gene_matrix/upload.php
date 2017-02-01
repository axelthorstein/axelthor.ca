<?php
$target_dir = "./uploads/";
$uploadOk = 1;

// Count # of uploaded files in array
$total = count($_FILES['upload']['name']);

// Loop through each file
for($i=0; $i<$total; $i++) {
    //Get the temp file path
    $tmpFilePath = $_FILES['upload']['tmp_name'][$i];

    //Make sure we have a filepath
    if ($tmpFilePath != ""){
        
        //Setup our new file path
        $newFilePath = $target_dir . $_FILES['upload']['name'][$i];
        $imageFileType = pathinfo($newFilePath, PATHINFO_EXTENSION);

        // Check if file already exists
        if (file_exists($newFilePath)) {
            echo "File already exists.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "fas" && $imageFileType != "nex" && $imageFileType != "phy" && $imageFileType != "txt") {
            echo "Sorry, only Fasta, Nexus, Phyllip & Text files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
    }
}
?>