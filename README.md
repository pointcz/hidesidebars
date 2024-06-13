# Hide sidebars

Hide left sidebar and top header bar for use in iframe for example or some other scenarios.

## Usage 
Add `hide-sidebars` after `?` as query parameter to nextcloud url or with `dir` parameter after `&`.
If you need to hide only left or top menu you can use `hide-left-menu` or `hide-top-menu`.

Examples:
```
http://nextcloud.example.com/index.php/apps/files/?hide-sidebars
http://nextcloud.example.com/index.php/apps/files/?dir=/New%20folder&hide-sidebars
```

## Screenshot
![Tab view in sidebar](.readme/hidesidebars.png)

## iframe

This app from version 2.0.0 brings new config parameter `addAllowedFrameAncestorDomain` to allow embedding into a website.
Simply add the following line to your `config/config.php`:

```php
...
'addAllowedFrameAncestorDomain' => '*.example.com:*'
...
```
