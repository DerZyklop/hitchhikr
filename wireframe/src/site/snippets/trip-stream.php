<div ng-controller="logsStreamCtrl" class="trip-stream">
  <h2>{{trip.start}} > {{trip.target}} | {{trip.date}}</h2>
  <ul>
    <li ng-class="{'unknown':$last}" ng-repeat="log in logs">
      {{log.time}} |
      <span ng-if="log.location">{{log.location}}</span>
      <span ng-if="log.color"> in a {{log.color}}-colored car</span>
      <!-- TODO: this does't work. dont know why -->
      <span ng-if="log.gender"> with a {{log.gender}}</span>
    </li>
    <li>
      {{trip.target}}
    </li>
  </ul>
</div>
