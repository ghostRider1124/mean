'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');

$('header span').on('click', function(){
  if($(this).index() == 1){//increase size...
    $('.plan').css({
      fontSize: '+=2'
    });
  }else{//decrease size...
    $('.plan').css({
      fontSize: '-=2'
    });
  }
});