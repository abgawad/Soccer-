<?php
    $firstplayer=$_REQUEST['firstplayer'];
    $secondplayer=$_REQUEST['secondplayer'];
    $position=$_REQUEST['position'];
    if(isset($_POST['btntest']))
    {
        $host="localhost";
        $user="root";
        $password="";
        $db="Soccer";
        $conn=mysqli_connect($host,$user,$password,$db);
        $insert="insert into player_soccer_info values('$firstplayer,$secondplayer,$position')";
        mysqli_query($conn,$insert);
        if($conn)
        {
            echo("<h1 style='color:aqua;'>
            Your Registration Is Done!</h1>");
        }
        else
        {
            echo("<h1 style='color:red;'>
            Your Registration Is Failed!</h1>");

        }
    }
?>