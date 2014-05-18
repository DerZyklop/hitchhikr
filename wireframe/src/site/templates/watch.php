<?php snippet('header') ?>

  <main class="content" role="main">
    <h5><?php # echo html($page->title()) ?></h5>
    <?php echo kirbytext($page->text()) ?>



    <?php snippet('trip-stream') ?>



  </main>

<?php snippet('footer') ?>
