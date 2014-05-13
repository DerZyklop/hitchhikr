<?php snippet('header') ?>

  <main class="content" role="main">
    <h5><?php # echo html($page->title()) ?></h5>
    <?php echo kirbytext($page->text()) ?>



    <ul class="trip-stream">
      <li>
        09:46 – Mannheim
      </li>
      <li>
        09:53 – Grüner Volvo / Fahrer: Weiblich
      </li>
      <li>
        11:24 – Darmstadt
      </li>
      <li>
        11:41 – Blauer Opel / Fahrer: Männlich ca. 40
      </li>
      <li class="unknown">
        12:11 – Grüner Audi / Fahrer: Weiblich ca. 25
      </li>
      <li class="todo">
        Gießen
      </li>
    </ul>



  </main>

<?php #snippet('footer') ?>
