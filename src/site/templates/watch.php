<?php snippet('header') ?>

  <main class="content" role="main">
    <h5><?php # echo html($page->title()) ?></h5>
    <?php echo kirbytext($page->text()) ?>



    <ul class="trip-stream">
      <li>
        Mannheim
      </li>
      <li>
        Grüner Volvo / Fahrer: Weiblich
      </li>
      <li>
        Darmstadt
      </li>
      <li>
        Blauer Opel / Fahrer: Männlich ca. 40
      </li>
      <li class="unknown">
        Grüner Audi / Fahrer: Weiblich ca. 25
      </li>
      <li class="todo">
        Gießen
      </li>
    </ul>



  </main>

<?php #snippet('footer') ?>
