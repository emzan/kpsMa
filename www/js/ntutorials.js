/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ntutorials', [])

.service('Ntutorials', [function(){
    
    var ntutorials_list = [
        {
          key: '遠洋鮪釣台灣之光',
          name: '第001集 遠洋鮪釣 台灣之光',
          descr:'這一集mijung就要帶大家',
          description: '台灣的遠洋漁業在世界上非常著名，尤其是台灣的遠洋鮪釣漁業更是威楊國際喔！想知道台灣的遠洋鮪釣漁業有多厲害嗎？這一集mijung就要帶大家一塊去認識台灣的漁業之光-遠洋鮪釣漁業的故事。',
          id: 'https://www.youtube.com/watch?v=2tqrp4qOWkI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z1.JPG?alt=media&token=e3fe4308-7064-4c74-9a07-99d42952f1d3',
          points: '不',
          place: ''
        },
        {
          key: '屏東黑鮪 觀光趣',
          name: '第002集 屏東黑鮪 觀光趣',
          descr:'究竟黑鮪魚有多好吃',
          description: '說到屏東的東港，我們絕對不能錯過的就是東港的三寶-黑鮪魚、櫻花蝦、油魚子。在每年四月上旬一直到七月初的時候，是屏東東港舉辦”屏東黑鮪魚文化觀光季的重要日子喔！究竟黑鮪魚有多好吃，黑鮪魚文化觀光季有多好玩呢？大家不要錯過精彩的節目內容囉！',
          id: 'https://www.youtube.com/watch?v=drOdgV-kZe0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z2.JPG?alt=media&token=621e380f-eb85-48c9-aa20-8dab74a6016e',
          points: '不是',
          place: '高叔良'
        },
        {
          key: '屏東黑鮪 觀光趣',
          name: '第002集 屏東黑鮪 觀光趣',
          descr:'究竟黑鮪魚有多好吃',
          description: '說到屏東的東港，我們絕對不能錯過的就是東港的三寶-黑鮪魚、櫻花蝦、油魚子。在每年四月上旬一直到七月初的時候，是屏東東港舉辦”屏東黑鮪魚文化觀光季的重要日子喔！究竟黑鮪魚有多好吃，黑鮪魚文化觀光季有多好玩呢？大家不要錯過精彩的節目內容囉！',
          id: 'http://video.tudou.com/v/XMjk5NDUxNjM3Mg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z36.JPG?alt=media&token=bc35b1f0-1eab-4881-83b0-c9ee5a72eb97',
          points: '不是',
          place: '吳立叔'
        },
        {
          key: '好客漁港 永安遊',
          name: '第003集 好客漁港 永安遊',
          descr:'我們來到了桃園',
          description: '這一集的台灣漁鄉走透透，我們來到了桃園。桃園沿海一帶有著非常多豐富的海洋生態景觀，每到假日總會吸引大批的觀光人潮喔。想和mijung一塊體驗桃園漁鄉的魅力嗎？我們現在就一塊出發去囉！',
          id: 'https://www.youtube.com/watch?v=9UK5zGNWz7w',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z3.JPG?alt=media&token=b1711f2c-6572-40dc-9c6f-88821090fe8f',
          points: '不是',
          place: '鄭詩祥'
        },
         {
          key: '好客漁港 永安遊',
          name: '第003集 好客漁港 永安遊',
          descr:'我們來到了桃園',
          description: '這一集的台灣漁鄉走透透，我們來到了桃園。桃園沿海一帶有著非常多豐富的海洋生態景觀，每到假日總會吸引大批的觀光人潮喔。想和mijung一塊體驗桃園漁鄉的魅力嗎？我們現在就一塊出發去囉！',
          id: 'http://video.tudou.com/v/XMjk5NDU1MTU0OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z39.JPG?alt=media&token=c2684ac4-e066-4e58-9e65-1c1c7dfb1bdf',
          points: '不是',
          place: '陳廷叔'
        },
        {
          key: '海角一樂園 驚艷貢寮',
          name: '第004集 海角一樂園 驚艷貢寮',
          descr:'我們來到了位在東北海岸的貢寮',
          description: '這一集的台灣漁鄉之旅，我們來到了位在東北海岸的貢寮。說到了貢寮，大家想到的會是貢寮的海洋文化音樂祭，還是福隆的海水浴場呢？其實在貢寮這邊還有許多在地的漁業文化。現在就跟著mijung一塊去探索囉！',
          id: 'https://www.youtube.com/watch?v=emPHOY3j76U',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z4.JPG?alt=media&token=ab0289ad-3239-460c-91ae-64c04b7778c6',
          points: '不是',
          place: '鄭家樂'
        },
        {
          key: '海角一樂園 驚艷貢寮',
          name: '第004集 海角一樂園 驚艷貢寮',
          descr:'我們來到了位在東北海岸的貢寮',
          description: '這一集的台灣漁鄉之旅，我們來到了位在東北海岸的貢寮。說到了貢寮，大家想到的會是貢寮的海洋文化音樂祭，還是福隆的海水浴場呢？其實在貢寮這邊還有許多在地的漁業文化。現在就跟著mijung一塊去探索囉！',
          id: 'http://v.youku.com/v_show/id_XMjk5NDg2MzIyOA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z8.JPG?alt=media&token=6aac87d7-f3a2-49ce-8c60-dfad66c0f391',
          points: '不是',
          place: '陳瑞士'
        },
        {
          key: '美麗海洋 豐鱙之鄉',
          name: '第005集 美麗海洋 豐鱙之鄉',
          descr:'屏東枋寮漁港',
          description: '屏東枋寮漁港，漁產豐富，其中最著名的就是魩仔魚產業，是全台灣魩仔魚生產處的兩處之一。素有北頭城，南枋寮的稱號。現在就跟著mijung的腳步一塊來認識聞名全台的魩仔魚產業囉！',
          id: 'https://www.youtube.com/watch?v=ufSRScy39PI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z5.JPG?alt=media&token=9c034bb2-68bd-48b6-a465-e110d8eb6cfa',
          points: '不是',
          place: '陳麗紅'
        },
         {
          key: '美麗海洋 豐鱙之鄉',
          name: '第005集 美麗海洋 豐鱙之鄉',
          descr:'屏東枋寮漁港',
          description: '屏東枋寮漁港，漁產豐富，其中最著名的就是魩仔魚產業，是全台灣魩仔魚生產處的兩處之一。素有北頭城，南枋寮的稱號。現在就跟著mijung的腳步一塊來認識聞名全台的魩仔魚產業囉！',
          id: 'http://video.tudou.com/v/XMjk5NDY4Mjg0OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z9.JPG?alt=media&token=17a568c1-63cd-4afc-909d-ef2f46ba39cc',
          points: '是',
          place: 'mijung'
        },
        {
          key: '山城 海洋 好美栗',
          name: '第006集 山城 海洋 好美栗',
          descr:'我們來到了中台灣的苗栗',
          description: '這一集的台灣漁鄉走透透，我們來到了中台灣的苗栗。除了要帶大家體驗海釣的樂趣之外呢，我們還要走進時光隧道裡，一塊去體驗早期漁民捕魚的智慧喔！另外呢我們還要出海，一塊去體驗漁民捕魚的辛苦。大家準備好了嗎？我們現在就出發囉！',
          id: 'https://www.youtube.com/watch?v=cRTtyZvQmAc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z6.JPG?alt=media&token=c291bcf4-3b73-4e83-883d-e8e6e89ee600',
          points: '不是',
          place: '高金聲'
        },
        {
          key: '南島 海洋 飛魚行',
          name: '第007集 南島 海洋 飛魚行',
          descr:'豐富的海洋資源',
          description: '屏東的恆春擁有獨特的南島風情，豐富的海洋資源，以級獨特的海洋景觀，是民眾親海和賞海的最佳去處。現在就跟著mijung一塊出發去囉！',
          id: "https://www.youtube.com/watch?v=O8AIN7n8rHk",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z7.JPG?alt=media&token=bc5602a2-9547-4c53-b379-20583960b26d',
          points: '不是',
          place: ''
        }
       
       
      ];
      
      var ntutorials_keys = {};

      for (var i=0;i<ntutorials_list.length;i++){
        ntutorials_keys[ntutorials_list[i].key] = ntutorials_list[i];
      }

    return {
        list: ntutorials_list,
        keys: ntutorials_keys
    }

}]);