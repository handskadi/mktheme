<?php get_header(); ?>

<<<<<<< HEAD
<div id="content">
	<main>
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			<article>
				<h2><?php the_title(); ?></h2>
                <?php the_content(); ?>
			</article>
		<?php endwhile; endif; ?>
    </main>
=======
>>>>>>> d7f48e9651dbde3e51169709a06883290b48710c
</div>

<?php get_footer(); ?>
