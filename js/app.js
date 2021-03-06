angular.module('madLibs',['ngMessages', 'ngAnimate'])
  .controller('madlibsController', function($scope){

    $scope.gender = "male";
    
    $scope.$watch('gender', function(){
      if($scope.gender == "male"){
        $scope.genderHe = "he";
        $scope.genderHis = "his";
        $scope.genderHim = "him";  
      }
      else {
        $scope.genderHe = "she";
        $scope.genderHis = "her";
        $scope.genderHim = "her";
      }
      
    })

    $scope.template = [{
      name: "name",
      dTask: "dTask",
      ocelebrity: "ocelebrity",
      jobTitle: "jobTitle",
      celebrity: "celebrity",
      hugeNum: "hugeNum",
      tTask: "tTask",
      skill: "skill",
      adjective: "adjective"  
    }];

    $scope.showError = false;
    $scope.showInput = true;
    $scope.showMadLibs = true;


    // Animation
    $scope.fade = false;

    $scope.submit = function(){
      if($scope.madLibForm.$valid ) {
        console.log('The form is valid!');
        $scope.showInput = false;
        $scope.showError = false;
        //console.log($scope.showInput);
        $scope.showMadLibs = false;       
      } 
      else {
        console.log('The form is NOT valid!');
        $scope.showError = true;
        $scope.fade = false;

      }
    };

    $scope.resetForm = function(){
      //console.log('Reset!');
      
      $scope.showMadLibs = true;
      $scope.showInput = true;
      $scope.fade = false;
      $scope.template.name = null;
      $scope.template.dTask = null;
      $scope.template.ocelebrity = null;
      $scope.template.jobTitle = null;
      $scope.template.celebrity= null;
      $scope.template.hugeNum = null;
      $scope.template.tTask = null;
      $scope.template.skill = null;
      $scope.template.adjective = null;

    };
  });