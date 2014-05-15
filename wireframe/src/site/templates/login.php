<?php snippet('header') ?>

  <main role="main">
    <h1><?php echo html($page->title()) ?></h1>
    <?php echo kirbytext($page->text()) ?>
    <form action="start/">
      <p>
        <label for="name">Your Name</label><br>
        <input type="text" name="name">
      </p>
      <p>
        <label for="email">Your Email</label><br>
        <input type="email" name="email">
      </p>
      <p>
        <input type="submit" name="next" value="next">
      </p>
    </form>
  </main>

<?php snippet('footer') ?>
