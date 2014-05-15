<?php snippet('header') ?>

  <main class="content" role="main">
    <h1><?php echo html($page->title()) ?></h1>
    <form action="<?= url('app/trip') ?>">
      <?php echo kirbytext($page->text()) ?>
      <p>
        <input type="submit" value="Next">
      </p>
    </form>
  </main>

<?php snippet('footer') ?>
