angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;

    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('page3Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_sentence || $scope.params.favorite_all){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    


}])
   
.controller('page4Ctrl', ['$scope', '$stateParams', 'Children', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Children) {
    
    $scope.params = $stateParams;
    
    $scope.children = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.lista_completa || $scope.params.titoli_completi || $scope.params.complete_sentenze){
            Children.query($scope.params).then(function(res){
                $scope.children = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Children.all().then(function(res){
                $scope.children = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
      
.controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page5Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('page50Ctrl', ['$scope', '$stateParams', 'Messages', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Messages, $ionicPopup) {

    $scope.data = {
        nome_cond: '',
        condivisione: ''
     
        
    
    }
    
    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Messages.add($scope.data).then(function(){
            $scope.data = {
                nome_cond: '',
                condivisione: ''
            
               
            }
            $scope.submitting = false;
            
            $ionicPopup.alert({
                title: '謝謝您!',
                template: '我們收到了您的資料.'
            });
            
        })
    }


}])
   
.controller('page31Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {


    $scope.params = $stateParams;

    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();

}])
   
.controller('page6Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    
    
    $scope.params = $stateParams;

    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.come_pregare0 || $scope.params.latest_news || $scope.params.news || $scope.params.time || $scope.params.year){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    


}])
   
.controller('30Ctrl', ['$scope', '$stateParams', 'Atutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Atutorials) {
  
  $scope.narrowed_atutorials = Atutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_atutorials = Atutorials.list;
          return;
      }
      
      $scope.narrowed_atutorials = Atutorials.list.filter(function(atutorial){
        if (atutorial.name.toLowerCase().indexOf(s) > -1 || atutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('quizCtrl', ['$scope', '$stateParams', 'Tutoriales', 'Tutorials', 'Ntutorials', 'Btutorials', 'Dtutorials', 'Ftutorials', 'Gtutorials', 'Stutorials', '$state', function ($scope, $stateParams, Tutoriales, Tutorials, Ntutorials, Btutorials, Dtutorials, Ftutorials, Gtutorials, Stutorials, $state) {


     $scope.zhorts = Tutoriales.list;
     $scope.shorts = Tutorials.list;
     $scope.sizes = Ntutorials.list;
     $scope.siles = Btutorials.list;
     $scope.tiles = Dtutorials.list;
     $scope.kiles = Ftutorials.list;
     $scope.liles = Gtutorials.list;
     $scope.ciles = Stutorials.list;
    
    $scope.data = {
        
        'short': $scope.shorts[0].points,
        'size': $scope.sizes[0].points,
        'sile': $scope.siles[0].points,
        'tile': $scope.tiles[0].points,
        'kile': $scope.kiles[0].points,
        'lile': $scope.liles[0].points,
        'cile': $scope.ciles[0].points,
        'zhort': $scope.zhorts[0].points
        
    };
    
     $scope.pictures = [
         'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData3.png?alt=media&token=3844f640-1736-48d7-ab6e-0ef9338f5b77',
       
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData1.png?alt=media&token=da8d92c5-7959-425e-ac42-91bb7b49eb9c',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData2.png?alt=media&token=2c039395-ffd2-4157-99a2-6e4f5278f3fd',
        
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData4.png?alt=media&token=68834e84-6e03-4a51-87da-d4e8742cec89'
        
        ];
    
    
    
    $scope.order = function(){
        
        $state.go('page26', $scope.data);
        
        // console.log("Order a "+ $scope.data.size+" pizza with the topping "+$scope.data.topping);
    };

}])
   
.controller('page30Ctrl', ['$scope', '$stateParams', 'Gtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gtutorials) {
  
  
  
  
  $scope.narrowed_gtutorials = Gtutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_gtutorials = Gtutorials.list;
          return;
      }
      
      $scope.narrowed_gtutorials = Gtutorials.list.filter(function(gtutorial){
        if (gtutorial.name.toLowerCase().indexOf(s) > -1 || gtutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }
  
  

  

}])
   
.controller('page35Ctrl', ['$scope', '$stateParams', 'Itutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Itutorials) {
  
  
  
  
  $scope.narrowed_itutorials = Itutorials.list;
  $scope.data = {
      search: ''
  };
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s === ''){
          $scope.narrowed_itutorials = Itutorials.list;
          return;
      }
      
      $scope.narrowed_itutorials = Itutorials.list.filter(function(itutorial){
        if (itutorial.name.toLowerCase().indexOf(s) > -1 || itutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  };
  
  
  
   $scope.pictures = [
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoE.png?alt=media&token=20629f40-42f2-4d59-a8ef-b13ee049a2ab',
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoG.png?alt=media&token=5f592576-d23d-4e51-a80f-a40913363148',
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoA.png?alt=media&token=345ca2f3-0d55-4081-8adf-d0d37066e57e',
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoF.png?alt=media&token=d4629cca-b221-43da-8297-ead412fb1b96',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoB.png?alt=media&token=1357945a-30a0-401c-9cfc-cbf40fe45d91',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoC.png?alt=media&token=73058120-773c-490c-a064-7318e0fe34eb',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoD.png?alt=media&token=858c99ee-6205-45ae-acc6-cd70e5ac8937',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoL.png?alt=media&token=b30fa863-eb6c-4a7c-8602-e7deeb7cace8',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoH.png?alt=media&token=444f74bb-a07a-4ba4-a5b9-216ffa3725ba'
        
        ];
  

}])
   
.controller('page26Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {


 $scope.data = {
    

    'zhort': $stateParams.zhort,
    'short': $stateParams.short,
    'sile': $stateParams.sile,
    'tile': $stateParams.tile,
    'lile': $stateParams.lile,
    'kile': $stateParams.kile,
    'cile': $stateParams.cile,
    'size': $stateParams.size

};

}])
   
.controller('page27Ctrl', ['$scope', '$stateParams', 'Bambino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bambino) {
    
    $scope.params = $stateParams;
    
    $scope.bambinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Bambino.query($scope.params).then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bambino.all().then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }
    
     $scope.pictures = [
        
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT1.JPG?alt=media&token=3c6a0b3a-2cb8-458e-a66a-3649ca5b41b2'
        
        ];


    $scope.loadData();


}])
   
.controller('page28Ctrl', ['$scope', '$stateParams', 'Bambino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bambino) {
    
    $scope.params = $stateParams;
    
    $scope.bambinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Bambino.query($scope.params).then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bambino.all().then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }
    
    $scope.pictures = [
        
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z39.JPG?alt=media&token=c2684ac4-e066-4e58-9e65-1c1c7dfb1bdf'
        
        ];

    $scope.loadData();


}])
   
.controller('KPSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    



}])
   
.controller('302Ctrl', ['$scope', '$stateParams', 'Messages', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Messages, $ionicPopup) {

    $scope.data = {
        
        nome_voto: '',
        voto: ''
        
    
    }
    
    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Messages.add($scope.data).then(function(){
            $scope.data = {
                nome_voto: '',
                voto: ''
               
            }
            $scope.submitting = false;
            
            $ionicPopup.alert({
                title: '謝謝您!',
                template: '我們收到了您的資料.'
            });
            
        })
    }

}])
   
.controller('page49Ctrl', ['$scope', '$stateParams', 'Survey', 'Children', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey, Children) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.news || $scope.params.time){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('ohMyGodCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {
  
  $scope.narrowed_tutorials = Tutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_tutorials = Tutorials.list;
          return;
      }
      
      $scope.narrowed_tutorials = Tutorials.list.filter(function(tutorial){
        if (tutorial.name.toLowerCase().indexOf(s) > -1 || tutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page23Ctrl', ['$scope', '$stateParams', 'Etutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Etutorials) {
  
  $scope.narrowed_etutorials = Etutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_etutorials = Etutorials.list;
          return;
      }
      
      $scope.narrowed_etutorials = Etutorials.list.filter(function(etutorial){
        if (etutorial.name.toLowerCase().indexOf(s) > -1 || etutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }
  
  $scope.pictures = [
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilA.png?alt=media&token=d39239ac-c7e5-4b19-b841-54af32e33239',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilB.png?alt=media&token=50c485b3-169d-495f-ab41-d9ff90b62068',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSileB.png?alt=media&token=939c4990-3b47-45ac-b56f-d56f408900bf',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilD.png?alt=media&token=790bbb5a-8c30-4363-974d-50aef7414f6b',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilE.png?alt=media&token=c875697b-650d-45e7-a558-1d3098ee3474',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSileG.png?alt=media&token=7febc00f-46d4-47a5-a058-9206e022f8cd',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSileH.png?alt=media&token=47d7316d-75e1-47f2-b208-a63e6ab5a40f',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilH.png?alt=media&token=888f52ad-8ec4-41c2-9fc9-813ffad96864',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilI.png?alt=media&token=3e8fa982-4b32-4157-8b8e-ebe78973160a',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Silence%2FSilJ.png?alt=media&token=1506cad5-4a5c-430b-abae-be6f73fae220'
         
        ];

}])
   
.controller('page11Ctrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {
  
  $scope.narrowed_btutorials = Btutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_btutorials = Btutorials.list;
          return;
      }
      
      $scope.narrowed_btutorials = Btutorials.list.filter(function(btutorial){
        if (btutorial.name.toLowerCase().indexOf(s) > -1 || btutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page22Ctrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {
  
  $scope.narrowed_dtutorials = Dtutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_dtutorials = Dtutorials.list;
          return;
      }
      
      $scope.narrowed_dtutorials = Dtutorials.list.filter(function(dtutorial){
        if (dtutorial.name.toLowerCase().indexOf(s) > -1 || dtutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page15Ctrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {
  
  $scope.narrowed_ctutorials = Ctutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_ctutorials = Ctutorials.list;
          return;
      }
      
      $scope.narrowed_ctutorials = Ctutorials.list.filter(function(ctutorial){
        if (ctutorial.name.toLowerCase().indexOf(s) > -1 || ctutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page17Ctrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ntutorials) {
  
  $scope.narrowed_ntutorials = Ntutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_ntutorials = Ntutorials.list;
          return;
      }
      
      $scope.narrowed_ntutorials = Ntutorials.list.filter(function(ntutorial){
        if (ntutorial.name.toLowerCase().indexOf(s) > -1 || ntutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('ohMyGod2Ctrl', ['$scope', '$stateParams', 'Tutoriales', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutoriales) {
  
  $scope.narrowed_tutoriales = Tutoriales.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_tutoriales = Tutoriales.list;
          return;
      }
      
      $scope.narrowed_tutoriales = Tutoriales.list.filter(function(tutoriale){
        if (tutoriale.name.toLowerCase().indexOf(s) > -1 || tutoriale.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page16Ctrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Stutorials) {
  
  $scope.narrowed_stutorials = Stutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_stutorials = Stutorials.list;
          return;
      }
      
      $scope.narrowed_stutorials = Stutorials.list.filter(function(stutorial){
        if (stutorial.name.toLowerCase().indexOf(s) > -1 || stutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }
  
   $scope.pictures = [
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoA.png?alt=media&token=345ca2f3-0d55-4081-8adf-d0d37066e57e',
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoE.png?alt=media&token=20629f40-42f2-4d59-a8ef-b13ee049a2ab',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoB.png?alt=media&token=1357945a-30a0-401c-9cfc-cbf40fe45d91',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoC.png?alt=media&token=73058120-773c-490c-a064-7318e0fe34eb',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoD.png?alt=media&token=858c99ee-6205-45ae-acc6-cd70e5ac8937'
        
        ];

}])
   
.controller('page32Ctrl', ['$scope', '$stateParams', 'Htutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Htutorials) {
  
  $scope.narrowed_htutorials = Htutorials.list;
  $scope.data = {
      search: ''
  };
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s === ''){
          $scope.narrowed_htutorials = Htutorials.list;
          return;
      }
      
      $scope.narrowed_htutorials = Htutorials.list.filter(function(htutorial){
        if (htutorial.name.toLowerCase().indexOf(s) > -1 || htutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  };
  
  
   $scope.pictures = [
       
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoA.png?alt=media&token=345ca2f3-0d55-4081-8adf-d0d37066e57e',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoB.png?alt=media&token=1357945a-30a0-401c-9cfc-cbf40fe45d91',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoC.png?alt=media&token=73058120-773c-490c-a064-7318e0fe34eb',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoD.png?alt=media&token=858c99ee-6205-45ae-acc6-cd70e5ac8937',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2FFotoE.png?alt=media&token=20629f40-42f2-4d59-a8ef-b13ee049a2ab'
        
        ];

}])
   
.controller('page37Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
     $scope.pictures = [
       
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Vangelo%2FLibro_0.png?alt=media&token=f29e6789-3423-4251-bdc5-ffce2e6e68cc',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Vangelo%2FLibro_1.png?alt=media&token=e85c5ab8-eca5-43e3-9bad-4f4594802679',
        
        
        ];


}])
   
.controller('tutorialCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {

    $scope.video = Tutorials.keys[$stateParams.videokey];

}])
   
.controller('btutorialCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {

    $scope.video = Btutorials.keys[$stateParams.videokey];

}])
   
.controller('ntutorialCtrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ntutorials) {

    $scope.video = Ntutorials.keys[$stateParams.videokey];

}])
   
.controller('stutorialCtrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Stutorials) {

    $scope.video = Stutorials.keys[$stateParams.videokey];

}])
   
.controller('tutorialeCtrl', ['$scope', '$stateParams', 'Tutoriales', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutoriales) {

    $scope.video = Tutoriales.keys[$stateParams.videokey];

}])
   
.controller('atutorialCtrl', ['$scope', '$stateParams', 'Atutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Atutorials) {

    $scope.foto = Atutorials.keys[$stateParams.fotokey];

}])
   
.controller('ctutorialCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {

    $scope.video = Ctutorials.keys[$stateParams.videokey];

}])
   
.controller('dtutorialCtrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {

    $scope.video = Dtutorials.keys[$stateParams.videokey];

}])
   
.controller('etutorialCtrl', ['$scope', '$stateParams', 'Etutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Etutorials) {

    $scope.video = Etutorials.keys[$stateParams.videokey];

}])
   
.controller('page21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

$scope.showContent = false;

}])
   
.controller('page14Ctrl', ['$scope', '$stateParams', 'Ftutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ftutorials) {
  
  
  
  
  $scope.narrowed_ftutorials = Ftutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_ftutorials = Ftutorials.list;
          return;
      }
      
      $scope.narrowed_ftutorials = Ftutorials.list.filter(function(ftutorial){
        if (ftutorial.name.toLowerCase().indexOf(s) > -1 || ftutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }
  
  
  
   $scope.pictures = [
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData4.png?alt=media&token=68834e84-6e03-4a51-87da-d4e8742cec89',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData1.png?alt=media&token=da8d92c5-7959-425e-ac42-91bb7b49eb9c',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData2.png?alt=media&token=2c039395-ffd2-4157-99a2-6e4f5278f3fd',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData3.png?alt=media&token=3844f640-1736-48d7-ab6e-0ef9338f5b77'
        
        
        ];
  

}])
   
.controller('ftutorialCtrl', ['$scope', '$stateParams', 'Ftutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ftutorials) {

    $scope.video = Ftutorials.keys[$stateParams.videokey];

}])
   
.controller('gtutorialCtrl', ['$scope', '$stateParams', 'Gtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gtutorials) {

    $scope.video = Gtutorials.keys[$stateParams.videokey];

}])
   
.controller('itutorialCtrl', ['$scope', '$stateParams', 'Itutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Itutorials) {

    $scope.video = Itutorials.keys[$stateParams.videokey];

}])
   
.controller('htutorialCtrl', ['$scope', '$stateParams', 'Htutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Htutorials) {

    $scope.video = Htutorials.keys[$stateParams.videokey];

}])
   
.controller('page29Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  
  
  
  
  
  
  
   $scope.pictures = [
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData4.png?alt=media&token=68834e84-6e03-4a51-87da-d4e8742cec89',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData1.png?alt=media&token=da8d92c5-7959-425e-ac42-91bb7b49eb9c',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData2.png?alt=media&token=2c039395-ffd2-4157-99a2-6e4f5278f3fd',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData3.png?alt=media&token=3844f640-1736-48d7-ab6e-0ef9338f5b77'
        
         
        ];
  

}])
   
.controller('kPSCtrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;

    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('imparaLItalianoCtrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {

  
    $scope.data = {
        'id': '0',
        'domanda1': '',
        'risposta10': '',
        'risposta11': '',
        'risposta12': '',
        'risposta13': '',
        'risposta14': '',
        'domanda2': '',
        'risposta20': '',
        'risposta21': '',
        'risposta22': '',
        'risposta23': '',
        'risposta24': '',
        'domanda3': '',
        'risposta30': '',
        'risposta31': '',
        'risposta32': '',
        'risposta33': '',
        'risposta34': '',
        'domanda4': '',
        'risposta40': '',
        'risposta41': '',
        'risposta42': '',
        'risposta43': '',
        'risposta44': ''

    }
    
      var ref = firebase.database().ref().child("Itagliano");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
            id: $scope.data.id++,
          que1: $scope.data.domanda1,
          ans10: $scope.data.risposta10,
          ans11: $scope.data.risposta11,
          ans12: $scope.data.risposta12,
          ans13: $scope.data.risposta13,
          ans14: $scope.data.risposta14,
          que2: $scope.data.domanda2,
          ans20: $scope.data.risposta20,
          ans21: $scope.data.risposta21,
          ans22: $scope.data.risposta22,
          ans23: $scope.data.risposta23,
          ans24: $scope.data.risposta24,
          que3: $scope.data.domanda3,
          ans30: $scope.data.risposta30,
          ans31: $scope.data.risposta31,
          ans32: $scope.data.risposta32,
          ans33: $scope.data.risposta33,
          ans34: $scope.data.risposta34,
           que4: $scope.data.domanda4,
          ans40: $scope.data.risposta40,
          ans41: $scope.data.risposta41,
          ans42: $scope.data.risposta42,
          ans43: $scope.data.risposta43,
          ans44: $scope.data.risposta44
          
          
        });
        



      };

}])
   
.controller('learnEnglishCtrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {

  
    $scope.data = {
        'id': '0',
        'domanda1': '',
        'risposta10': '',
        'risposta11': '',
        'risposta12': '',
        'risposta13': '',
        'risposta14': '',
        'domanda2': '',
        'risposta20': '',
        'risposta21': '',
        'risposta22': '',
        'risposta23': '',
        'risposta24': '',
        'domanda3': '',
        'risposta30': '',
        'risposta31': '',
        'risposta32': '',
        'risposta33': '',
        'risposta34': '',
        'domanda4': '',
        'risposta40': '',
        'risposta41': '',
        'risposta42': '',
        'risposta43': '',
        'risposta44': ''

    }
    
      var ref = firebase.database().ref().child("Question");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
            id: $scope.data.id++,
          que1: $scope.data.domanda1,
          ans10: $scope.data.risposta10,
          ans11: $scope.data.risposta11,
          ans12: $scope.data.risposta12,
          ans13: $scope.data.risposta13,
          ans14: $scope.data.risposta14,
          que2: $scope.data.domanda2,
          ans20: $scope.data.risposta20,
          ans21: $scope.data.risposta21,
          ans22: $scope.data.risposta22,
          ans23: $scope.data.risposta23,
          ans24: $scope.data.risposta24,
          que3: $scope.data.domanda3,
          ans30: $scope.data.risposta30,
          ans31: $scope.data.risposta31,
          ans32: $scope.data.risposta32,
          ans33: $scope.data.risposta33,
          ans34: $scope.data.risposta34,
           que4: $scope.data.domanda4,
          ans40: $scope.data.risposta40,
          ans41: $scope.data.risposta41,
          ans42: $scope.data.risposta42,
          ans43: $scope.data.risposta43,
          ans44: $scope.data.risposta44
          
          
        });
        



      };

}])
   
.controller('imparaLItaliano1Ctrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {

  
    $scope.data = {
        'id': '0',
        'domanda1': '',
        'risposta10': '',
        'risposta11': '',
        'risposta12': '',
        'risposta13': '',
        'risposta14': '',
        'domanda2': '',
        'risposta20': '',
        'risposta21': '',
        'risposta22': '',
        'risposta23': '',
        'risposta24': '',
        'domanda3': '',
        'risposta30': '',
        'risposta31': '',
        'risposta32': '',
        'risposta33': '',
        'risposta34': '',
        'domanda4': '',
        'risposta40': '',
        'risposta41': '',
        'risposta42': '',
        'risposta43': '',
        'risposta44': ''

    }
    
      var ref = firebase.database().ref().child("Itagliano1");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
            id: $scope.data.id++,
          que1: $scope.data.domanda1,
          ans10: $scope.data.risposta10,
          ans11: $scope.data.risposta11,
          ans12: $scope.data.risposta12,
          ans13: $scope.data.risposta13,
          ans14: $scope.data.risposta14,
          que2: $scope.data.domanda2,
          ans20: $scope.data.risposta20,
          ans21: $scope.data.risposta21,
          ans22: $scope.data.risposta22,
          ans23: $scope.data.risposta23,
          ans24: $scope.data.risposta24,
          que3: $scope.data.domanda3,
          ans30: $scope.data.risposta30,
          ans31: $scope.data.risposta31,
          ans32: $scope.data.risposta32,
          ans33: $scope.data.risposta33,
          ans34: $scope.data.risposta34,
           que4: $scope.data.domanda4,
          ans40: $scope.data.risposta40,
          ans41: $scope.data.risposta41,
          ans42: $scope.data.risposta42,
          ans43: $scope.data.risposta43,
          ans44: $scope.data.risposta44
          
          
        });
        



      };

}])
   
.controller('imparaLItaliano2Ctrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {

  
    $scope.data = {
        'id': '0',
        'domanda1': '',
        'risposta10': '',
        'risposta11': '',
        'risposta12': '',
        'risposta13': '',
        'risposta14': '',
        'domanda2': '',
        'risposta20': '',
        'risposta21': '',
        'risposta22': '',
        'risposta23': '',
        'risposta24': '',
        'domanda3': '',
        'risposta30': '',
        'risposta31': '',
        'risposta32': '',
        'risposta33': '',
        'risposta34': '',
        'domanda4': '',
        'risposta40': '',
        'risposta41': '',
        'risposta42': '',
        'risposta43': '',
        'risposta44': ''

    }
    
      var ref = firebase.database().ref().child("Itagliano2");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
            id: $scope.data.id++,
          que1: $scope.data.domanda1,
          ans10: $scope.data.risposta10,
          ans11: $scope.data.risposta11,
          ans12: $scope.data.risposta12,
          ans13: $scope.data.risposta13,
          ans14: $scope.data.risposta14,
          que2: $scope.data.domanda2,
          ans20: $scope.data.risposta20,
          ans21: $scope.data.risposta21,
          ans22: $scope.data.risposta22,
          ans23: $scope.data.risposta23,
          ans24: $scope.data.risposta24,
          que3: $scope.data.domanda3,
          ans30: $scope.data.risposta30,
          ans31: $scope.data.risposta31,
          ans32: $scope.data.risposta32,
          ans33: $scope.data.risposta33,
          ans34: $scope.data.risposta34,
           que4: $scope.data.domanda4,
          ans40: $scope.data.risposta40,
          ans41: $scope.data.risposta41,
          ans42: $scope.data.risposta42,
          ans43: $scope.data.risposta43,
          ans44: $scope.data.risposta44
          
          
        });
        



      };

}])
   
.controller('soluzioniCtrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {


 $scope.data = {
    
    'choice1' : $stateParams.choice1,
    'choice2': $stateParams.choice2,
    'choice3': $stateParams.choice3,
    'choice4': $stateParams.choice4,
    'choice5': $stateParams.choice5

};

 var ref = firebase.database().ref().child("Itagliano");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);

}])
   
.controller('solutionsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


 $scope.data = {
    
    'choice1' : $stateParams.choice1,
    'choice2': $stateParams.choice2,
    'choice3': $stateParams.choice3,
    'choice4': $stateParams.choice4,
    'choice5': $stateParams.choice5

};



}])
   
.controller('soluzioni1Ctrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {


 $scope.data = {
    
    'choice1' : $stateParams.choice1,
    'choice2': $stateParams.choice2,
    'choice3': $stateParams.choice3,
    'choice4': $stateParams.choice4,
    'choice5': $stateParams.choice5

};

var ref = firebase.database().ref().child("Itagliano1");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);

}])
   
.controller('soluzioni2Ctrl', ['$scope', '$stateParams', '$firebaseArray', function ($scope, $stateParams, $firebaseArray) {


 $scope.data = {
    
    'choice1' : $stateParams.choice1,
    'choice2': $stateParams.choice2,
    'choice3': $stateParams.choice3,
    'choice4': $stateParams.choice4,
    'choice5': $stateParams.choice5

};

var ref = firebase.database().ref().child("Itagliano2");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);

}])
 