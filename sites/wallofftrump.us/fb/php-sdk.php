<?php

var $app_id = '1153375388082947';
var $app_secret = '28512e0b72634e06a4a8b5897907211d';
var $default_graph_version = 'v2.7';

var $page_id = '114517875225866';

$fb = new Facebook\Facebook([
	'app_id' => $app_id,
	'app_secret' => $app_secret,
	'default_graph_version' => $default_graph_version
	]);

try {
	$response = $fb->get($page_id . '/feed');
} catch(Facebook\Exceptions\FacebookResponseException $e) {
	echo 'Graph returned an error: ' . $e->getMessage();
} catch(Facebook\Exceptions\FacebookSDKException $e) {
	echo 'SDK returned an error: ' . $e->getMessage();
	exit;
}

print $response;

?>
