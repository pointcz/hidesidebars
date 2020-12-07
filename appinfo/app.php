<?php
$eventDispatcher = \OC::$server->getEventDispatcher();
if(\OC_User::isLoggedIn()) {
	OCP\Util::addScript('hidesidebars', 'script');
}
