<?php snippet('header') ?>

  <main class="content" role="main">
    <?php if (count(get())): ?>
      <h2>Hi <?= get('name') ?>!</h2>
      <p>
        Here is your personal hitchhikr-url:<br>
        <pre><code><a href="/app?name=Nils&email=mail%40der-zyklop.de&next=next">app.hitchhike.me/<?= get('name') ?></a></code></pre>
      </p>
      <p>
        And this is for your friends & family:<br>
        <pre><code><a href="/watch?name=Nils&email=mail%40der-zyklop.de&next=next">watch.hitchhike.me/<?= get('name') ?></a></code></pre>
      </p>
    <?php else : ?>
      <?php echo kirbytext($page->text()) ?>
    <?php endif ?>
  </main>

<?php snippet('footer') ?>
