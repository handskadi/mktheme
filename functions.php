<?php
function enqueue_custom_assets() {
	# Enqueue Stylesheets
	wp_enqueue_style('custom-styles', get_template_directory_uri() . '/styles/style.css', array(), '1.0', 'screen');
	
	# Enqueue Scripts
	wp_enqueue_script('custom-scripts', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'enqueue_custom_assets');

?>
