<?php snippet('header') ?>

  <main class="content" role="main">
    <?php echo kirbytext($page->text()) ?>
    <?php snippet('trip-stream') ?>
  </main>

<?php snippet('footer') ?>
