<?php snippet('header') ?>

  <main class="content" role="main">
    <?php snippet('progress-bar') ?>
    <h1><?php echo html($page->title()) ?></h1>
    <?php echo kirbytext($page->text()) ?>
    <p>
      icon mit karte
      <button disabled="disabled" class="button" href="<?= url('loglocation') ?>">Log a Location</button>
      icon mit auto
      <a class="button" href="<?= url('app/trip/addlift') ?>">Log a Lift</a>
    </p>
  </main>

<?php snippet('footer') ?>
