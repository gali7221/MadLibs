angular.module('myApp', [])

.controller('madlibsController', function($scope){
	$scope.template = [{
		maleName: 'male name',
        jTitle: 'job title',
        tTask: 'tedious task',
        dTask: 'dirty task',
        celebrity: 'celebrity',
        skill: 'useless skill',
        ocelebrity: 'obnoxious celebrity',
        hugeNum: 'huge number',
        adjective: 'adjective'
	}];
})