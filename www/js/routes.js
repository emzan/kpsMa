angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page23', {
    url: '/page23',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('tabsController.page3', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/page4',
    views: {
      'tab5': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController.page6', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page14', {
    url: '/page14',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page8', {
    url: '/page8',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page17', {
    url: '/page17',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page16',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page18', {
    url: '/page18',
    templateUrl: 'templates/page18.html',
    controller: 'page18Ctrl'
  })

  .state('page19', {
    url: '/page19',
    templateUrl: 'templates/page19.html',
    controller: 'page19Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('QA', {
    url: '/page20',
    templateUrl: 'templates/QA.html',
    controller: 'QACtrl'
  })

  .state('page13', {
    url: '/page13',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('C', {
    url: '/page22',
    templateUrl: 'templates/C.html',
    controller: 'CCtrl'
  })

  .state('A', {
    url: '/page25',
    templateUrl: 'templates/A.html',
    controller: 'ACtrl'
  })

  .state('B', {
    url: '/page26',
    templateUrl: 'templates/B.html',
    controller: 'BCtrl'
  })

  .state('imeldaSQuiz3', {
    url: '/page27',
    templateUrl: 'templates/imeldaSQuiz3.html',
    controller: 'imeldaSQuiz3Ctrl'
  })

  .state('imeldaSQuiz4', {
    url: '/page28',
    templateUrl: 'templates/imeldaSQuiz4.html',
    controller: 'imeldaSQuiz4Ctrl'
  })

  .state('imeldaSQuiz5', {
    url: '/page29',
    templateUrl: 'templates/imeldaSQuiz5.html',
    controller: 'imeldaSQuiz5Ctrl'
  })

  .state('C2', {
    url: '/page24',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/C2.html',
    controller: 'C2Ctrl'
  })

  .state('A2', {
    url: '/page31',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/A2.html',
    controller: 'A2Ctrl'
  })

  .state('B2', {
    url: '/page32',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/B2.html',
    controller: 'B2Ctrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

$urlRouterProvider.otherwise('/page1/page4')


});