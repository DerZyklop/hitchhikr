<?php snippet('header') ?>
  <?php snippet('menu') ?>

  <main class="content" role="main">
    <div class="collapsable">
      <div class="collapsable-target">
        <?php snippet('trip-stream') ?>
      </div>
      <div class="collapsable-trigger">
        <?php snippet('progress-bar') ?>
      </div>
    </div>
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
