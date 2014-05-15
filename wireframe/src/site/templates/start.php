<?php snippet('header') ?>

  <main class="content" role="main">
    <h1><?php echo html($page->title()) ?></h1>
    <?php echo kirbytext($page->text()) ?>
    <p>
      Here is your personal hitchhikr-url:<br>
      <pre><code><a href="/app?name=Nils&email=mail%40der-zyklop.de&next=next">app.hitchhike.me/<?= get('name') ?></a></code></pre>
    </p>
    <p>
      And this is for your friends & family:<br>
      <pre><code><a href="/watch?name=Nils&email=mail%40der-zyklop.de&next=next">watch.hitchhike.me/<?= get('name') ?></a></code></pre>
    </p>
  </main>

<?php snippet('footer') ?>
