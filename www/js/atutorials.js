/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('atutorials', [])

.service('Atutorials', [function(){
    
    var atutorials_list = [
        {
          key: '林陳玉里1',
          cat: '藝術',
          name: '林陳玉里',
          pre: '林陳玉里姐妹在「蘭陽舞蹈團」幕後服務已經超過42年',
          description: '剛開始接觸「蘭陽」是因為最小的女兒美紅想要學習舞蹈，經親朋熱心介紹到祕神父創立的「蘭陽舞蹈團」學舞，她觀察到神父會親自開車接送小孩學習，體貼照顧小孩，遂懷抱著感恩的心情到舞團幫忙做些雜事。',
          descr1:' 後來慢慢學習女紅及設計，越幫越多，爾後專門負責舞團整理、修改、製作舞衣、頭飾、道具、佈景、團體伙食，成為舞團大家庭靈魂人物。',
          descr2:'她花了許多功夫，摸索設計適合舞者經常伸展、劈腿、迴轉、跳躍大動作，吸汗、舒適性符合人體工學的舞衣，為了完美呈現及節省經費，奔波在羅東台北迪化街之間，構思設計製作表演所需材料，出國表演時隨團照顧小舞者，安撫情緒、準備伙食補充營養，每當表演完，還要整理舞衣道具、幫忙扛行李箱，最近十幾年她還負責聖誕節馬槽的設計及製作。',
          descr3:'真是十八般武藝都會。 印象最深刻就是第一次出國，1974年隨團到梵蒂岡晉見教宗為教宗表演並在祕神父故鄉義大利各大城巡演，爾後曾隨團到南美洲阿根廷、巴西、祕魯、哥倫比亞、烏拉圭、薩爾瓦多，然後是美國加拿大澳洲等地。如果沒有祕神父，這些偏鄉清寒小孩子可能沒機會學習舞蹈，更不可能出國表演、開闊眼界。更重要的是，神父幫許多小朋友圓夢、認識自我，發展才藝！ 她非常感恩祕神父的無私服務及身教言教，她也效法神父懷著喜悅、感恩的心情默默地做。當她看到小孩子在舞台上完美的演出，學成後在藝術界、舞蹈界有傑出表現，她覺得一切辛苦都值得。而且工作了42年她還樂此不疲地以感恩的態度工作。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN%E4%BD%99%E9%99%B3%E7%8E%89%E9%87%8C1.JPG?alt=media&token=846a8762-c9e1-4fee-b161-1c163033ce3a',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T%E4%BD%99%E9%99%B3%E7%8E%89%E9%87%8C1.JPG?alt=media&token=a301c4f7-3669-4db4-b068-b72bb01100b1'
        },
        {
          key: '王漪2',
          cat: '教育',
          name: '王漪',
          pre: '珍惜上主給的召叫，生命教育的耕耘者',
          description: '王老師說：「學校是一個相當龐大的群體，學生，教職員工，家長校友，所以，學校辦得好，會是社會一股強大的正向力量，負責教育工作的人，被上天放在這個位置上，該是多麼珍惜這個使命啊！」 王漪老師屏東人，父親是天主教友，大學教授，母親是高中老師，自幼受西班牙道明會修女慕道班啟蒙，國一時領洗堅證。',
          descr1:'資質聰穎，屏東女中畢業後，順利考上師大歷史系，後繼續師大研究所，大學時過耕莘文教院活動對耶穌會印象深刻，碩士論文遂以耶穌會士對中西文化交流的影響為主題，學業一帆風順，順利畢業。 ',
          descr2:' 在民國66-89年在光啟社服務，負責企劃，寫過無數有關文教、社教、宗教生命教育企劃，曾為教育部製作「人格教育養成視聽教材」。',
          descr3:'她記得那是光啟社節目主導三家電視黃金時段的光輝時期，非常感恩能和許多和藹可親的神父修士及同事共事打過美好的一戰。 民國90年轉換跑道，任職聖心女中生命教育中心，精心設計「心靈有約」單元課程，幫助青少年及家長培養認識自己、關懷他人及探求世界的能力。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN2AAA.JPG?alt=media&token=e1b21a75-8795-4c26-995e-0db139af5f80',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T2AAA.JPG?alt=media&token=ba3d4ebf-ebb7-4390-8c99-0bfa665da1fa'
        },
        {
          key: '陳鳳文3',
          cat: '音樂',
          name: '陳鳳文',
          pre: '一半的時間奉獻給教會，一半的時間奉獻給音樂',
          description: '事業成功的陳鳳文積極從事慈善事業，幫助海峽兩岸弱勢團體 。其資助推廣的Vocal Asia Festival，已經是全亞洲規模最大的阿卡貝拉藝術節, 每年在亞洲各城市舉行,引領阿卡貝拉真善美風潮',
          descr1:'',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN3.JPG?alt=media&token=2c9b9e9b-aee4-4dcb-b610-67d62759a0e2',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E9%99%B3%E9%B3%B3%E6%96%87.JPG?alt=media&token=78fb4565-acb1-4113-baa2-37c0eed5dcef'
          
        },
        {
          key: '黃佳音4',
          cat: '牧靈',
          name: '黃佳音',
          pre: '年輕學子的好姐妹',
          description: '她是年輕學子的好姐妹 佳音姐妹經常 參加教會活動 、帶領青年團契， 熱心參與善會服務 、並應用所學外語翻譯專長， 義務翻譯教會及 教宗方濟各新聞及文章。',
          descr1:'她服務於文藻大學牧靈室，是年輕學子的好姐妹。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN4AAA.JPG?alt=media&token=a112d939-f79f-4c66-b2d8-e0cdc3000508',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/N4TTT.JPG?alt=media&token=5a389904-2d3d-460c-9820-f32ad7160eff'
          
        },
        {
          key: '呂薇5',
          cat: '社福',
          name: '呂薇',
          pre: '弱勢著的白衣天使',
          description: '呂薇(LOEWE MARIANELDIS)1931年出生於德國，13歲時受到感召決定要獻身宗教，認真學習護理工作，立志幫助身心受傷的人們。',
          descr1:'自1961來台先後在新竹、基隆、嘉義診所服務、探訪病患及關懷貧苦家庭，特別是孤苦無依的老弱婦孺等。1989-2000在輔大女生宿社，照顧學生牧靈工作。',
          descr2:'一頭白髮的呂薇，現年已經85歲，總像個慈母用耐心與愛心待人。 2000年退休。但呂薇退而不休， 在 仁愛修女會完成階段性的任務後，傳承慈悲的火炬，接手服務露德基金會，不離不棄的陪伴著受愛滋病毒影響的病友，提供溫暖、接納的社區照顧服務 ，並在新竹監獄、新竹看守所、桃園監獄服務。',
          descr3:'她也在台北監獄陪伴受愛滋病感染的收容者，提供情緒支持、愛滋諮詢、資源連結等服務，幫助愛滋收容人找回自信。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN5.JPG?alt=media&token=2edcdf0d-f05d-495c-99b1-b399d835cc13',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T5.png?alt=media&token=c39bf98b-5e4b-4809-83cb-dc305bb1b32e'
        },
        {
          key: '陳紫美6',
          cat: '藝術',
          name: '陳紫美',
          pre: '提倡「健康美學的力量」',
          description: '「積極的思想，決定生命的價值」 個人歷經生離死別的921地震，從商時曾是納莉颱風的受災戶，廚房倉庫淹水，也力挽SARS流行病狂瀾，生意門可羅雀，美食家陳紫美依靠上主，有著樂觀的態度，讓她重新開始。效法耶穌給了祂的門徒麵包和酒，代表祂的身體和靈魂，我意識到我們準備食物, 在做天主的工作。',
          descr1:'當人們以一個精緻的方式去吃、喝，他們很高興，並開放地去接受耶穌和天主的愛。',
          descr2:'她積極推行健康美學，慢活美食、帶領大家，把三餐的『色香味基本面』顧好，提升生活品質。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN6.JPG?alt=media&token=e4b3322e-391b-4c52-9c4e-3b56d3f6bb31',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T6a.JPG?alt=media&token=a71e0c61-4240-47f9-b16f-13219d143575'
        },
        {
          key: '游佳穆7',
          cat: '教育',
          name: '游佳穆',
          pre: '與學生一起生活的老師',
          description: '「與學生一起生活的人」（Men with others） 內思工校教師遊佳穆執教23年，他經常犧牲周末假期常為學生補席功課。 他的生活並非如表面上平靜，他說：「二OO九年我經歷了一段中年危機，疲憊、壓抑令我幾乎辭職。我失去了精力和動力，這是我從未經歷過的。',
          descr1:'我求助過心理醫生，妻子和孩子也給我做後盾。但是，我仍然感覺到還需要其它的」。 一個機緣改變了他的命運。他說有一天：「莊修女和在生命教育中心工作過的兩名年輕教師邀請我，周末和我們的學生團體去避靜反思。那正是一個喘息的機會，避靜後開始了變化、我的生命之火重新點燃了。',
          descr2:'特別感謝台北的一名年輕司鐸--他應邀帶領我們避靜，讓我發現了真正喜樂的秘密，也就是來自天主之愛、福音的喜樂」 那段與上主相遇的經歷，徹底改變了遊佳穆的思路和觀點。回憶這段時間時，他說：「以後的那些週末裡我常常和學校的神父和同事及家人交談分享、那幾個星期裡妻子可能以為我有了幻覺，在大馬士革的路上被閃電擊中了"。 接著，美好的事情發生了，我從只會擔心自己，改變到常為別人設想。',
          descr3:'特別是為我的學生們。在讀福音、參與學校的清晨彌撒時，我會問自己：「耶穌會怎樣幫助這些學生呢？祂會對他們說什麼？我的頭腦中總是閃耀著希望之光，而不是壓抑和迷茫了」 在那時有股強烈動機，我要學習教義、要領洗。莊修女始終耐心地伴隨了我的這段漫長歷程，還有學校裡的其他教友老師，包括校長在內。最後，終於到了領洗的那個主日，和五名慕道者一起領洗。我身高一米九四，神父不得不踏上一個板凳給我傅洗"。 游老師表示：「，耶穌和普通漁民一起生活，我已經在內思這所出色的學校裡教書。我們的內思高工始創於六十多年前、學生地處邊遠小城。我充分認識到原來自己的使命，是幫助這些沒有機會到城市去讀書的孩子，像耶穌那樣：給那些看上去沒有優勢的人一個機會。我為此感謝天主安排、感謝使我認識天主的人"。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN7.JPG?alt=media&token=4ed24eb0-e3c0-4596-8225-4d84502cd152',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/YJMTJPG.JPG?alt=media&token=40d52abe-bf30-4220-84be-aa653377b76f'
        },
        {
          key: '歐陽台英8',
          cat: '教育',
          name: '歐陽台英',
          pre: '關懷為本',
          description: '小時候活潑、好動不愛讀書，高中就讀天主教曉明女中，是其第一屆校友，回憶起青澀叛逆歲月，總是浮現當時大興土木、操場單調蒼涼、但是滾滾黃沙中，總會鮮明地出現恩師們慈祥關懷的身影及風趣的教誨。事隔50年，天主教校園內師長們對學生們亦師、亦友的溫馨關懷，仍深烙在她的心田。因此在校長任內，她更積極鼓勵老師自修培養第二專長，善用數位智慧教室教學，積極提升學生閱讀、理解、彙整、分析、表達及解決問題的能力。又結合校友會、家長會及地方社團的力量，讓學生在升學或是就業都有成功案例可詢及學長們殷勤指點。又積極締結辦學優良海外高中姊妹校及大學策略聯盟，拓展教學資源、提昇學生視野。',
          descr1:' 這份灑在心田的關懷種子，逐漸發芽成長，讓她理性樂觀的思維下，慢慢滋生著對年輕學子及弱勢族群關懷的念頭。高中畢業後，據她客氣地說：「數學選擇題猜對很多，讓她僥倖地考上輔仁大學企管系」，又繼續在天主教溫馨風氣的校園求學，並受教於許多有學者、大師風範的神父、及亦師亦友的活潑修士門下，讓她感覺倍受恩寵。 大學畢業後在外商公司服務，那是台灣工業起飛的時代，低廉的工資造就許多代工外銷工廠，需要大量的裝配員，她觀察到許多年輕的女孩，國小或是國中畢業便在工廠工作、拼命地加班賺錢、分擔家計讓他們的弟妹能升學，反而工廠及原生家庭漠視他們的福利。她便經常為同事們爭取權利，在一次女同事因車禍遇難的悲劇後，她目睹這位平常省吃儉用上進的同事，雖然長期白天上班、晚上上課，一旦過世，其家境清寒到竟然無法為其舉辦像樣的後事，讓她感慨萬千、便決定離開工廠傷心地，在徵得父親同意，離開待遇頗豐的商界，回學校教書以便能就近幫助這些弱勢上進的孩子、做更有意義的事工。 ',
          descr2:'也許天主聽到她內心的祈禱，民國65年剛好靜修女中商科夜間部有一教職空缺，正適合她的學經歷，她便積極爭取，回到天主的大家庭，而且就是服務、教導弱勢半工半讀的莘莘學。因為在加工廠的經歷，她更能體會夜校生的辛酸，她會以大姊姊班導的身份營造一快樂的學習環境，主動地關心學生，為他們解決身心靈問題，因此師生關係非常密切，許多她的學生畢業後，還時常保持聯繫、經常聚會。從此她便一步一腳印從基層導師、組長、慢慢升遷到教務主任、輔導主任、總務主任、在職進修取得碩士學位然後、成為開校來第一位平信徒校長。 在不同的教育及行政崗位服務，她始終稟持主動關懷學生的精神、以身教及言教聯合老師及職員工培養學生感恩、惜物、分享、積極、造福、積德的品性。她瞭解品德養成、適性發展的全人教育遠比冰冷的聯考成績重要。',
          descr3:'因此靜修實至名歸、可以連年獲得台北市教育局評選「校長領導」、「校園營造」、「學生學習」、「學習文化」等殊榮。 退休後一切㶷爛歸於平淡，她安於平淡並一肩挑起重擔、照顧因車禍長年臥病在床的先生，無怨無悔，就像她之前全心全力照顧靜修師生一樣。這是份甜蜜的負擔，她內心平安，她深信上主會給我們一片天，正如她經常哼唱的西洋老歌“Everything is beautiful ”，她硬朗的身影始終洋溢著慈祥、堅忍、樂觀的神韻。 Everything is beautiful in its own way. Like the starry summer night, or a snow covered winter day. And everybody is beautiful in their own way. Under God heaven, the world is gonna find the way',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN8.JPG?alt=media&token=e60a3be0-d0d2-4dea-928f-34416f5caec0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E6%AD%90%E9%99%BD%E5%8F%B0%E8%8B%B1.JPG?alt=media&token=7a446cb8-fec3-46d5-a179-50c29db53ead'
        },
        {
          key: '王年燦9',
          cat: '教育',
          name: '王年燦',
          pre: '凡勞苦和負重擔的，你們到我跟前來，我要使你們安息',
          description: '為了更上一層樓，王教授捨棄穩定的工作，賣了房子，帶家人到英國留學，但是計畫趕不上變化，經歷了艱苦的學習和工作，才取得多媒體電腦設計博士學位。',
          descr1:'回台後重新開始，他說「"我的生活發生了翻天覆地的變化：我當時有很大的經濟壓力，但各種問題都因為信仰耶穌，呼求祂的恩賜，使我有了新的力量和靈感，面對許多困難，祂給了我光明、改變了一切"」工作和家庭重新穩定後，他重回教會懷抱，在聖家堂上慕道班，領洗後加入「源遠基督生活團」，積極參加教會活動，和教友及學生分工服務、共同幫助弱小兄弟。',
          descr2:'學生們也感受出他領洗後的變化，變得更有耐心、熱心指導學生」他現在變成最受學生歡迎的老師。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN9.JPG?alt=media&token=fe6c7626-c213-449e-8bd8-eadca02ab7c3',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E7%8E%8B%E5%B9%B4%E7%87%A6.JPG?alt=media&token=a6e9b673-0055-4b04-9b56-5bdc72f3c149'
        },
        {
          key: '黃貞瑪10',
          cat: '福傳',
          name: '黃貞瑪',
          pre: '「神父和父親殷勤傳教的身影是心中最美的風景」',
          description: '貞瑪姐妹台灣嘉義新港人， 父親是天主教傳教員先後跟著蒲敏道神父、葉由根神父一起傳教， 因為父親的見證祖父母、叔叔、姑姑及兄弟姐妹陸續受洗，她一出生就受洗，父親以聖名為她命名，他以聖名為榮！神父們刻苦耐勞、縫縫補補的長袍，為教友服務的身影常印在腦海裡，父親早出晚歸跟著神父們外出傳教或是在教堂幫忙，只有在晚餐時，父親才回家分享一天傳福音的心得，父親祈禱時總是提起感恩、感謝，也令她印象深刻，當時她默默的許願：將來要像神父和父親一樣積極傳福音，為天主服務，還一度有當神父的念頭，可惜身為女兒身。',
          descr1:'婚姻也是一種聖召，在先生及家人的支持下，她經常率團在教會做義工，協助善會募款、定期到養老院、醫院探訪牧靈福傳，二十年如一日，她的態度親切和藹謙遜、做事充滿熱情活力效率，許多病友受她誠懇言行感召紛紛來聽募道受洗，她源源不斷的活力來自每天的祈禱、呼喊上主的眷顧，變做上主的僕人，像她的父親一樣，對上主的安排，她非常感恩。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FGEMMA.JPG?alt=media&token=ddff3c39-6790-4782-81ba-7fd3eabf59df',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T10.JPG?alt=media&token=3dc5e339-eed0-42e8-bdf4-66ac0f18b51b'
        },
        {
          key: '蘇山石11',
          cat: '新移民福利',
          name: '蘇山石',
          pre: '天主教會新竹教區附屬希望職工中心',
          description: '蘇山石主任，服務於天主教中壢希望職工中心服務項目包括：處理外勞與僱主的勞資爭議生活輔導、教育勞工權益與健康知識新移民子女跨文化社團設有庇護所，收容照顧遭受職場虐待或等待轉換僱主之外勞',
          descr1:'',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FM1.JPG?alt=media&token=4216c18b-66cd-4e01-8a38-507ce8fdfcae',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E8%98%87%E5%B1%B1%E7%9F%B3.JPG?alt=media&token=78e67ed0-9c66-447d-83b0-9aec03ce4ba3'
        },
        {
          key: '狄若石12',
          cat: '牧靈',
          name: '狄若石',
          pre: '多才多藝的修道人',
          description: '狄若石修士 Bro. José María Díez狄修士西班牙人生於1933年，家人信德虔誠，有位叔叔是修士、一位舅舅是神父。因父親早逝、他16歲就繼承父業，經營家族麵包店，19歲決定入修院當修士，母親及家人非常支持。他在西班牙完成修士培育教育，專精護理及牙科，他也學習過烹飪、園藝、建築設計，是個文武兼備的通才，畢業後他在天主教一所大學服務任校護，非常滿足他的聖召。',
          descr1:'1968他奉派來台，先學中文然後陸續到徐匯中學及內思工校服務，任職校護及舍監，他還幫內思規劃了花園。現在內思蒼鬱的大樹，都是他年輕時種植的。',
          descr2:'1983年他開始肩負起照顧退修老神父的重擔，前五年先在台中，1988搬遷到輔大頤福園，熟悉病人需求的狄修士，也參與頤福園規劃與設計，整座建築寬敞大氣，明亮通風，擺設高雅，花木扶疏，適合神父安養。',
          descr3:'在台服務近50年，他早已視台灣為家，現在已經高齡83歲，身體難免有些病痛，仍然閒不住，想繼續照顧病人，他深感助人為快樂之本，感謝天主的安排。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN12B.JPG?alt=media&token=67e5fa9b-0132-461d-9f84-f6cd445cd572',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T12A.JPG?alt=media&token=5efef410-6b2e-4b72-8e06-63c5268b95ee'
        },
        {
          key: '何華珍13',
          cat: '社福',
          name: '何華珍',
          pre: '照顧老人與小孩的白衣天使',
          description: '從26歲到80歲，何華珍修女都在台灣從事醫療服務，以所學專業照顧弱勢，自1960年即來臺灣，從照顧早產兒到陪伴失智症老人，逾半世紀無怨無悔無私的奉獻，何修女不諱言「真的很不簡單」。',
          descr1:'照顧失智老人的辛苦，有不少護士在第一個月就打了退堂鼓，何華珍說，能留下來的，不是為了錢，而是為了愛。',
          descr2:'比利時聖母聖心會修女何華珍剛來台灣時，只有廿六歲，是照顧早產兒的護士；早期台灣經濟條件差，很多家庭養不起早產的孩子，就把早產兒帶到修女會成立的聖若瑟醫院，修女們曾經同時照顧過200多個小嬰兒，保溫箱不夠用是常有的事。',
          descr3:'她也曾參與永和耕莘醫院等醫院的創立，並在兒科病房、檢查室擔任護士服務20年，直到2004年退而不休，又開始幫助照顧失智老人，老人服務老人。 她稟持愛心與耐心，在服務超過半世紀後，一直到80幾歲才因體力不繼、為了不麻煩別人，才兩袖清風離開第二故鄉台灣，依依不捨地回比利時總會退修。她還是心繫台灣與台灣人….',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN13.JPG?alt=media&token=9101b327-d1b1-4722-a969-54550896939c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E4%BD%95%E8%8F%AF%E7%8F%8D.JPG?alt=media&token=19623ef4-9d44-47c1-9c07-3910582dd11a'
        },
       {
          key: '蘇開儀14',
          cat: '音樂',
          name: '蘇開儀',
          pre: '禮儀歌曲作者及教會音樂家',
          description: '蘇開儀姐妹在奧地利完成教會音樂學位後， 開始積極創作禮儀歌曲，和宗教音樂。其作曲、著作等身、音樂創作成果有：禮儀用曲、彌撒曲、聖誕清唱劇、聖誕冥想音樂劇、兒童聖歌專輯。',
          descr1:'',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN14C.JPG?alt=media&token=23b7233f-f672-4b8f-87dd-d3df77c53706',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E8%98%87%E9%96%8B%E5%84%80.JPG?alt=media&token=0a6d2390-b88e-4330-b6d2-e28d1782ae13'
        },
        {
          key: '柯德蘭15',
          cat: '社福',
          name: '柯德蘭',
          pre: '一生照顧身心障礙、腦性麻痺兒童',
          description: '柯德蘭修女是從1923年10月11日誕生於荷蘭，早在1950年至1972年服務於荷蘭聖安娜之家，就開始照顧身心障礙腦性麻痺兒童，1972年白永恩神父邀請柯修女和另外兩個修女一同來到聖安娜之家， 照顧貧苦 無依的重度身心障礙兒童，全心全意為台灣奉獻至今已超過56年。',
          descr1:'她說：「我的家在台灣 ，我的心跟孩子們在一起 ，我不能丟下他們。',
          descr2:'我現在八十九歲了 有的時候我只能等 我真的希望他們一切平安，這是上主賜予我的使命，所以我一定會認真的做好每一份工作。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN15z.JPG?alt=media&token=70f22de0-4816-4447-8f6a-1485f24373ee',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T15z.JPG?alt=media&token=1757abbf-aae4-480b-8581-bc4d13924df0'
        },
        {
          key: '蔣國良16',
          cat: '藝術',
          name: '蔣國良',
          pre: '「謙虛的蔣導播」',
          description: '蔣國良 民國60年世新畢業後就在光啟社服務，經常與大導演林福地，辛奇，李嘉合作，拍過無數部膾炙人口的文教、社教、宗教電視劇。',
          descr1:'45年服務生涯，他謙虛的表示最得意作品是「每日讀經」，如暮鼓晨鐘般每天與教友分享福音，至今已經有超過1200集。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN16.JPG?alt=media&token=dab28773-7fc5-4ce0-8533-88f1cb37b68a',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T1612.JPG?alt=media&token=649f2b69-e1e6-4c02-b052-586d2e004b83'
        },
        {
          key: '蕭玉惠17',
          cat: '藝術',
          name: '蕭玉惠',
          pre: '藝術創作是她表達信仰的方式',
          description: '集母親、祖母、教育家和藝術家於一身，這就是畫家蕭玉惠。她的作品散見於台北復活堂及許多聖堂中。',
          descr1:'她說「藝術工作使我得以表達了我自己最特殊的一面，也就是我所體會到的與天主之間的關係」 蕭玉惠的藝術創作領域廣泛，從繪畫、刺繡、陶瓷、到馬賽克，她也在小學執教，負責孩子們的陶瓷課，共同創造許多公共藝術，她很高興，有一名學生已成了台灣知名藝術家。',
          descr2:'蕭玉惠表示“藝術創作是我宣講福音的能力。我感激天父的安排，和其他藝術家一起投身藝術創造，宣講信仰的美好.”。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN17.JPG?alt=media&token=231f3f02-a9f9-4fcb-821b-3bec825a467f',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E8%95%AD%E7%8E%89%E8%95%99.JPG?alt=media&token=5c047064-4ece-495a-8b41-bbb2bc9815a7'
          
        },
        {
          key: '趙榮珠18',
          cat: '福傳',
          name: '趙榮珠',
          pre: '「夕陽西沉何感傷，不沈那能見朝陽」',
          description: '見證月刊』由聖母聖心會袁士林神父於一九六三年開始，為教理講授提供教學法與教材等，然而四年後首次停刊。',
          descr1:'1970年，聖母聖心會韓德力神父，在聖神熱火催促下，加深牧靈工作，推動成立台北牧靈中心，培育教友人才，幫助教會發展，1973年，轉成台灣牧靈中心，下設三個組，分別是培育組、出版組及活動組。見證雜誌遂由該中心負責恢復發行。',
          descr2:'「夕陽西沉何感傷，不沈那能見朝陽」 趙榮珠表示，她從1994-2015年開始擔任牧靈中心主任一職，兼見證月刊主編，見證著重於教友福傳，選擇的文章及特別企畫的專題、研討會，多配合社會時代脈動，見證月刊可貴之處：在以信仰立場進行社會關懷，即便遇到較具爭議或敏感的議題，也都是以理性溫和的方式來呈現，來服事整個世代。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FCiccia.png?alt=media&token=d7ac417e-103b-43cf-b3bf-a32bee4c7b34',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/18Th.png?alt=media&token=d1fc8a96-59de-4544-92c8-4d2719d31751'
        },
        {
          key: '永春一號19',
          cat: '音樂',
          name: '永春一號',
          pre: '從業餘音樂社團到 在彌撒音樂服事',
          description: '一家倒閉的教友樂器店，滿屋子賣不出去的樂器，高福南神父覺得可惜，便買下這些樂器，號召堂區一群熱愛音樂的教友們，成立青少年音樂社團、聖詠團、合唱團，慢慢地使南屯天主堂成為一個充滿活力音樂的福傳堂區。',
          descr1:'從業餘音樂社團到能在堂區彌撒服事，進而成立「永春一號樂團」於2010年02月第一次正式在堂區舉辦「福傳101，天主請客」大會正式演出，實現用音樂來傳福音的夢想。',
          descr2:'現在他們忙著在教區義演，服務各善會及教友們喜慶活動，曾在SIGNIS天主教傳播協會大會及台中教區傳教50週年各鐸區慶典中擔任音樂讚美與彌撒服事等。 他們感謝高神父的支持，快樂地走在音樂朝聖之路。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN19.JPG?alt=media&token=424f9b81-1fe9-4284-8ee5-0c953351a425',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T19.JPG?alt=media&token=afe6c465-8f15-4630-8b00-49542f80c50a'
        },
        {
          key: '孫大川20',
          cat: '公眾服務',
          name: '孫大川',
          pre: '「為處於黃昏危機的原住民族、點 亮一盞明燈 」',
          description: '孫大川弟兄以文字振興臺灣原住民歷史、語言及文化，出版「山海雜誌」，小說、期刊、論文，著作等身。',
          descr1:'曾任，台大、清大、輔仁、東吳大學，作育英才無數，教學風格有一種自然、豪邁、與灑脫在公職、教育、及教會領域、大川為保護原民文化，提升民族自信不遺餘力，他照亮原住民的前途,也照亮台灣漢人的心靈世界。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN20C.JPG?alt=media&token=5919887d-53a8-4faf-a10f-d5f64b58bef8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/SDCT.JPG?alt=media&token=b3e460fb-fbfb-473f-8601-8ceeb2c263ec'
        },
        {
          key: '陳磊仕21',
          cat: '福傳',
          name: '陳磊仕',
          pre: '『看哪！弟兄和睦同居是何等地善,何等地美!』',
          description: '受傳道員父親無私奉獻福傳的影響，承諾父親繼承遺志，繼續為教會服務，台中傳協會主席陳 磊仕  一位全年無休的志工，不僅在教會及各善會積極服務，也是一個成功的社區營造者：磊 仕弟兄以福傳的理念和技巧，號招所有社區居民組成志工隊,依 照 社 區個人的專長及興趣、分工組成「文化、健康、婦幼、環保四大志工隊,更有住戶約100人共同響應。',
          descr1:'他自己身體力、行全家支持與志工隊每個月至少舉辦一次活動例如：文化志工隊不定期舉辦讀書會、 畫展與募書等活動;健康志工隊教大家晨間 健康養生操、舉辦健康講座、開設韻律舞班, 也經常代表社區至有需要的社福單位舉辦義診;婦幼志工隊在父親節和母親節透過創作比賽讓住戶感謝親恩環保志工隊主責整理社區的環保間(垃圾儲存與資源回收),並舉辦跳蚤市場,呼籲大家愛物惜福,更經常舉辦清淨家園活動,帶頭呼籲社區居民不分老小一起加入清掃社區鄰近公園,維持鄰里環境 的整潔。',
          descr2:'陳磊仕說：「自己經常與社區住戶分享「把公家當作自家」 ,就是這樣觀念 讓大家參與社區舉辦的各項活動時,均能不計較,熱心參與,盡心盡力把每件事 做好,期使能達 到「感恩、尊重、愛與包容」。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN21.JPG?alt=media&token=782172c3-45ad-4db2-89be-ef7b08504055',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T21.JPG?alt=media&token=70f2289f-4b77-4fdc-8f89-84d3f2d432be'
        },
        {
          key: '曾建次22',
          cat: '牧靈',
          name: '曾建次',
          pre: '復興原民文化的牧者',
          description: '繼承山道明神父及費道宏神父遺志，編輯成冊《祖靈的腳步》、用卑南語石生語系及竹生語系翻譯的《聖經》的四部福音 、 恢復歲時祭儀：猴祭、成年禮、收穫祭 、 推動尋舊社、尋根、恢復青年會所、祭祀屋活動 、 族群復興運動。',
          descr1:'把教堂成為所有原住民的教堂，表現原民文化藝術。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FNVV.JPG?alt=media&token=95b3e1ef-c278-45ed-b88c-876b570023d4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/TB.PNG?alt=media&token=799b8ada-4afc-4ddd-b633-1704b3268910'
        },
        {
          key: '王世芊23',
          cat: '福傳',
          name: '王世芊',
          pre: '從小立志服務社會',
          description: '出生天主教家庭，由母親及外婆帶領，自小活躍於堂區活動及善會特別喜歡關懷別人，大學唸輔大社會系，並學習志工服務，畢業後發揮所長，都在重是青年福傳事工歷任：台北市西區少年服務中心社工主任，天主教善牧基金會青少年服務處。',
          descr1:'現任：天主教耶穌會Magis青年中心特別助理。 曾參加了五屆世界青年節。珍惜每一次在教宗伴隨下和五大洲青年一起共融信仰生活，每次回來都覺得有特別的眷顧更認識自己與天主建立更密切的關係。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN23.JPG?alt=media&token=a88e78f2-a660-4015-80b6-c0511194b36e',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/%E7%8E%8B%E4%B8%96%E8%8A%8A.JPG?alt=media&token=4433451d-f824-4bab-95df-4710c20d09bc'
        },
        {
          key: '鄭萊頤24',
          cat: '社福',
          name: '鄭萊頤',
          pre: '從家庭主婦到受封「梵蒂岡 耶路撒冷 聖墓騎士」',
          description: '曾外祖父是傳教員，她這代已經是第四代教友，家族大部分是教友，小學到中學都是唸天主教學校，印象中常跟著母親長跪祈禱，長期浸潤在天主教禮儀教誨，深受修女、神父身教言教影響、自小就培養責任感，為教會服務的使命感。',
          descr1:'從家庭主婦到受封「梵蒂岡耶路撒冷聖墓騎士團騎士」：全力支持教會，並有卓越貢獻的教友榮銜，她首先感謝先生及家人的支持，讓她無後顧之憂義務服務教會，更感謝古亭耶穌聖心堂，讓她有機會在教會服務、ㄧ步步地從工作中學習組織運作與拓展教友人際關係，先是在堂區的承啟會由一群熱心教友所組成的善會，進而堂區傳協會、教區再來是全國傳協會。',
          descr2:'無論是家事或是義工，她始終相信「真實的力量來自服務」，總是以負責任的態度，把事情做好、做得完美。',
          descr3:'榮任博愛基金會董事長後，領導21位事業各有專精的董事們，她覺得更任重道遠，提醒自己避免光做瑪爾大的服務，應效法聆聽的瑪麗亞，在前任董事們打好的基礎上，發揮承先啟後的精神，推展策略聯盟及企業社會責任，爭取教會外資源，觀察聆聽社會的脈動，呼應社會需求，目前幫助的專案已經增加到267個，服務的地區從台灣、擴及到菲律賓、泰北、巴西等。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN24B.JPG?alt=media&token=8ca9f597-0ba4-48d4-941f-b9a4831288d0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T24A.JPG?alt=media&token=fd9900b4-3b8a-4fc7-a31e-457334d58060'
        },
        {
          key: '歐晉德25',
          cat: '公眾服務',
          name: '歐晉德',
          pre: '救難英雄',
          description: '歐晉德弟兄，「大地工程」博士、參與十大建設，雪隧、北二高，高鐵等國家建設。本職學能早已獲國內外肯定。',
          descr1:'他從不因職務或官位高低，考量個人出路，而是在乎可以服務國家、能發揮所長。921地震時，不顧自身安危、出入廢墟、冷靜指揮救災，「救難英雄」的美名，響遍全世界。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FNA25.JPG?alt=media&token=cedac851-a687-42f8-aab1-c2714b6ad0ea',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T25z.JPG?alt=media&token=e862910a-d513-45f6-ae92-c012b70269ac'
        },
        {
          key: '吳嘉德26',
          cat: '新移民福利',
          name: '吳嘉德',
          pre: '天主教會新竹教區附屬移民及外勞服務中心',
          description: '吳嘉德 神父自1993年至2016年來台服務，已有23年，主要工作：幫助及教育本國勞工，處理各種勞資爭議或職業災害。',
          descr1:'創立全臺第一個民間團體的移工安置中心，服務來自各國的外籍移工。',
          descr2:'監獄牧靈：提供外籍收容人安置及心靈輔導設立菲律賓及越南的新移民協會，讓新移民及其家庭互相了解各自的文化背景，對臺灣產生認同感與建立家庭間的融洽與互信。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN26A.JPG?alt=media&token=ddf9119c-41ef-4487-bb88-9fa303c826cf',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T30A.JPG?alt=media&token=10d5ea60-1cd0-4dc6-981b-ca1fed6c27fe'
        },
         {
          key: '邱碧霞27',
          cat: '藝術',
          name: '邱碧霞',
          pre: '邱碧霞擔任八里療養院職能治療師已經26年',
          description: '呼應藝術福傳，經常祈禱、克服職業倦怠、軟弱與煩躁，藉著藝術創作讓精神病友抒發心聲，讓無法用語言表達的生命經驗和情感，透過揉塑陶土或畫筆傳達出來。',
          descr1:'幫助病友透過作品重新描述、整理與看見自己。 支持鼓勵病友，作品從生澀到成熟，一如其從混亂到清明的心路歷程，藉由藝術撫平內心的不安與尖銳，心態也像做陶藝品一樣變得更加柔軟圓滑。',
          descr2:'增加他們的成就感與信心，與獨立自主的能力。',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN27A.JPG?alt=media&token=286c1336-7798-476a-b8cc-ef26da0dc6c4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T27A.JPG?alt=media&token=a91249df-ee74-4fdf-9779-fb85e603e384'
        },
        {
          key: '姚凌森28',
          cat: '牧靈',
          name: '姚凌森',
          pre: '他是位好先生，好爸爸、好教友',
          description: '教友尊稱他為姚爸，他出生天主教家庭，從小領洗，聖名多默，自幼聽外祖母及母親虔誠吟誦玫瑰經印象深刻，約11歲時認識耶穌會高道興神父、蒙神父們親炙教義，從此與聖家堂結緣從沒離開過。',
          descr1:'大學畢業後，先後在徐匯中學、中國海專教書同時也熱心教會服事，曾經擔任「 天主教之聲第二屆理事及理事長，堂區傳協會主席及全國傳協會理事及副主席，博愛基金會董事，徐匯中學董事等教會要職。2010年冊封為聖墓騎士，以表揚他對社會積極奉獻。',
          descr2:'他是位好先生，好爸爸、好教友，在事業及教會服務上表現傑出的姚爸，感恩在年少時受益於單樞機、李哲修神父及高道興神父身教、言教影響。',
          descr3:'在信仰修德上，他感謝天主特別的恩賜，能讓他陪伴照顧長女嘉琪42載，這條道路充滿病痛、困苦、軟弱與疑問，他全心全力完成天主託付的使命，回首來時路，他感恩天主一直在眷顧他們家庭。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN28AAA.JPG?alt=media&token=92262ea6-8564-4f4e-aaee-d61834695fd0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T321.png?alt=media&token=5c3d8b98-e7ec-4ce3-be2f-855ddfe2cebf'
        },
        {
          key: '張秀錦29',
          cat: '藝術',
          name: '張秀錦',
          pre: '她的花道充滿對上主的感恩',
          description: '在古亭耶穌聖心堂大廳裡、聖堂內、祭壇前、耶穌聖像、聖母像下面，總會發現幾盆清香撲鼻、花色鮮明、風格清新典雅的花藝點綴，以鮮花的盛開、待放、含苞自然循環，代表永恆宇宙起初、今日、永遠的縮影，襯托出一年四季、不同節日的彌撒意境和深邃內涵，令人神清氣爽、眼睛一亮。',
          descr1:'這些插花都是秀錦姊妹精心準備的，而且她已經風雨無阻地默默做了40年。為了呈現完美的效果，她會風塵僕僕地到濱江花市，到各攤位尋找最新鮮的花材，花店的老闆們也會將上品的花材留下給她挑選，如果當天沒適當的花材她寧願再跑一趟，她說：「要給天主的花材絕不能馬虎，一定要品質好」。',
          descr2:'連固定花材的海綿，她也要選擇最耐久，然後事先泡好備用，她準備花材花器的步驟，井然有序、熟練的插花技巧、典雅流暢猶如一場「小原流」花道表演。',
          descr3:'只要天主有用到它的地方，她都願意去做，除了在教會服務，她也定期到善會教導更生人或是受家暴的少女花藝，她非常感恩天主讓她有這份能力為社會服務，也感謝啟蒙老師讓她學得一技之長，更感謝家人的支持鼓勵讓她無後顧之憂，她的花道訴說著對上主的感恩。',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN29u.png?alt=media&token=68a033f4-6239-46d4-9b9c-10573555bec0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T29.JPG?alt=media&token=96a6ecdf-7f33-4de0-b0d2-fb8118162cca'
        },
        {
          key: '阮文雄30',
          cat: '新移民福利',
          name: '阮文雄',
          pre: '天主教會新竹教區附屬越南外勞配偶辦公室',
          description: '「結束今日奴隸制度的英雄」阮文雄神父，生於憂患，也長於憂患、晉鐸為神父後，服務過遊民及身心障礙弱勢，最後選擇充滿憂患挑戰的外籍移工羊群。',
          descr1:'他擁抱真理、不懼強權，努力持續替弱勢者講話，用創意的方式來改善立法、制度不周的問題。為身在窘境的外籍移工爭取基本人權。',
          descr2:'',
          descr3:'',
          id: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FN30.JPG?alt=media&token=17183b8c-1d52-4516-9ae2-e0420d4d7416',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/T30.JPG?alt=media&token=ee1df023-8235-4d05-b05c-6766a5f24f31'
        }
       
        
      ];
      
      var atutorials_keys = {};

      for (var i=0;i<atutorials_list.length;i++){
        atutorials_keys[atutorials_list[i].key] = atutorials_list[i];
      }

    return {
        list: atutorials_list,
        keys: atutorials_keys
    }

}]);