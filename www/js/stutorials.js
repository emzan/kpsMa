/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('stutorials', [])

.service('Stutorials', [function(){
    
    var stutorials_list = [
       
      
         {      
        key:'1大朋友的分享',
        name:'E01 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
        id: 'http://video.tudou.com/v/XMzAxODQ0NjgzMg',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA1C.JPG?alt=media&token=7f677e52-ff9c-4274-ab00-7ec3f24dd3ad',
        points: '不是',
          place: ''
        },
         {      
        key:'E02 大朋友的分享',
        name:'E02 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
        id: 'http://video.tudou.com/v/XMzAxODQ0ODQzNg',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA2C.JPG?alt=media&token=3bf31057-a1d4-46fb-ab69-c467f0b36b48',
        points: '不是',
          place: '陳質采'
        },
        {      
        key:'3大朋友的分享',
        name:'E03 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
        id: 'http://video.tudou.com/v/XMzAxODQ0NzM1Ng',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA3C.JPG?alt=media&token=97b06b46-ed90-4ef4-8a00-ded587a0f0be',
        points: '是',
          place: '丁松筠'
        },
        {      
        key:'4大朋友的分享',
        name:'E04 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
        id: 'http://video.tudou.com/v/XMzAxODQ0ODcyMA',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA4C.JPG?alt=media&token=dd2fd061-838c-4260-9cdb-06f88e3e2e52',
         points: '不是',
          place: '嚴淑女'
        },
        {      
        key:'E05 大朋友的分享',
        name:'E05 大朋友的分享',
        description: '靴子裡的大世界',
       long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
        id: 'http://video.tudou.com/v/XMzAxODQ0ODA2NA',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA5C.JPG?alt=media&token=44ec074d-bb91-4143-b966-7af0a972aa5c',
        points: '不是',
          place: '林書煒'
        },
        {      
        key:'8大朋友的分享',
        name:'E8 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
        id: 'http://video.tudou.com/v/XMzAxODQ0NDA1Ng',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA8C.JPG?alt=media&token=d9a04c0a-b0df-4ff0-a394-ff17d3fba22c',
         points: '不是',
          place: '范可欽'
        },
        {      
        key:'9大朋友的分享',
        name:'E9 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
        id: 'http://video.tudou.com/v/XMzAxODQ0MTc1Mg',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA9C.JPG?alt=media&token=5ff8a498-f068-4c0e-a1f1-c25fcc44801c',
         points: '不是',
          place: '洪成昌'
        },
         {      
        key:'10大朋友的分享',
        name:'E10 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
        id: 'http://video.tudou.com/v/XMzAxODQ0NDkxMg',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE10.JPG?alt=media&token=db6657ed-b7a2-4d0e-9a47-83ddec0fef53',
         points: '不是',
          place: '歐晉德'
        },
         {      
        key:'12大朋友的分享',
        name:'E12 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
        id: 'http://video.tudou.com/v/XMzAxODQ0MzI3Ng',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE12.JPG?alt=media&token=c58f8e49-b32d-4bdc-b74b-c049288b28fd',
         points: '不是',
          place: '蔡幸珍'
        },
        {      
        key:'E13 大朋友的分享',
        name:'E13 大朋友的分享',
        description: '靴子裡的大世界',
        long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
        id: 'http://video.tudou.com/v/XMzAxODQ0MDY4OA',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE13.JPG?alt=media&token=f1e481cd-17a8-4813-9efc-8ea343e73767',
        points: '不是',
          place: ''
        }
       
        
      ];
      
      var stutorials_keys = {};

      for (var i=0;i<stutorials_list.length;i++){
        stutorials_keys[stutorials_list[i].key] = stutorials_list[i];
      }

    return {
        list: stutorials_list,
        keys: stutorials_keys
    }

}]);