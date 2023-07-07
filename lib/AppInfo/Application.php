<?php

namespace OCA\Hidesidebars\AppInfo;

use OCA\Hidesidebars\Listener\CSPListener;
use OCA\Hidesidebars\Listener\HidesidebarScripts;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\Security\CSP\AddContentSecurityPolicyEvent;

class Application extends App implements IBootstrap
{
    public const APP_ID = 'hidesidebars';
    public const CONFIG_FRAME_KEY = 'addAllowedFrameAncestorDomain';

    public function __construct(array $params = [])
    {
        parent::__construct(self::APP_ID, $params);
    }

    public function register(IRegistrationContext $context): void
    {
        $context->registerEventListener(BeforeTemplateRenderedEvent::class, HidesidebarScripts::class);
        $context->registerEventListener(AddContentSecurityPolicyEvent::class, CSPListener::class);
    }

    public function boot(IBootContext $context): void
    {
    }
}
