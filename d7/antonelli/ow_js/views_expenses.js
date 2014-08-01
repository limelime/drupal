/**
 * @author Xuan Ngo
 */

/**
 * Add a row at the end of each month with following information:
 *  - Total credit
 *  - Total debit
 */
(function ($) {
	
	$(document).ready(
       function()
       {

         $("table[class~='views-table']").each(
          function()
          {
            // Get the totals.
            var total_credit= 0.0;
            var total_debit	= 0.0;

            
            $(this).find("tbody > tr").each(
              function()
              {
                total_credit 	+= Number($(this).find("td[class~='views-field-field-ex-credit']").text().replace(/[^0-9\.]+/g,""));
                total_debit		+= Number($(this).find("td[class~='views-field-field-ex-debit']").text().replace(/[^0-9\.]+/g,""));
                 
                // $(this).append("<tr><td>"+total_cost_quantity+"|"+total_proceed_quantity+"</td></tr>"); // DEBUG
              }
            );

            // Number arithmetic should stop from here as they will be formatted.
            total_credit    = addCommas(Number(total_credit).toFixed(2));
            total_debit		= addCommas(Number(total_debit).toFixed(2));
            
            // Add totals information to the last row.
            var rows = $(this).find("tbody").children("tr");
            var row_html = "";
            if( rows.length % 2 == 0 )
              row_html += '<tr class="odd">';
            else
              row_html += '<tr class="even">';
            
            var columns_count = $(this).find("tbody > tr:first > td").length;
            row_html += '<td colspan="2"/>';
            row_html += '<td class="total_credit" style="font-weight:bold; text-align:right;">'+total_credit+'</td>';
            row_html += '<td class="total_debit" style="font-weight:bold; text-align:right;">'+total_debit+'</td>';
            row_html += '<td colspan="3"/>';
            
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