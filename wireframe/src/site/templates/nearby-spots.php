<?php snippet('header') ?>

  <main class="content" role="main">
    <?php echo kirbytext($page->text()) ?>
    <div ng-controller="nearbySpotsCtrl">
      <br>
      <br>
      <br>
      (this is just an example for the data of one spot)
      <h3>{{data.location.locality}}</h3>
      {{data.rating}} (1 ist best 5 is worst) ({{data.rating_stats.rating_count}} ratings)
      <h4>Average waiting time</h4>
      {{data.waiting_stats.avg_textual}} (avg from {{data.waiting_stats.count}} entries)
      <h4>Description</h4>
      {{data.description.en_UK.description}}
      <h4>{{data.comments_count}} comments</h4>
      <ul>
        <li ng-repeat="item in data.comments">
          {{item.comment}}
        </li>
      </ul>
      <br>
    </div>
  </main>

<?php snippet('footer') ?>
