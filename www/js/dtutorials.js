/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('dtutorials', [])

.service('Dtutorials', [function(){
    
    var dtutorials_list = [
        {
          key: '翼下之風1',
          name: '翼下之風',
          description: 'Youtube',
          long_descr: '生命相對論第五輯-1翼下之風，來賓是陳鳳文＆她的女兒劉沁如。陳鳳文分享了如何在失婚之後，走過生命的幽谷，女兒沁如也見證了在這個過程中，家庭和信仰的力量。',
          id: 'https://www.youtube.com/watch?v=5XjBIOLSIa0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT1.JPG?alt=media&token=3c6a0b3a-2cb8-458e-a66a-3649ca5b41b2',
          points: '不是',
          place: ''
        },
         {
          key: '翼下之風1',
          name: '翼下之風',
          description: '生命相對論1',
          long_descr: '生命相對論第五輯-1翼下之風，來賓是陳鳳文＆她的女兒劉沁如。陳鳳文分享了如何在失婚之後，走過生命的幽谷，女兒沁如也見證了在這個過程中，家庭和信仰的力量。',
          id: 'http://video.tudou.com/v/XMzAyMDU4NTk4MA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT8.JPG?alt=media&token=d35e4598-8872-47f0-b9d6-076ad0999bda',
          points: '是',
          place: '陳鳳文＆她的女兒劉沁如'
        },
        {
          key: '愛在千里之外2',
          name: '愛在千里之外',
          description: '生命相對論2',
          long_descr: '光啟社為天主教之聲製作的節目-生命相對論五-1 愛- 在千里之外，由廖惇孟＆高蕾雅分享他們快樂服務，當志工的故事。',
          id: 'https://www.youtube.com/watch?v=AjOLLWX26bM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT2.JPG?alt=media&token=f0dd1207-ed4f-4ed4-a92f-8cd208c378f6',
          points: '不是',
          place: '傘屋漏＆她的女兒鼓勵民'
        },
        {
          key: '一堂生命必修課3',
          name: '一堂生命必修課',
          description: '生命相對論3',
          long_descr: '光啟社為天主教之聲所製作的生命相對論，第五輯中的第3集--一堂生命必修課，由黎建球＆何佳瑞一起來分享，一門值得用一輩子學習的課程--哲學，它其實是很生活化的學問喔！',
          id: 'https://www.youtube.com/watch?v=J0NZNxB0ozM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT3.JPG?alt=media&token=dc854ebd-3828-40df-bdca-471229d68b31',
          points: '不是',
          place: '杜伯仁＆她的女兒劉如心'
        },
        {
          key: '一堂生命必修課3',
          name: '一堂生命必修課',
          description: '生命相對論',
          long_descr: '光啟社為天主教之聲所製作的生命相對論，第五輯中的第3集--一堂生命必修課，由黎建球＆何佳瑞一起來分享，一門值得用一輩子學習的課程--哲學，它其實是很生活化的學問喔！',
          id: 'http://video.tudou.com/v/XMzAyMDA0NzEyNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT21.JPG?alt=media&token=d01989e7-ec3e-4d85-8896-8a0e245de3b8',
          points: '不是',
          place: '陳可容＆她的女兒陸至今'
        },
        {
          key: '生活藝術湧清泉4',
          name: '生活藝術湧清泉',
          description: '生命相對論4',
          long_descr: '生活藝術湧清泉',
          id: 'https://www.youtube.com/watch?v=JWGo8CBkLkE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT4.JPG?alt=media&token=0a243cb2-8612-497c-b4e5-316c14febfff',
          points: '不是',
          place: '陳印度＆她的女兒謝鬱藥'
        },
        {
          key: '為你執一盞燈5',
          name: '為你執一盞燈',
          description: '生命相對論5',
          long_descr: '為你執一盞燈',
          id: 'https://www.youtube.com/watch?v=Mh5-FN2989c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT5.JPG?alt=media&token=2fe56c79-d2ce-4110-98c4-25aa987e8143',
          points: '不是',
          place: '繞敷衍＆她的女兒蔡麗紅'
        },
        {
          key: '手繪生活幸福書6',
          name: '手繪生活幸福書',
          description: '生命相對論6',
          long_descr: '手繪生活幸福書',
          id: 'https://www.youtube.com/watch?v=-N3rex0gk-0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT6.JPG?alt=media&token=40a84a64-479c-4d70-8fef-c9713e114144',
          points: '不是',
          place: '陳文羅＆她的女兒劉掃點'
        },
         
        {
          key: '我們的文化大學7',
          name: '我們的文化大學',
          description: '生命相對論7',
          long_descr: '生命相對論一我們的文化大學',
          id: 'https://www.youtube.com/watch?v=oVmoCgk2Ph0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT7.JPG?alt=media&token=39ff1df5-4038-4054-a77c-7d2c51334972',
          points: '不是',
          place: '陳玲玲＆她的女兒五吳公里'
        },
        {
          key: '剪一段文學光影8',
          name: '剪一段文學光影',
          description: '生命相對論8',
          long_descr:'生命相對論',
          id: 'https://www.youtube.com/watch?v=1ONiEiBiV9U',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT8.JPG?alt=media&token=d35e4598-8872-47f0-b9d6-076ad0999bda',
          points: '不是',
          place: ''
        }
        
      ];
      
      var dtutorials_keys = {};

      for (var i=0;i<dtutorials_list.length;i++){
        dtutorials_keys[dtutorials_list[i].key] = dtutorials_list[i];
      }

    return {
        list: dtutorials_list,
        keys: dtutorials_keys
    }

}]);