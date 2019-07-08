<?php
$eventDispatcher = \OC::$server->getEventDispatcher();
if(\OC_User::isLoggedIn()) {
	$eventDispatcher->addListener('OCA\Files::loadAdditionalScripts', function() {
		OCP\Util::addScript('hidesidebars', 'script');
	});
}
