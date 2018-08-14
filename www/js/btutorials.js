/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('btutorials', [])

.service('Btutorials', [function(){
    
    var btutorials_list = [
        {
          key: ' 婆婆媽媽19',
          name: '第19集  婆婆媽媽',
          description: '婆婆媽媽',
          id: 'https://www.youtube.com/watch?v=BCvSTsS1Jiw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO1.JPG?alt=media&token=143a3a93-035b-420f-8833-318e97ba55ac',
          points: '不是',
          place: ''
        },
        {
          key: ' 婆婆媽媽19',
          name: '第19集  婆婆媽媽',
          description: '婆婆媽媽19',
          id: 'http://video.tudou.com/v/XMjk5MjE3ODQwOA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2F1B.png?alt=media&token=002c6fe6-d502-4913-80a7-e0798bcc8a9c',
          points: '不是',
          place: '婆婆媽媽'
        },
       
        {
          key: '健康GOGO 10集 醫藥分業',
          name: '健康GOGO 10集 醫藥分業',
          description: '醫藥分業',
          id: 'https://www.youtube.com/watch?v=apLdGWUdiO0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO2.JPG?alt=media&token=fefa47b3-6a74-4d37-8d51-978f171bb50a',
          points: '不是',
          place: '健康GOGO'
        },
        
        {
          key: '健康GOGO 10集 醫藥分業',
          name: '健康GOGO 10集 醫藥分業',
          description: '醫藥分業',
          id: 'http://video.tudou.com/v/XMjk5MjE0MDc4OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2F2B.png?alt=media&token=b4f24d03-1818-426c-b78b-116ca9457c6a',
          points: '不是',
          place: '蔡伯仁健康'
        },
        
        {
          key: '健康GOGO 6集 痛風',
          name: '健康GOGO 6集 痛風',
          description: '健康GOGO 痛風',
          id: 'https://www.youtube.com/watch?v=lm6axoSNL9c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO3.JPG?alt=media&token=026c7d06-b9cd-4627-bccf-a11e77ed56d8',
          points: '不是',
          place: '健康仁GO'
          
        },
         {
          key: '健康GOGO 6集 痛風',
          name: '健康GOGO 6集 痛風',
          description: '健康GOGO',
          id: 'http://v.youku.com/v_show/id_XMjk5MjE4Mjg0OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2F3B.png?alt=media&token=245bfc95-a110-4dae-9e13-87896f090c18',
          points: '不是',
          place: 'GO蔡GO'
          
        },
        
        
        {
          key: '可愛的陌生人 1',
          name: '可愛的陌生人 1',
          description: '可愛的陌生人 1',
          id: 'https://www.youtube.com/watch?v=tUBf3ndBgr0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO4.JPG?alt=media&token=0f3e7433-1276-4804-a489-2691fab1ecf1',
          points: '不是',
          place: 'GO爆米花'
        },
        {
          key: 'PB 爆米花221',
          name: 'PB 爆米花221',
          description: '爆米花',
          id: 'https://www.youtube.com/watch?v=NxCFFeFEqE4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO5.JPG?alt=media&token=866134fa-5b5f-4117-9502-0ffb015560ad',
          points: '不是',
          place: '爆米花221'
        },
         {
          key: 'PB 爆米花221',
          name: 'PB 爆米花221',
          description: '爆米花',
          id: 'http://video.tudou.com/v/XMjk5Mjg1MjA2OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2F221B.png?alt=media&token=13dd1762-9355-40b8-9edf-8947f9082cb3',
          points: '不是',
          place: 'PB 爆'
        },
        {
          key: '注音ㄅㄆㄇ第一集',
          name: '注音ㄅㄆㄇ第一集',
          description: '注音ㄅㄆㄇ第一集',
          id: '5RIuvOGQBmY',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO6.JPG?alt=media&token=9fb005bb-bf89-4926-9a35-465e7c4b99e2',
          points: '不是',
          place: '注音ㄅㄆㄇ第一集'
        },
        {
          key: 'ABC Do Re Mi廣告',
          name: 'ABC Do Re Mi廣告',
          description: 'ABC Do Re Mi',
          id: 'https://www.youtube.com/watch?v=R3GD21CUWPE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO7.JPG?alt=media&token=a7d18d50-9ba7-4e4f-b2e6-bb9c09cc1ef8',
          points: '是',
          place: 'ABC Do Re Mi'
        },
        {
          key: '光啟社 紀錄片',
          name: '光啟社 紀錄片',
          description: '光啟社',
          id: 'https://www.youtube.com/watch?v=fzFVPQ-y48c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO8.JPG?alt=media&token=eb8054c6-b4d6-48d8-9f3e-79280c23da86',
          points: '不是',
          place: ''
        }
       
       
        
      ];
      
      var btutorials_keys = {};

      for (var i=0;i<btutorials_list.length;i++){
        btutorials_keys[btutorials_list[i].key] = btutorials_list[i];
      }

    return {
        list: btutorials_list,
        keys: btutorials_keys
    }

}]);