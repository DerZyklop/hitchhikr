<!DOCTYPE html>
<html lang="en" ng-app="Hitchhikr">
<head>

  <meta charset="utf-8" />

  <title><?php echo html($site->title()) ?> | <?php echo html($page->title()) ?></title>
  <meta name="description" content="<?php echo html($site->description()) ?>" />

  <?php

  echo css(array(
    // 'http://fonts.googleapis.com/css?family=Merriweather:400,700',
    'assets/css/styles.min.css'
  ));

  ?>
</head>
<body>

  <?php snippet('menu') ?>

  <div class="page-wrap">
    <header class="main-header" role="banner">
      <a href="#main-nav" class="open-menu">
        ☰
      </a>
      <a href="#" class="close-menu">
        ☰
      </a>
      <h1><?php echo html($page->title()) ?></h1>
    </header>
    <div class="main-content">

