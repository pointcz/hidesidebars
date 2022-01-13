<?php

declare(strict_types=1);

namespace OCA\Hidesidebars\Listener;

use OC\User\Session;
use OCA\Hidesidebars\AppInfo\Application;
use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class HidesidebarScripts implements IEventListener
{

    /** @var Session */
    private $userSession;

    public function __construct(Session $userSession)
    {
        $this->userSession = $userSession;
    }

    public function handle(Event $event): void
    {
        if (!($event instanceof LoadAdditionalScriptsEvent)) {
            return;
        }

        if ($this->userSession->isLoggedIn()) {
            Util::addScript(Application::APP_ID, 'script');
        }
    }
}
