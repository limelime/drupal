<?php
/**
 * @author Xuan Ngo
 */


/**
 * XN: Remove <fieldset> from date field.
 **/
function antonelli_date_combo($variables)
{
  return theme('form_element', $variables);
}

/**
 * XN: Make columns table in Views sortable.
 **/
function antonelli_preprocess_views_view_table(&$vars)
{
	// Add tablesorter class in view <table>.
	$vars['classes_array'][] = 'tablesorter';
}
