/**
 * @author Xuan Ngo
 */

// https://drupal.org/node/171213
(function ($) {
	
	$(document).ready(
       function()
       {
          //$("#edit-body-und-0-format").hide();
          //$("div[class=\"vertical-tabs clearfix\"]").hide();

          $("#edit-body-und-0-format>div").wrap("<div id=\"text-format-details-accordion\">");
          $("#text-format-details-accordion").prepend("<h3>Text Format Details</h3>");
          $("#text-format-details-accordion").accordion
            ({
              active: false,
              collapsible: true
            });
            
          $("div[class=\"vertical-tabs clearfix\"]").wrap("<div id=\"vertical-tabs-accordion\">");
          $("#vertical-tabs-accordion").prepend("<h3>Vertical Tabs</h3>");
          $("#vertical-tabs-accordion").accordion
            ({
              active: false,
              collapsible: true
            });
            
       }
     );
    
    
})(jQuery);