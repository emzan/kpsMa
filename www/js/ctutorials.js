/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ctutorials', [])

.service('Ctutorials', [function(){
    
    var ctutorials_list = [
        {
          key: '單國璽樞機主教9-1',
          name: '生命告別之旅 9-1',
          description: '當初決定獻身神職的決定過程(1)2007年12月 光啟社製作',
          id: 'https://www.youtube.com/watch?v=NZIIzt0Gr-I',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS1.JPG?alt=media&token=c9b511e1-b7da-4cb0-80a9-c4e6cee41d1d'
        },
        {
          key: '單國璽樞機主教9-2',
          name: '生命告別之旅 9-2',
          description: '當初決定獻身神職的決定過程(2)2007年12月 光啟社製作',
          id: 'https://www.youtube.com/watch?v=zyG3TY2c5Rc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS2.JPG?alt=media&token=c3c5fa89-619b-4f5e-8cc5-3695d98d6880'
        },
        {
          key: '單國璽樞機主教9-3',
          name: '生命告別之旅 9-3',
          description: '在光啟社擔任社長期間,難忘的經驗-2007年12月 光啟社製作',
          id: 'https://www.youtube.com/watch?v=N66XjIh1UUQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS3.JPG?alt=media&token=d520f03d-93dc-4690-9c3f-d6479534f44c'
          
        },
        {
          key: '單國璽樞機主教9-4',
          name: '生命告別之旅 9-4',
          description: '對其他宗教的看法-2007年12月 光啟社製作',
          id: 'https://www.youtube.com/watch?v=9G1MnGnnYoo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS4.JPG?alt=media&token=8a925960-a79e-451f-8d84-b1b852557a2b'
          
        },
        {
          key: '單國璽樞機主教9-5',
          name: '生命告別之旅 9-5',
          description: '面對疾病,如何看待? 如何與癌症相處?',
          id: 'https://www.youtube.com/watch?v=NoFdP2WHYgs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS5.JPG?alt=media&token=73bed6f0-e509-4e95-9ed2-bb092d10e593'
        },
        {
          key: '單國璽樞機主教9-6',
          name: '生命告別之旅 9-6',
          description: '當死亡靠近,如何面對?',
          id: 'https://www.youtube.com/watch?v=yOLDlE7e9Zs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS6.JPG?alt=media&token=e7202941-1fc9-4b0d-b5f8-1babc090186c'
        },
        {
          key: '單國璽樞機主教9-7',
          name: '生命告別之旅 9-7',
          description: '如何感覺天主的存在',
          id: 'https://www.youtube.com/watch?v=MuYTK3c1PM0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS7.JPG?alt=media&token=ee7c7751-1323-498a-b02c-73e77ab3b564'
        },
        {
          key: '單國璽樞機主教9-8',
          name: '生命告別之旅 9-8',
          description: '教會如何看待離婚,再婚,墮胎,同性戀等社會議題',
          id: 'https://www.youtube.com/watch?v=SlmOov90b_k',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS8.JPG?alt=media&token=2a82e2a2-a506-44d1-a137-529a6569c093'
        },
         {
          key: '單國璽樞機主教9-9',
          name: '生命告別之旅 9-9',
          description: '對要求讓女性擔任司鐸的回應-2007年12月 光啟社製作',
          id: 'https://www.youtube.com/watch?v=tVXrV_U4gXs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CardShan%2FCS9.JPG?alt=media&token=2fa0ab3f-326a-43b4-82b8-b2651428bc83'
        }
       
       
        
      ];
      
      var ctutorials_keys = {};

      for (var i=0;i<ctutorials_list.length;i++){
        ctutorials_keys[ctutorials_list[i].key] = ctutorials_list[i];
      }

    return {
        list: ctutorials_list,
        keys: ctutorials_keys
    }

}]);