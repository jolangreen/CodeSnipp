<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>

</main>
<div class="clear"></div>

<!-- Footer ================================================== -->
<footer>
    <div class="container">
        <?php wp_nav_menu( array('menu' => 'footer', 'after' => '' )); ?>
        <div class="text-muted">
            &copy; <?php echo date( "Y" ); ?> UntitledCompany. All Rights Reserved.
        </div>
    </div>
</footer>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/js/scripts.js"></script>
<script type="text/javascript">
    if ($(window).width() > 960) {
       var s = skrollr.init();
    }
</script>

<?php wp_footer(); ?>
</body>
</html>
