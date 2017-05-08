var myApp = angular.module('myApp', []);


myApp.controller('myController',function(){

  var vm = this;

  vm.firstText = "Hello Class!!";
  vm.secondText = "I know angular!";

  vm.text = '';

  vm.tryThis = '<p> This is using a p tag! Does it work? </p>'; //it does not :(

});
