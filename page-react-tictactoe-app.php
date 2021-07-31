<?php
/**
 * Template Name: React TicTacToe App Template
 */

wp_register_script( 'my-script', 'tictactoe.js' );
wp_enqueue_script( 'my-script' );
$translation_array = array( 'templateUrl' => get_stylesheet_directory_uri('tictactoe.css') );
//after wp_enqueue_script
wp_localize_script( 'my-script', 'object_name', $translation_array );


get_header();
?>

<main id="site-content" role="main">
	<article class="post-2 page type-page status-publish hentry">
		<?php get_template_part( 'template-parts/entry-header' ); ?>
		<div class="post-inner thin">
			<div class="entry-content">				

				<div id="react-tictactoe-app">
				</div><!-- #react-tictactoe-app -->

			</div><!-- .entry-content -->
		</div><!-- .post-inner -->
	</article><!-- .post -->
</main><!-- #site-content -->

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>
<script type="text/javascript" src="<?=get_template_directory_uri();?>/scripts/markers.js"></script>
<?php get_footer(); ?>