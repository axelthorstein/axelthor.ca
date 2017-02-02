<!DOCTYPE html>
<html>
    <head>
      <title>Gene Matrix</title>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="gene_matrix.css">
      <link rel="stylesheet" type="text/css" href="../../styles/styles.css">
      
    </head>

    <body>
        <div class="content">
            <div>
                <div class="nav">
                    <ul id="nav_onclick" class="topnav">
                        <li><a href="#development" class="development nav-item">develop</a></li>
                        <li class="logo">
                            <div id="hexagon">
                                <img class="bottom hexagon-size base transparent" src="../../images/poly2.svg" />
                                <img class="top hexagon-size base" src="../../images/poly1.svg" />
                                <a href="../../pages/resume.html" class="not-active 0"><img class="outline-slide 0 work hexagon-size transparent" src="../../images/poly_resume.svg" /></a>
                                <a href="../../pages/work.html" class="not-active 1"><img class="outline-slide 1 work hexagon-size transparent" src="../../images/poly_work.svg" /></a>
                                <a href="../../pages/photos.html" class="not-active 3"><img class="outline-slide 3 art hexagon-size transparent" src="../../images/poly_photos.svg" /></a>
                                <a href="../../pages/music.html" class="not-active 2"><img class="outline-slide 2 art hexagon-size transparent" src="../../images/poly_music.svg" /></a>
                                <a href="../../pages/poetry.html" class="not-active 4"><img class="outline-slide 4 art hexagon-size transparent" src="../../images/poly_poetry.svg" /></a>
                                <a href="../../pages/contact.html" class="not-active 5"><img class="outline-slide 5 art hexagon-size transparent" src="../../images/poly_contact.svg" /></a>
                            </div>
                        </li>
                        <li><a href="#creative" class="creative nav-item" >creative</a></li>
                    </ul>
                </div>
          <div class="title">
              <h3><a href="/" class="title-name">Axel Thor</a></h3>
          </div>
          <div class="content-container">
            <p><?php 
                if(isset($_POST['submit'])){ //check if form was submitted
                    $file_name = $_POST["name"];
                    $file_type = $_POST["file-type"];
                    $tmp_dir_name = "./" . $file_name . "_tmp_dir/";
                    mkdir($tmp_dir_name);
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
                            $newFilePath = $tmp_dir_name . $_FILES['upload']['name'][$i];
                            $imageFileType = pathinfo($newFilePath, PATHINFO_EXTENSION);

                            // Allow certain file formats
                            if($imageFileType != "fas" && $imageFileType != "nex" && $imageFileType != "phy" && $imageFileType != "txt") {
                                echo "Sorry, only Fasta, Nexus, Phyllip & Text files are allowed.\n";
                                $uploadOk = 0;
                            }
                            // Check if $uploadOk is set to 0 by an error
                            if ($uploadOk == 0) {
                                echo "Sorry, your file was not uploaded.\n";
                            // if everything is ok, try to upload file
                            } else {
                                if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                                    //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.\n";
                                } else {
                                    echo "Sorry, there was an error uploading your file.\n";
                                }
                            }
                        }
                    }
                    $command = "/usr/bin/python gene_matrix.py " . $tmp_dir_name . " --o " . $file_name . " --type " . $file_type;
                    $output = shell_exec($command);
                    system("rm -rf ".escapeshellarg($tmp_dir_name));
                }
            ?></p>

            <div class="button-container text-box">
                <h4>Download file:</h4>
                <a class="download-link" id="download" href=<?php echo "gene_sequence_files/" . $_POST["name"] . '.' . $_POST["file-type"]; ?> download><?php echo $_POST["name"] . '.' . $_POST["file-type"]; ?></a>
            </div>
          </div>
      <footer class="footer">
        <div class="footer-social-icons">
            <ul class="social-icons">
                <li><a href="https://www.facebook.com/axelthors" target='_blank' class="social-icon"> <i class="fa fa-facebook fa-2x"></i></a></li>
                <li><a href="https://github.com/axelthorstein" target='_blank' class="social-icon"> <i class="fa fa-github fa-2x"></i></a></li>
                <li><a href="https://www.instagram.com/axelthorr/" target='_blank' class="social-icon"> <i class="fa fa-instagram fa-2x"></i></a></li>
                <li><a href="https://soundcloud.com/axel-stein" target='_blank' class="social-icon"> <i class="fa fa-soundcloud fa-2x"></i></a></li>
                <li><a href="https://www.linkedin.com/in/axelthor" target='_blank' class="social-icon"> <i class="fa fa-linkedin fa-2x"></i></a></li>
            </ul>
        </div>
      </footer>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script>
            window.onbeforeunload = function() {
                sessionStorage.setItem("name", $('#inputName').val());
            }
        </script>
        <script type="text/javascript">
        function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "/scripts/methods.js";
        document.body.appendChild(element);
        }
        if (window.addEventListener)
        window.addEventListener("load", downloadJSAtOnload, false);
        else if (window.attachEvent)
        window.attachEvent("onload", downloadJSAtOnload);
        else window.onload = downloadJSAtOnload;
      </script>
    </div>

    </body>
</html>