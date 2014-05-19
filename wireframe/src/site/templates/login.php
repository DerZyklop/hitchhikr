<?php snippet('header') ?>

  <main role="main">
    <?php echo kirbytext($page->text()) ?>
    <form action="home/">
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
