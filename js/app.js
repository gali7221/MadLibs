angular.module('myApp', [])

.controller('madlibsController', function($scope){
	$scope.template = [{
                name: 'name',
                jTitle: 'job title',
                tTask: 'tedious task',
                dTask: 'dirty task',
                celebrity: 'celebrity',
                skill: 'useless skill',
                ocelebrity: 'obnoxious celebrity',
                hugeNum: 'huge number',
                adjective: 'adjective'
	}];

        $scope.newValue = function(value){
                console.log(value);
                if(value === "female"){
                        $('.input-section').show();
                        $('#female-text').show();
                        $('#male-text').hide();
                }
                else if(value === "male") {
                        $('.input-section').show();
                        $('#male-text').show();
                        $('#female-text').hide();
                }
        }
});