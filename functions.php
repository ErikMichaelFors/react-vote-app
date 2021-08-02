<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
function enqueue_parent_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

// Enqueue Theme JS w React Dependency
add_action( 'wp_enqueue_scripts', 'my_enqueue_theme_js' );
function my_enqueue_theme_js() {
  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    time(), // Change this to null for production
    true
  );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

function my_theme_enqueue_styles() {
  $parent_style = 'twentytwenty-style'; 
    
  wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    
  wp_enqueue_style( 'child-style',
    get_stylesheet_directory_uri() . '/style.css',
    [ $parent_style ],
    time() //For production use wp_get_theme()->get('Version')
  );

  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    time() //For production use wp_get_theme()->get('Version')        
  );
}

/** My modifications [START] */
/*function enqueue_my_custom_script() {
    wp_enqueue_script( 'tictactoejs', '/src/tictactoe.js', false );
}

add_action( 'wp_enqueue_scripts', 'enqueue_my_custom_script' );*/

add_action( 'wp','tu_remove_header' );
	function tu_remove_header() { 
	if ( is_page_template(['page-react-tictactoe-app.php', 'page-react-vote-app.php']) ) {
		remove_action( 'generate_header','generate_construct_header' );
	}
	}

	add_action( 'wp','tu_remove_footer' );
	function tu_remove_footer() {
		if ( is_page_template(['page-react-tictactoe-app.php', 'page-react-vote-app.php']) ) {
			remove_action( 'generate_footer','generate_construct_footer' );
		}
	}
/** My modifications [END] */