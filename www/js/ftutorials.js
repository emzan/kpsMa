/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ftutorials', [])

.service('Ftutorials', [function(){
    
    var ftutorials_list = [
         {
          key: 'Castiglione1',
          name: '郎世寧',
          description: '郎世寧紀錄片廣告（英）',
          long_descr: '一位義大利的耶穌會士如何成為中國三朝皇帝的宮廷畫師?郎世寧的故事是東方與西方在藝術文化上激起火花的重要見證，為中國的藝術帶來深遠的影響。他將焦點透視法帶進中國，開創性地將油彩繪於宣紙之上，並由此創造出了一種嶄新的、中西合璧的畫風。他也是用西方元素構建了中國重要建築圓明園的設計師。 在清朝,他是西方文化向中國打開的一扇窗；如今，他成為了溝通中西文化的一座橋。本片從現代的視角出發，再現郎世寧一生的經歷，試圖探尋這位義大利耶穌會士的內心世界，並窺探西方文化與中國文化碰撞、融合的過程。',
          id: 'https://www.youtube.com/watch?v=LUcPCAXnmsc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FCastT3.png?alt=media&token=14035118-5e4a-43eb-9519-7ae1d5f7c379',
          points: '不是',
          place: ''
        },
         {
          key: 'Castiglione2',
          name: '郎世寧拍攝花絮',
          description: '2014郎世寧拍攝花絮',
          long_descr: '2014郎世寧拍攝花絮. The film is produced by Kuangchi Program Service (光啟文教視聽節目服務社) in Taipei in cooperation with Jiangsu TV (江蘇衛視) in Nanjing. The last part of the shoot took place in the huge film studios of Hengdian (浙江省橫店影視城) - which completely rebuilt the Forbidden City in Beijing and Wuxi (無錫國家數字電影產業園) - where the major Chinese film productions are filmed and edited with digital post-production . This has been possible thanks to collaboration between Jiangsu Broadcasting Corporation (江蘇省廣播電視總台) , the biggest television company in China in terms of investment in original drama and third most important Chinese television network. For the ten days of shooting, the film crew included more than 50 people, and everything was filmed with Sony F55 and Epic One Red in 4K format, for more than 20 TB of recorded material. The main actors involved included four emperors ( Kangxi , Yongzheng , a young Qianlong and older Qianlong), six concubines, three eunuchs, various foreign artists including Jean C., French actor who has played the part of Michel Benoist, the architect specialized in the realization of the fountains of the old summer palace in Beijing, and the Martinson brothers (老丁和小丁神父) who represent two other artists in the wake of Castiglione. The main actor, Ashok Zaman, an Australian currently living in Shanghai, who played Castiglione, was chosen last month after a meticulous casting, and said he was honored to interpret the Milanese artist : " I knew nothing of Castiglione - he says - I did not know who he was until the day of casting. It is my first time to act in a historical documentary and I find it extremely fascinating. It is the story of a foreign artist who completely immersed himself in a different culture, at a time when very few foreigners were present in China. Especially when we shot in the studios of Hengdian , where the Imperial Palace in Beijing is rebuilt to scale and of such amazing detail, it helps you to feel completely in context to put yourself in the shoes of an artist who had left Italy forever,not an easy choice, with a great mission in his mind".',
          id: 'https://www.youtube.com/watch?v=_QlZudZuNUg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FCastT1.png?alt=media&token=4e057bd5-8897-4612-adcb-44262f6e106c',
          points: '是',
          place: '郎世寧'
        },
        {
          key: 'AdamSchall3',
          name: '湯若望',
          description: 'YouTube',
          long_descr: '四百年前的東方和西方，彼此是否相識？ 如果彼此相識，那他們的交往曾經達到什麼高度？ 曾產生多少共鳴，抑或是爭論？ 又曾有多少影響深遠的交往遺產？ 而這一切，多多少少都會與他有關。',
          id: 'https://www.youtube.com/watch?v=4qYTejApzsk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FAdamCHT.png?alt=media&token=b642d158-90ae-4591-9618-c0b40d97f8d5',
          points: '不是',
          place: '將麗紅'
        },
        {
          key: 'AdamSchall4',
          name: '湯若望',
          description: '預告片（中）',
          long_descr: '四百年前的東方和西方，彼此是否相識？ 如果彼此相識，那他們的交往曾經達到什麼高度？ 曾產生多少共鳴，抑或是爭論？ 又曾有多少影響深遠的交往遺產？ 而這一切，多多少少都會與他有關。',
          id: 'http://video.tudou.com/v/XMjk5MTc3ODAzMg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FAdamCHT.png?alt=media&token=b642d158-90ae-4591-9618-c0b40d97f8d5',
          points: '不是',
          place: '湯若望'
        },
        {
          key: 'AdamSchall5',
          name: 'Adam Schall von Bell',
          description: 'English trailer',
          long_descr: '450 years ago, East and West were strangers. Their civilizations, so different and mysterious, eyed each other with curiosity and suspicion. How could they achieve understanding?  How could they escape conflict? How did their encounters result in bonds so deep and lasting as to influence the future of their civilizations? Who were those brave and brilliant pioneers who dared to enter the other’s world?',
          id: 'https://www.youtube.com/watch?v=LMcT8McYU8c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FAdamEngT.png?alt=media&token=44539019-94cf-481c-9be7-746b6c1077f6',
          points: '不是',
          place: '吳伯仁'
        },
        {
          key: 'Paul Xu6',
          name: '徐光啟',
          description: '預告片（中）',
          long_descr: '徐光啟  生活在明朝萬曆、崇禎年間（1562年-1633年），是中國近代科學的先驅。在明末清初中西文化第一次正面交流的潮流中，他最早突破中國傳統思想的桎梏，認識到西方科技在天文、數學、農業等諸多科學領域的先進性，並積極加以引進、吸收。因此被譽為中國放眼看世界的第一人。早在四百多年前，徐光啟就為中國種下了近代科學的種子。紀錄片《徐光啟》不僅描繪了徐光啟進取、卓越的一生，也展示了明末清初中西文化剛剛開始對話和交流時的生動場景。通過影像展現中國在近代化十字路口的選擇，本片也為今日的現況、明日的遠景提供了寶貴的借鑒。',
          id: 'https://www.youtube.com/watch?v=lnbaCWOoBrI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FPaulChT.png?alt=media&token=b0a2fa5c-2345-4009-b1bd-0fc9f01bacef',
          points: '不是',
          place: '徐光啟'
        },
        {
          key: 'Paul Xu6',
          name: '徐光啟',
          description: '預告片（中）',
          long_descr: '徐光啟  生活在明朝萬曆、崇禎年間（1562年-1633年），是中國近代科學的先驅。在明末清初中西文化第一次正面交流的潮流中，他最早突破中國傳統思想的桎梏，認識到西方科技在天文、數學、農業等諸多科學領域的先進性，並積極加以引進、吸收。因此被譽為中國放眼看世界的第一人。早在四百多年前，徐光啟就為中國種下了近代科學的種子。紀錄片《徐光啟》不僅描繪了徐光啟進取、卓越的一生，也展示了明末清初中西文化剛剛開始對話和交流時的生動場景。通過影像展現中國在近代化十字路口的選擇，本片也為今日的現況、明日的遠景提供了寶貴的借鑒。',
          id: 'http://video.tudou.com/v/XMjk5MTc2ODczMg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FPaulChT.png?alt=media&token=b0a2fa5c-2345-4009-b1bd-0fc9f01bacef',
          points: '不是',
          place: '利瑪竇'
        },
        {
          key: 'Ricci6',
          name: '教宗和利瑪竇',
          description: '丁神父訪周文義顧問談教宗接見',
          long_descr: '周文義顧問獲教宗於非公開場合中接見，教宗嘉勉光啟社進行的中國大陸媒體福傳工作。亦鼓勵我們進行OH! MY GOD 哈囉教宗節目。感謝教宗! 光啟社當在媒體福傳的道路上戮力以赴，將天主的愛以現代載具分享給大家。',
          id: 'https://www.youtube.com/watch?v=q6DJg56JkMs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FPapa0.png?alt=media&token=8c0e3e79-dbef-410c-b081-8b97b4cdd84b',
          points: '不是',
          place: ''
        } 
       
      ];
      
      var ftutorials_keys = {};

      for (var i=0;i<ftutorials_list.length;i++){
        ftutorials_keys[ftutorials_list[i].key] = ftutorials_list[i];
      }

    return {
        list: ftutorials_list,
        keys: ftutorials_keys
    }

}]);