/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('htutorials', [])

.service('Htutorials', [function(){
    
    var htutorials_list = [
       
        {
          key: '1繪本動畫故事',
          name: '繪本動畫故事1',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=73AavLmxiSI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F10scuo.png?alt=media&token=b996df24-e163-478e-b09a-00eb980aa803'
        },
        {
          key: '繪本動畫故事1',
          name: '繪本動畫故事a',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUyMzU0OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB1A.JPG?alt=media&token=e1a902a8-526c-4fc1-a74f-6db6700fcb76'
        },
         {
          key: '1兒童創作故事',
          name: '兒童創作故事1',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=0qb8kK-RJWI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F6Scuo.png?alt=media&token=bc43bfa0-8654-4e18-8ab1-9c4edb83d414'
        },
        {
          key: '兒童創作故事1',
          name: '兒童創作故事a',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ1ODEwNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB1B.JPG?alt=media&token=24f3948e-0a80-4b53-916b-df2bf2dd8b80'
        },
         {
          key: '2繪本動畫故事',
          name: '繪本動畫故事2',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=UjVTpECSRjo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB2A.JPG?alt=media&token=ba3a7f0e-559c-4bae-a1e8-dca12d7d5393'
        },
        {
          key: '繪本動畫故事2',
          name: '繪本動畫故事b',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ1NjcyMA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F7scuo.png?alt=media&token=1de2970d-0e30-40bd-8245-4df22be6d59d'
        },
         {
          key: '2兒童創作故事',
          name: '兒童創作故事2',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=XulaGhzXszw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB2B.JPG?alt=media&token=d9a5b4b1-57f2-469a-8158-0d51f0083591'
        },
       {
          key: '兒童創作故事2',
          name: '兒童創作故事b',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ2MTY4MA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F4scuo.png?alt=media&token=3f5b8798-28bc-4554-b6fc-d20a67cb7633'
        },
        {
          key: '3繪本動畫故事',
          name: '繪本動畫故事3',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=5SN6tlLLHk4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB3A.JPG?alt=media&token=461cb907-9605-4217-8bf4-98ffab562985'
        },
        {
          key: '繪本動畫故事3',
          name: '繪本動畫故事c',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUyODYzNg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F2scuo.png?alt=media&token=ff590d9b-dcba-4712-acf7-38cfdf61fbe5'
        },
         {
          key: '3兒童創作故事',
          name: '兒童創作故事3',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=fZmp72p1tlg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB3B.JPG?alt=media&token=dcc40845-1c24-4afe-b125-8586f8aec53e'
        },
      {
          key: '兒童創作故事3',
          name: '兒童創作故事c',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUyMTgyMA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F8scuo.png?alt=media&token=ada1c315-cbb3-411c-8672-e2ee7d7ac194'
        },
        {
          key: '繪本動畫故事4',
          name: '繪本動畫故事4',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=uMq-QplqZoo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB4A.JPG?alt=media&token=9113d9bf-edde-4826-9cc2-18465f173203'
        },
        {
          key: '4繪本動畫故事',
          name: '繪本動畫故事d',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUxNzQyNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F1scuo.png?alt=media&token=3492d7d5-7e11-4359-8770-546e8573184d'
        },
         {
          key: '4兒童創作故事',
          name: '兒童創作故事4',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=-jNu4eILoIs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB4B.JPG?alt=media&token=1454b715-d4a1-495a-bd50-d35df34493d9'
        },
       {
          key: '兒童創作故事4',
          name: '兒童創作故事d',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ2ODY0NA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F12Scuo.png?alt=media&token=3d6ae822-2f81-4764-ad7a-d0918ebc3ca7'
        },
        {
          key: '5繪本動畫故事',
          name: '繪本動畫故事5',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=1k8dm9scTug',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB5A.JPG?alt=media&token=9dd7d841-231b-4c1b-beca-6b54618444c9'
        },
        {
          key: '繪本動畫故事5',
          name: '繪本動畫故事e',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUyMDA0MA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F13scuo.png?alt=media&token=d2f35daa-119a-41df-bbe4-c6bb0a7e38b7'
        },
         {
          key: '5兒童創作故事',
          name: '兒童創作故事5',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=XAjxHupfeKg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB5B.JPG?alt=media&token=2afe2c37-4b0e-4460-8c73-192d13343825'
        },
        {
          key: '兒童創作故事5',
          name: '兒童創作故事e',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUyNDc0NA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F5scuo.png?alt=media&token=65bf31df-c829-4272-87ed-00c364a53aee'
        },
        {
          key: '6兒童創作故事',
          name: '兒童創作故事6',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=BZJiR7Yxmjk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6A.JPG?alt=media&token=a730de11-0d7a-47fb-84cc-9ed1901cc79c'
        },
        {
          key: '兒童創作故事6',
          name: '兒童創作故事f',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ2NDA5Ng',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9A.JPG?alt=media&token=5d91fb28-80d9-41b0-8dbe-01d1dfe7d80e'
        },
        {
          key: '6繪本動畫故事',
          name: '繪本動畫故事6',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
           long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=AVre48mRzPc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6B.JPG?alt=media&token=6d1bcba0-3f77-4fdd-a7d1-17ad79aafb7f'
        },
         {
          key: '繪本動畫故事6',
          name: '繪本動畫故事f',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUxMDI5Mg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9B.JPG?alt=media&token=a2b2d475-9005-4e25-88bb-a3a46b015e6b'
        },
        {
          key: '7兒童創作故事',
          name: '兒童創作故事7',
          description: "如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」",
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: "https://www.youtube.com/watch?v=C2fCPsLrHGE",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7A.JPG?alt=media&token=a1ab484a-8b4e-4eda-923d-174dcefcc7dd'
        },
        {
          key: '兒童創作故事7',
          name: '兒童創作故事g',
          description: "我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。",
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: "http://video.tudou.com/v/XMzAxNDQ2NjA2NA",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE13.JPG?alt=media&token=f1e481cd-17a8-4813-9efc-8ea343e73767'
        },
         {
          key: '7繪本動畫故事',
          name: '繪本動畫故事7',
          description: "如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」",
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: "https://www.youtube.com/watch?v=PqUqBT0Xz5E",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7B.JPG?alt=media&token=dd270a41-4bc5-4a04-8704-7452773a1924'
        },
       {
          key: '繪本動畫故事7',
          name: '繪本動畫故事g',
          description: "我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。",
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: "http://video.tudou.com/v/XMzAxNDUyNjY0NA",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9.JPG?alt=media&token=03bb48f9-1122-4582-bc9c-ecd584a712b0'
        },
        {
          key: '8兒童創作故事',
          name: '兒童創作故事8',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=iu2yZSkjjdo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8A.JPG?alt=media&token=4edd97f6-b439-44bd-b594-9d3ac38754c7'
        },
        {
          key: '兒童創作故事8',
          name: '兒童創作故事h',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUwNjMwNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8.JPG?alt=media&token=f0d39364-30ff-49d4-a071-486a6bef07fb'
        },
        {
          key: '8繪本動畫故事',
          name: '繪本動畫故事8',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=hqzlX4MuYkQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8B.JPG?alt=media&token=49802a3f-85c7-4da2-8718-3891c581fd63'
        },
       {
          key: '繪本動畫故事8',
          name: '繪本動畫故事h',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ3NjExNg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7B.JPG?alt=media&token=dd270a41-4bc5-4a04-8704-7452773a1924'
        },
        {
          key: '9繪本動畫故事',
          name: '第9集：繪本動畫故事',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=P-xOMmQ5YkA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9B.JPG?alt=media&token=a2b2d475-9005-4e25-88bb-a3a46b015e6b'
        },
        {
          key: '繪本動畫故事9',
          name: '第9集：繪本動畫故事i',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ2MDIwNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7A.JPG?alt=media&token=a1ab484a-8b4e-4eda-923d-174dcefcc7dd'
        },
        {
          key: '9兒童創作故事',
          name: '第9集：兒童創作故事',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=Q2qkuLaK88o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9A.JPG?alt=media&token=5d91fb28-80d9-41b0-8dbe-01d1dfe7d80e'
        },
        {
          key: '兒童創作故事9',
          name: '9兒童創作故事i',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUwODM2MA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7.JPG?alt=media&token=9849832a-be3b-4f39-a4b5-cdbc64a76ae1'
        },
         {
          key: '10繪本動畫故事',
          name: '繪本動畫故事10',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=ndnVI-Ia4JQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC10B.JPG?alt=media&token=21c2ea17-7403-441f-a577-50f54d6d98b1'
        },
        {
          key: '繪本動畫故事10',
          name: '繪本動畫故事l',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDUxNDg0NA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6B.JPG?alt=media&token=6d1bcba0-3f77-4fdd-a7d1-17ad79aafb7f'
        },
         {
          key: '10兒童創作故事',
          name: '兒童創作故事10',
          description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=vrpVAkmygD8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC10A.JPG?alt=media&token=366303f5-08c1-43e7-a9b1-48412c326b4d'
        },
       {
          key: '兒童創作故事10',
          name: '兒童創作故事l',
          description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDQ3Mjc4OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6A.JPG?alt=media&token=a730de11-0d7a-47fb-84cc-9ed1901cc79c'
        },
        {
            key: '11兒童創作故事',
            name: '兒童創作故事11',
            description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'https://www.youtube.com/watch?v=pzML0zPKkwM',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC11A.JPG?alt=media&token=426a143b-8a05-42ad-a1a1-288eadbdb30c'
            
        },
        {
            key: '兒童創作故事11',
            name: '兒童創作故事m',
            description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'http://video.tudou.com/v/XMzAxNDQ3OTE3Ng',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6.JPG?alt=media&token=c5c7af38-fa99-4e3d-aeaf-26354a833291'
            
        },
        {
            key: '繪本動畫故事',
            name: '繪本動畫故事11',
            description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'https://www.youtube.com/watch?v=LYcN4xAdqak',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC11B.JPG?alt=media&token=2d45bb2d-dc70-4b8b-9d56-a000e1a0aa21'
            
        },
       {
            key: '繪本動畫故事',
            name: '繪本動畫故事m',
            description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'http://video.tudou.com/v/XMzAxNDUxMTU3Mg',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC5.JPG?alt=media&token=afb73603-d803-45ee-b51b-b62322a14bda'
            
        },
        {
            key: '繪本動畫故事',
            name: '繪本動畫故事12',
            description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'https://www.youtube.com/watch?v=Gm61oCyxq64',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC12B.JPG?alt=media&token=2826de3c-407f-4fcc-ac49-4bc0c5ccf825'
            
        },
         {
            key: '繪本動畫故事',
            name: '繪本動畫故事n',
            description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'http://video.tudou.com/v/XMzAxNDQ1NDA3Ng',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC4.JPG?alt=media&token=8869a8d0-9ab1-4c7e-af72-70fe9b30b38c'
            
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事12',
            description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'https://www.youtube.com/watch?v=c6QENAIcHgQ',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC12A.JPG?alt=media&token=67dd2d42-8405-4d5c-9de0-7af83a3a4416'
            
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事n',
            description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'http://video.tudou.com/v/XMzAxNDUzMDMxNg',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC3.JPG?alt=media&token=9499f6ad-f2c2-4fa2-9f23-e2581a29a090'
            
        },
    
        {
            key: '繪本動畫故事',
            name: '精彩特色學校13',
            description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'https://www.youtube.com/watch?v=5ptTIpFeRYI',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13B.JPG?alt=media&token=1cf3ac59-b842-4176-afc4-0c4efc9f737d'
            
        },
         {
            key: '繪本動畫故事',
            name: '繪本動畫故事o',
            description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'http://video.tudou.com/v/XMzAxNDQ1MjQ3Mg',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC2.JPG?alt=media&token=8f6c461a-b3de-446b-8a8a-035aef1e1feb'
            
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事13',
            description: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'https://www.youtube.com/watch?v=vX2zfxBrckg',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13A.JPG?alt=media&token=ac38c3c9-fd25-40e1-8c62-d85970418108'
            
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事o',
            description: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
            long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
            id: 'http://video.tudou.com/v/XMzAxNDUwNDY1Mg',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13B.JPG?alt=media&token=1cf3ac59-b842-4176-afc4-0c4efc9f737d'
            
        }
        
        
      ];
      
      var htutorials_keys = {};

      for (var i=0;i<htutorials_list.length;i++){
        htutorials_keys[htutorials_list[i].key] = htutorials_list[i];
      }

    return {
        list: htutorials_list,
        keys: htutorials_keys
    }

}]);