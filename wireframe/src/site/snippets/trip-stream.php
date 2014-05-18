<div ng-controller="logsStreamCtrl">
  <h2>{{trip.start}} > {{trip.target}} | {{trip.date}}</h2>
  <ul class="trip-stream">
    <li ng-repeat="log in logs">
      {{log.time}} |
      <span ng-if="log.location">{{log.location}}</span>
      <span ng-if="log.color"> in a {{log.color}}-colored car</span>
      <!-- TODO: this does't work. dont know why -->
      <span ng-if="log.gender"> with a {{log.gender}}</span>
    </li>
  </ul>
</div>
