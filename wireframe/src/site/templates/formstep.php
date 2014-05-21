<?php snippet('header') ?>

  <main class="content" role="main">
    <?php
      if ($page->nextVisible()) {
        $next = $page->nextVisible();
      } else {
        $next = $page->parent()->parent();
      }
      ?>
    <form action="<?= url($next) ?>">
      <?php echo kirbytext($page->text()) ?>
      <p>
        <input type="submit" value="Next">
      </p>
    </form>
  </main>

<?php snippet('footer') ?>
