<?php get_header(); ?>

<div id="content" class="site-content">
    <main id="main" class="site-main" role="main">

        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>

    </main>
</div>

<?php get_footer(); ?>

