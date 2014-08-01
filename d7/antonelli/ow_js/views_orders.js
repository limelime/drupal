/**
 * @author Xuan Ngo
 */

/**
 * Add a row at the end of each symbol with following information:
 *  - Profit
 *  - Total number of shares @ average price
 *  - Remaining number of shares
 */
(function ($) {
	
	$(document).ready(
       function()
       {

         $("table[class~='views-table']").each(
          function()
          {
            // Get the totals.
            var total_cost    = 0.0;
            var total_proceed = 0.0;
            var total_cost_quantity     = 0;
            var total_proceed_quantity  = 0;
            
            $(this).find("tbody > tr").each(
              function()
              {
                var total_quantity = Number($(this).find("td[class~='views-field-field-or-total-quantity']").text().replace(/[^0-9\.]+/g,""));
                var cost = Number($(this).find("td[class~='views-field-field-or-total-cost']").text().replace(/[^0-9\.]+/g,""));
                total_cost += cost;
                var proceed = Number($(this).find("td[class~='views-field-field-or-proceed']").text().replace(/[^0-9\.]+/g,""));
                total_proceed += proceed;
                
                if(cost>0)
                  total_cost_quantity += total_quantity;
                  
                if(proceed>0)
                  total_proceed_quantity += total_quantity;
                  
                // $(this).append("<tr><td>"+total_cost_quantity+"|"+total_proceed_quantity+"</td></tr>"); // DEBUG
              }
            );
            
            var profit              = total_proceed - total_cost;
            var remaining_quantity  = total_cost_quantity - total_proceed_quantity;
            var total_average_cost	= total_cost / total_cost_quantity;
              
            // Number arithmetic should stop from here as they will be formatted.
            total_cost    = addCommas(Number(total_cost).toFixed(2));
            total_proceed = addCommas(Number(total_proceed).toFixed(2));
            profit        = addCommas(Number(profit).toFixed(2));
            total_average_cost 	= addCommas(Number(total_average_cost).toFixed(2));
            total_cost_quantity = addCommas(Number(total_cost_quantity));
            remaining_quantity 	= addCommas(Number(remaining_quantity));

            
            // Add totals information to the last row.
            var rows = $(this).find("tbody").children("tr");
            var row_html = "";
            if( rows.length % 2 == 0 )
              row_html += '<tr class="odd">';
            else
              row_html += '<tr class="even">';
            
            var columns_count = $(this).find("tbody > tr:first > td").length;
            row_html += '<td colspan="'+columns_count+'" style="font-weight:bold; text-align:right;">Profit : '+total_proceed+' - '+total_cost+' = '+profit_html(profit)+' ['+total_cost_quantity+' @ '+total_average_cost+' ('+remaining_quantity+')]</td>';
            
            row_html += '</tr>';
            $(this).find("tbody").append(row_html);
            
            
          }
         );
       }
     );
    
    // Taken from http://ntt.cc/2008/04/25/6-very-basic-but-very-useful-javascript-number-format-functions-for-web-developers.html
    function addCommas(nStr)
    {
      nStr += '';
      x = nStr.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
    }
    
    // Color number depending if positive or negative.
    function profit_html(str)
    {
    	var number = str.replace(/,/g,"");
    	if(number<0)
    		return '<span style="color: #840505;">'+str+'</span>';
    	else
    		return '<span style="color:green;">'+str+'</span>';
    }
    
})(jQuery);    