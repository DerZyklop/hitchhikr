<nav role="navigation" class="main-nav" id="main-nav">

  <ul class="menu cf">
    <?php foreach($site->find('app')->children()->visible() as $p): ?>
    <li>
      <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
    </li>
    <?php endforeach ?>
  </ul>

</nav>
