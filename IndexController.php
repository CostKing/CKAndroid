<?php
class Magentotutorial_Helloworld_IndexController extends
Mage_Core_Controller_Front_Action  {

public function indexAction()
{
$json = json_decode(file_get_contents('php://input'),true);
$mail = $json['email'];
$pass = $json['password'];
echo $mail;
echo $pass;
}
}
?>
