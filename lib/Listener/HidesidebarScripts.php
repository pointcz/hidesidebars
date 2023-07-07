<?php

declare(strict_types=1);

namespace OCA\Hidesidebars\Listener;

use OCA\Hidesidebars\AppInfo\Application;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class HidesidebarScripts implements IEventListener
{
	public function handle(Event $event): void
	{
		if (!$event instanceof BeforeTemplateRenderedEvent) {
			return;
		}

		Util::addScript(Application::APP_ID, 'script');
	}
}
