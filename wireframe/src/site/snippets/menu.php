<nav role="navigation" class="main-nav" id="main-nav">

  <ul class="menu cf">
    <li>
      <a href="#" class="close-menu">
        &#215
      </a>
    </li>
    <?php foreach($site->children()->visible() as $p): ?>
    <li>
      <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
    </li>
    <?php endforeach ?>
    <li class="logout">
      <a href="/">&#215 Logout</a>
    </li>
  </ul>

</nav>
