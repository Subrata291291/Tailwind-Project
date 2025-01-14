<?php
     if(isset($_POST["submit"])){
    $to = "subrata291291@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $fullname = $_POST['name'];
    $phone=$_POST["phone"];
    $guest = $_POST['guest'];
    $events = $_POST['events'];
    $notes = $_POST['notes'];

    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = "Name:".$fullname . "\n\n". " Guest:"  . $guest . "\n\n". "  Events:" .  $events . "\n\n". "  Phone No.:" .  $phone . "\n\n". "  Comments:"    . $_POST['notes'];
    $message2 = "Here is a copy of your message " . $fullname . "\n\n" . $_POST['notes'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    //mail($from,$subject2,$message2,$headers2); 


          echo'<script>alert("Message sent successfully"</script>';

            }

            ?>
