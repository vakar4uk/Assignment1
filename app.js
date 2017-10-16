(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {  
      
      $scope.checkIfTooMuch = function() {  
        var separator = /[\s,]+/;

        if ($scope.lunchItems === "" || $scope.lunchItems === undefined || $scope.lunchItems.length === 0)
    {
        $scope.message =  "Please enter data first";
        $scope.messageColor = "red";
    }
        
        else {
          var splitFood = $scope.lunchItems.split(separator);
          console.log(splitFood.length);
  
          if(splitFood.length <= 3 && splitFood.length > 0) {
            $scope.message = "Enjoy!";
            $scope.messageColor = "green";           
          }
  
          if(splitFood.length > 3 ) {
            $scope.message = "Too much!";
            $scope.messageColor = "green";
          }
        }
       
       
      }
    }; 
     
   
    
    })();