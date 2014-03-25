<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>

  <?php get_template_part('templates/header'); ?>

  <div class="wrap container" role="document">
    <div class="content row">
      <main class="main" role="main">
        <?php include roots_template_path(); ?>
      </main><!-- /.main -->
      <?php if (true) : ?>
        <aside class="sidebar" role="complementary">
          <?php get_template_part('templates/sidebar'); ?>
        </aside><!-- /.sidebar -->
      <?php endif; ?>
    </div><!-- /.content -->
  </div><!-- /.wrap -->

  <?php get_template_part('templates/footer'); ?>

</body>
</html>
