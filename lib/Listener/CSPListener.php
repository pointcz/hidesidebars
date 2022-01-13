<?php

declare(strict_types=1);

namespace OCA\Hidesidebars\Listener;

use OCA\Hidesidebars\AppInfo\Application;
use OCP\AppFramework\Http\EmptyContentSecurityPolicy;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IConfig;
use OCP\Security\CSP\AddContentSecurityPolicyEvent;

class CSPListener implements IEventListener {

    /** @var IConfig */
    private $config;

    public function __construct(IConfig $config)
    {
        $this->config = $config;
    }

    public function handle(Event $event): void {
		if (!$event instanceof AddContentSecurityPolicyEvent) {
			return;
		}

        $csp = new EmptyContentSecurityPolicy();
        $csp->addAllowedFrameAncestorDomain($this->config->getSystemValue(Application::CONFIG_FRAME_KEY)); //'*.pointcz.com:*'
		$event->addPolicy($csp);
	}
}
