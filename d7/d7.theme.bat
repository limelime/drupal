SET drupal_root=C:\temp\Xuan\wamp\www\openwritings.net
SET module_dir=%drupal_root%\sites\all\modules
SET theme_dir=%drupal_root%\sites\all\themes
SET library_dir=%drupal_root%\sites\all\libraries
SET d7modules_dir=archive\d7modules
SET temp_color=%drupal_root%\sites\default\files\color
SET temp_css=%drupal_root%\sites\default\files\css
SET temp_js=%drupal_root%\sites\default\files\js

rd /q /s %temp_color%
rd /q /s %temp_css%
rd /q /s %temp_js%


REM rd /q /s %theme_dir%\owth_garland
REM mkdir %theme_dir%\owth_garland
REM xcopy /s/h/e %d7modules_dir%\owth_garland %theme_dir%\owth_garland\
REM CALL drush.bat -r %drupal_root% pm-enable -y owth_garland
REM CALL drush.bat -r %drupal_root% vset -y theme_default owth_garland


REM rd /q /s %theme_dir%\owth_bartik
REM mkdir %theme_dir%\owth_bartik
REM xcopy /s/h/e %d7modules_dir%\owth_bartik %theme_dir%\owth_bartik\
REM CALL drush.bat -r %drupal_root% pm-enable -y owth_bartik
REM CALL drush.bat -r %drupal_root% vset -y theme_default owth_bartik


rd /q /s %theme_dir%\antonelli
mkdir %theme_dir%\antonelli
xcopy /s/h/e %d7modules_dir%\antonelli %theme_dir%\antonelli\
CALL drush.bat -r %drupal_root% pm-enable -y antonelli
CALL drush.bat -r %drupal_root% vset -y theme_default antonelli


REM =========================================================================================================
CALL drush.bat -r %drupal_root% cc theme-registry
CALL drush.bat -r %drupal_root% cache-clear all
CALL drush.bat -r %drupal_root% cron