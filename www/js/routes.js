angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.page2', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/page3',
    views: {
      'tab8': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('page4', {
    url: '/page4',
	params: {
		date: "",
		intentions: "",
		favorite_part: ""		
},
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page5', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('page50', {
    url: '/page50',
    templateUrl: 'templates/page50.html',
    controller: 'page50Ctrl'
  })

  .state('page31', {
    url: '/page31',
    templateUrl: 'templates/page31.html',
    controller: 'page31Ctrl'
  })

  .state('tabsController.page6', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('30', {
    url: '/page9',
    templateUrl: 'templates/30.html',
    controller: '30Ctrl'
  })

  .state('quiz', {
    url: '/page10',
    templateUrl: 'templates/quiz.html',
    controller: 'quizCtrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

  .state('page35', {
    url: '/page35',
    templateUrl: 'templates/page35.html',
    controller: 'page35Ctrl'
  })

  .state('page26', {
    url: '/page26',
	params: {
		zhort: "",
		short: "",
		size: "",
		sile: "",
		tile: "",
		kile: "",
		lile: "",
		cile: ""		
},
    templateUrl: 'templates/page26.html',
    controller: 'page26Ctrl'
  })

  .state('page27', {
    url: '/page27',
    templateUrl: 'templates/page27.html',
    controller: 'page27Ctrl'
  })

  .state('page28', {
    url: '/page28',
    templateUrl: 'templates/page28.html',
    controller: 'page28Ctrl'
  })

  .state('KPS', {
    url: '/page48',
    templateUrl: 'templates/KPS.html',
    controller: 'KPSCtrl'
  })

  .state('302', {
    url: '/page12',
    templateUrl: 'templates/302.html',
    controller: '302Ctrl'
  })

  .state('page49', {
    url: '/page49',
    templateUrl: 'templates/page49.html',
    controller: 'page49Ctrl'
  })

  .state('ohMyGod', {
    url: '/page52',
    templateUrl: 'templates/ohMyGod.html',
    controller: 'ohMyGodCtrl'
  })

  .state('page23', {
    url: '/page23',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page22', {
    url: '/page22',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page17', {
    url: '/page17',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('ohMyGod2', {
    url: '/page54',
    templateUrl: 'templates/ohMyGod2.html',
    controller: 'ohMyGod2Ctrl'
  })

  .state('page16', {
    url: '/page16',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page32', {
    url: '/page32',
    templateUrl: 'templates/page32.html',
    controller: 'page32Ctrl'
  })

  .state('page37', {
    url: '/page37',
    templateUrl: 'templates/page37.html',
    controller: 'page37Ctrl'
  })

  .state('tutorial', {
    url: '/page53',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/tutorial.html',
    controller: 'tutorialCtrl'
  })

  .state('btutorial', {
    url: '/page13',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/btutorial.html',
    controller: 'btutorialCtrl'
  })

  .state('ntutorial', {
    url: '/page57',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/ntutorial.html',
    controller: 'ntutorialCtrl'
  })

  .state('stutorial', {
    url: '/page56',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/stutorial.html',
    controller: 'stutorialCtrl'
  })

  .state('tutoriale', {
    url: '/page55',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/tutoriale.html',
    controller: 'tutorialeCtrl'
  })

  .state('atutorial', {
    url: '/page58',
	params: {
		fotokey: ""		
},
    templateUrl: 'templates/atutorial.html',
    controller: 'atutorialCtrl'
  })

  .state('ctutorial', {
    url: '/page19',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/ctutorial.html',
    controller: 'ctutorialCtrl'
  })

  .state('dtutorial', {
    url: '/page24',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/dtutorial.html',
    controller: 'dtutorialCtrl'
  })

  .state('etutorial', {
    url: '/page25',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/etutorial.html',
    controller: 'etutorialCtrl'
  })

  .state('page21', {
    url: '/page21',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('page14', {
    url: '/page14',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('ftutorial', {
    url: '/page20',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/ftutorial.html',
    controller: 'ftutorialCtrl'
  })

  .state('gtutorial', {
    url: '/page33',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/gtutorial.html',
    controller: 'gtutorialCtrl'
  })

  .state('itutorial', {
    url: '/page36',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/itutorial.html',
    controller: 'itutorialCtrl'
  })

  .state('htutorial', {
    url: '/page34',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/htutorial.html',
    controller: 'htutorialCtrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

  .state('tabsController.kPS', {
    url: '/page18',
    views: {
      'tab6': {
        templateUrl: 'templates/kPS.html',
        controller: 'kPSCtrl'
      }
    }
  })

  .state('imparaLItaliano', {
    url: '/page38',
    templateUrl: 'templates/imparaLItaliano.html',
    controller: 'imparaLItalianoCtrl'
  })

  .state('learnEnglish', {
    url: '/page44',
    templateUrl: 'templates/learnEnglish.html',
    controller: 'learnEnglishCtrl'
  })

  .state('imparaLItaliano1', {
    url: '/page39',
    templateUrl: 'templates/imparaLItaliano1.html',
    controller: 'imparaLItaliano1Ctrl'
  })

  .state('imparaLItaliano2', {
    url: '/page40',
    templateUrl: 'templates/imparaLItaliano2.html',
    controller: 'imparaLItaliano2Ctrl'
  })

  .state('soluzioni', {
    url: '/page41',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/soluzioni.html',
    controller: 'soluzioniCtrl'
  })

  .state('solutions', {
    url: '/page45',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/solutions.html',
    controller: 'solutionsCtrl'
  })

  .state('soluzioni1', {
    url: '/page42',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/soluzioni1.html',
    controller: 'soluzioni1Ctrl'
  })

  .state('soluzioni2', {
    url: '/page43',
	params: {
		choice1: "",
		choice2: "",
		choice3: "",
		choice4: "",
		choice5: ""		
},
    templateUrl: 'templates/soluzioni2.html',
    controller: 'soluzioni2Ctrl'
  })

$urlRouterProvider.otherwise('/page1/page18')


});