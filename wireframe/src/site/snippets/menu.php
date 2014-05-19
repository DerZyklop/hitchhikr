<nav role="navigation" class="main-nav" id="main-nav">

  <ul class="menu cf">
    <li>
      <a href="#" class="close-menu">
        &#215
      </a>
    </li>
    <li class="home">
      <a <?php e($site->isOpen(), ' class="active"') ?> href="<?php echo $site->url() ?>"><?php echo html($site->title()) ?></a>
    </li>
    <?php foreach($site->find('app')->children()->visible() as $p): ?>
    <li>
      <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
    </li>
    <?php endforeach ?>
  </ul>

</nav>
