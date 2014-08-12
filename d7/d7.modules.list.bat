SET drupal_root_dir=C:\temp\Xuan\wamp\www\openwritings.net
SET module_dir=%drupal_root_dir%\sites\all\modules
SET theme_dir=%drupal_root_dir%\sites\all\themes
SET library_dir=%drupal_root_dir%\sites\all\libraries

SET temp_color=%drupal_root_dir%\sites\default\files\color
SET temp_css=%drupal_root_dir%\sites\default\files\css
SET temp_js=%drupal_root_dir%\sites\default\files\js

REM CALL drush.bat -r %drupal_root_dir% pm-list --type=Module --status=enabled
CALL drush.bat -r %drupal_root_dir% pm-list --type=Module