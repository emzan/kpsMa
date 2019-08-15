/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('gtutorials', [])

.service('Gtutorials', [function(){
    
    var gtutorials_list = [
        {
          key: 'Otto',
          name: '玉兔鉛筆學校',
          description: '美麗的台灣1',
          long_descr: '當大多數鉛筆工廠都遷往大陸，尋求第二春時，玉兔秉持著"根留台灣" 在宜蘭五結工廠生產鉛筆，並結合觀光，因此2008年開張了「玉兔鉛筆學校」',
          id: 'https://www.youtube.com/watch?v=0mrRiOkx7Hw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FOtto.png?alt=media&token=3a45182a-f1d0-4209-b018-39dfe98cfc4e',
          points: '不是',
          place: ''
        } ,
        {
          key: 'Otto',
          name: '玉兔鉛筆學校',
          description: '美麗的台灣2',
          long_descr: '當大多數鉛筆工廠都遷往大陸，尋求第二春時，玉兔秉持著"根留台灣" 在宜蘭五結工廠生產鉛筆，並結合觀光，因此2008年開張了「玉兔鉛筆學校」',
          id: 'http://video.tudou.com/v/XMzAxMjU0OTYwMA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FPen0.png?alt=media&token=a294c404-aca0-45e3-8a31-449cd192e978',
          points: '不是',
          place: '竹東'
        } ,
         {
          key: 'Due',
          name: '彰化糕餅',
          description: '美麗的台灣3',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=Sk12iqrNNqI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FDue.png?alt=media&token=e6d7c484-f168-41ca-a3ce-aa5cdd8aaa59',
          points: '不是',
          place: '台電大樓'
        },
         {
          key: 'Uno',
          name: '彰化糕餅英',
          description: '美麗的台灣4',
          long_descr: 'Knock off the hearts of all unmarried men and women. French cakes, classic handmade cakes, Mi Yue, New Year products, birthday cakes, tea products, the Ministry of Economic certification of good brands, fashion pastries on behalf of, with her to have happiness!',
          id: 'https://www.youtube.com/watch?v=R6aZRKILCR8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FUno.png?alt=media&token=5fad338b-d28c-4fa3-b196-35ed7ca8fe33',
          points: '不是',
          place: '彰化'
        },
        {
          key: 'Tre',
          name: '襪子娃娃創意傳愛',
          description: '美麗的台灣5',
          long_descr: '從小就喜歡手作的鐘岸惠，五十歲開始投入襪娃娃的創作與教學，善用襪子柔軟 ... 並帶領學員運用手創襪娃進行公益關懷，把愛傳出去，讓襪娃課程開創出全新價值。',
          id: 'https://www.youtube.com/watch?v=5hjrAzD-NtA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FTre.png?alt=media&token=0aba91b8-2c19-4651-971e-1732edad08f2',
          points: '不是',
          place: '台北市'
        },
        {
          key: 'Quattro',
          name: '台灣文學館英',
          description: '美麗的台灣6',
          long_descr: 'To promote Taiwanese literature to the international arena, the National Taiwan Museum of Literature implements the Taiwan literary translation and publication subsidy program, called "Mountain scenery - Contemporary Taiwanese Aboriginal Literary Short Stories" There is also an English version of the publication plan.',
          id: 'https://www.youtube.com/watch?v=kJITS83YMfU',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FQuattro.png?alt=media&token=f467239a-203b-4d58-af23-0a66b67d4bbb',
          points: '不是',
          place: '新竹'
        },
        {
          key: 'Cinque',
          name: '食養山房',
          description: '美麗的台灣7',
          long_descr: '食養山房。 我想每個人吃大餐都有它的理由~ 對於我們來說，通常就是趁著生日慶祝的時候~ 來找個餐廳享受一下! 至於為什麼會選食養山房呢?',
          id: 'https://www.youtube.com/watch?v=gCqmO2JzfaE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FCinque.png?alt=media&token=f2c74a55-9d95-45a5-af79-6ea872dd5c97',
          points: '不是',
          place: '高雄'
        },
        {
          key: 'Sei',
          name: '棲蘭森林國家公園',
          description: '美麗的台灣8',
          long_descr: '設立源由棲蘭森林遊樂區原為森林保育處的一處苗圃，以栽培林木幼苗為主，位於中橫公路宜蘭支線，因林相豐富而開發成森林遊樂區，面積一千七百多公頃。',
          id: 'https://www.youtube.com/watch?v=6K5VjGKx5Ao',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FSei.png?alt=media&token=aa9b393d-0c24-4076-9fc6-f4d093aac454',
          points: '是',
          place: '宜蘭'
        },
        {
          key: 'Sette',
          name: '棲蘭森林國家公園英',
          description: '美麗的台灣9',
          long_descr: 'Qilan National Forest Recreation Area Tourist Map Attractions Introduction: Taiwan Map Tour - Yilan County tourist attractions - Datong Tourism - Qilan National Forest Recreation Area Tourism, and Qilan National Forest Recreation Area Hotel.',
          id: 'https://www.youtube.com/watch?v=GI4E8KLxt0g',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FSette.png?alt=media&token=b73d2324-0aa8-47fc-860d-4e275751ef43',
          points: '不是',
          place: '台東'
        },
        {
          key: 'Nove',
          name: '台灣文學館',
          description: '美麗的台灣10',
          long_descr: '四方通行玩樂地圖以台灣旅遊景點資訊為主的入口網，提供您台灣文學館的景點介紹，與台灣文學館周邊旅遊景點、美食、地圖、住宿、交通、照片資訊，還有最熱門的 ...',
          id: 'https://www.youtube.com/watch?v=x_pXQYWl_oY',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FNove.png?alt=media&token=2bf32a7f-377f-4544-8f08-5dedf5f5b9bf',
          points: '不是',
          place: '嘉義'
        } ,
         {
          key: 'Dieci',
          name: '古琴名家 梓作枋',
          description: '美麗的台灣11',
          long_descr: '2015年起，《琴韻春生》古琴系列音樂會邀請國內多位新生代年輕古琴演奏者同台 ... 先後師從於葛翰聰、吳自英、李鳳雲、劉赤城、李祥霆、王海燕教授等兩岸古琴名家。',
          id: 'https://www.youtube.com/watch?v=wX5uYzJuD7Q',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FDieci.png?alt=media&token=795fea6e-a94f-42c5-8835-ef08202ceb5a',
          points: '不是',
          place: '新北市'
        } ,
        {
          key: 'Undici',
          name: '木雕大師李秉圭',
          description: '美麗的台灣12',
          long_descr: '2012年台灣燈會辦在彰化鹿港，由黑馬鴿舍– 陳清調熟識的友人帶領前往拜訪當地著名的木雕大師--- 李秉圭先生。',
          id: 'https://www.youtube.com/watch?v=jjtV2LyEDHE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FUndici.png?alt=media&token=0e6326e4-9335-48b8-b72f-6499975da658',
          points: '不是',
          place: '北京'
        } ,
        {
          key: 'Dodici',
          name: '雲端防毒',
          description: '美麗的台灣13',
          long_descr: '趨勢科技為資訊安全軟體全球領導廠商，解決方案能為消費者、企業及政府機構提供多層式資料安全防護，涵蓋行動裝置、端點、閘道、伺服器以及雲端。',
          id: 'https://www.youtube.com/watch?v=_StkmCXD5Yw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Taiwan%2FDodici.png?alt=media&token=02f9c4ce-d605-4c24-8637-fab8e389fe01',
          points: '不是',
          place: ''
        } 
       
       
       
      ];
      
      var gtutorials_keys = {};

      for (var i=0;i<gtutorials_list.length;i++){
        gtutorials_keys[gtutorials_list[i].key] = gtutorials_list[i];
      }

    return {
        list: gtutorials_list,
        keys: gtutorials_keys
    }

}]);