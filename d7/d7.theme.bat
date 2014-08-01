SET drupal_root_dir=C:\temp\Xuan\wamp\www\openwritings.net
SET module_dir=%drupal_root_dir%\sites\all\modules
SET theme_dir=%drupal_root_dir%\sites\all\themes
SET library_dir=%drupal_root_dir%\sites\all\libraries

SET temp_color=%drupal_root_dir%\sites\default\files\color
SET temp_css=%drupal_root_dir%\sites\default\files\css
SET temp_js=%drupal_root_dir%\sites\default\files\js

rd /q /s %temp_color%
rd /q /s %temp_css%
rd /q /s %temp_js%



rd /q /s %theme_dir%\antonelli
mkdir %theme_dir%\antonelli
xcopy /s/h/e antonelli %theme_dir%\antonelli\
CALL drush.bat -r %drupal_root_dir% pm-enable -y antonelli
CALL drush.bat -r %drupal_root_dir% vset -y theme_default antonelli


REM =========================================================================================================
CALL drush.bat -r %drupal_root_dir% cc theme-registry
CALL drush.bat -r %drupal_root_dir% cache-clear all
CALL drush.bat -r %drupal_root_dir% cron