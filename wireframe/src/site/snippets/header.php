<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />

  <title><?php echo html($site->title()) ?> | <?php echo html($page->title()) ?></title>
  <meta name="description" content="<?php echo html($site->description()) ?>" />

  <?php

  echo css(array(
    'http://fonts.googleapis.com/css?family=Merriweather:400,700',
    'assets/css/styles.min.css'
  ));

  ?>
</head>
<body>

  <header class="cf" role="banner">
    <?php #snippet('menu') ?>
  </header>
