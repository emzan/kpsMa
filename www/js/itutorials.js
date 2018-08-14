/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('itutorials', [])

.service('Itutorials', [function(){
    
    var itutorials_list = [
        {
          key: '新北市建安國小',
          name: '靴子裡的大世界1',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=7_wZ1CXIf2o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC1.JPG?alt=media&token=7b313841-6568-4ac9-95af-43d030b4c5d0'
        },
              {
          key: '新北市建安國小',
          name: '靴子裡的大世界1',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDU1NzQwOA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA1C.JPG?alt=media&token=7f677e52-ff9c-4274-ab00-7ec3f24dd3ad'
        },
      
        {
          key: '台北市永樂國小',
          name: '靴子裡的大世界2',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=CZsOHJUWi4o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC2.JPG?alt=media&token=8f6c461a-b3de-446b-8a8a-035aef1e1feb'
        },
        {
          key: '台北市永樂國小',
          name: '靴子裡的大世界2',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDU2MTMyNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA8C.JPG?alt=media&token=d9a04c0a-b0df-4ff0-a394-ff17d3fba22c'
        },
      
        {
          key: '台南市西門國小',
          name: '靴子裡的大世界3',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=EghMczSLEAc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC3.JPG?alt=media&token=9499f6ad-f2c2-4fa2-9f23-e2581a29a090'
        },
        {
          key: '台南市西門國小',
          name: '靴子裡的大世界3',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDU2NjkwNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA7C.JPG?alt=media&token=8cb7d0da-b967-4fa1-8265-5bb61003ffdd'
        },
      
        {
          key: '4靴子裡的大世界',
          name: '靴子裡的大世界4',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=cUWaPhJ5X7w',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC4.JPG?alt=media&token=8869a8d0-9ab1-4c7e-af72-70fe9b30b38c'
        },
         {
          key: '靴子裡的大世界4',
          name: '靴子裡的大世界4',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDUzODA1Mg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB1A.JPG?alt=media&token=e1a902a8-526c-4fc1-a74f-6db6700fcb76'
        },
     
        {
          key: '台中市 大元國小',
          name: '靴子裡的大世界5',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=AG3PYeK-e8M',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC5.JPG?alt=media&token=afb73603-d803-45ee-b51b-b62322a14bda'
        },
        {
          key: '台中市 大元國小',
          name: '靴子裡的大世界5',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDU0NjkyMA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB1B.JPG?alt=media&token=24f3948e-0a80-4b53-916b-df2bf2dd8b80'
        },
       
        {
          key: '靴子裡的大世界6',
          name: '靴子裡的大世界6',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=n8Ph5RD5Sxc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6.JPG?alt=media&token=c5c7af38-fa99-4e3d-aeaf-26354a833291'
        },
       {
          key: '6靴子裡的大世界',
          name: '靴子裡的大世界6',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDUzMTkyMA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB2A.JPG?alt=media&token=ba3a7f0e-559c-4bae-a1e8-dca12d7d5393'
        },
       
        {
          key: '靴子裡的大世界7',
          name: '靴子裡的大世界7',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=pGMelB8c_nk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7.JPG?alt=media&token=9849832a-be3b-4f39-a4b5-cdbc64a76ae1'
        },
        {
          key: '7靴子裡的大世界',
          name: '靴子裡的大世界7',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDYzODAyNA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9B.JPG?alt=media&token=a2b2d475-9005-4e25-88bb-a3a46b015e6b'
        },
       
        {
          key: '靴子裡的大世界8',
          name: '靴子裡的大世界8',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=uHGas9BAOtA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8.JPG?alt=media&token=f0d39364-30ff-49d4-a071-486a6bef07fb'
        },
         {
          key: '8靴子裡的大世界',
          name: '靴子裡的大世界8',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDYwNDk5Mg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8B.JPG?alt=media&token=49802a3f-85c7-4da2-8718-3891c581fd63'
        },
       
        {
          key: '花蓮縣 銅門國小 9',
          name: '靴子裡的大世界9',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=ScSljtXEO5s',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9.JPG?alt=media&token=03bb48f9-1122-4582-bc9c-ecd584a712b0'
        },
        {
          key: '花蓮縣 銅門國小',
          name: '靴子裡的大世界9',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'hhttp://video.tudou.com/v/XMzAxNDU5NTU4OA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7B.JPG?alt=media&token=dd270a41-4bc5-4a04-8704-7452773a1924'
        },
         
        {
          key: '靴子裡的大世界10',
          name: '靴子裡的大世界10',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=TPyMCfB6TXc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC10.JPG?alt=media&token=773dedfe-c879-481c-a903-b2a6932f8607'
        },
         {
          key: '10靴子裡的大世界',
          name: '靴子裡的大世界10',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDYyNzUxMg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6B.JPG?alt=media&token=6d1bcba0-3f77-4fdd-a7d1-17ad79aafb7f'
        },
       
        {
          key: '11屏東縣 凌雲國小',
          name: '靴子裡的大世界11',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=C-aO8ZI2qUM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC11.JPG?alt=media&token=83d22418-134c-4854-9a40-6403159a0d8d'
        },
         {
          key: '屏東縣 凌雲國小11',
          name: '靴子裡的大世界11',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'http://video.tudou.com/v/XMzAxNDYzMjc1Ng',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F4scuo.png?alt=media&token=3f5b8798-28bc-4554-b6fc-d20a67cb7633'
        },
        
        {
          key: '嘉義縣 北回國小12',
          name: '靴子裡的大世界12',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'https://www.youtube.com/watch?v=A3dKHvrtq_o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC12.JPG?alt=media&token=a17f9692-37cf-4dfc-86bd-5ab4633c4034'
        },
        {
          key: '12嘉義縣 北回國小',
          name: '靴子裡的大世界12',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDYxNTc1Mg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F5scuo.png?alt=media&token=65bf31df-c829-4272-87ed-00c364a53aee'
        },
       
        {
          key: '13靴子裡的大世界',
          name: '靴子裡的大世界13',
          description: '靴子裡的大世界',
           long_descr: '我們希望給未來的主人翁們一個優質的兒童節目，裡面擁有豐富的想像力、創造力，從各種面向不同的故事中，建立良好的人生觀與價值觀。這就是「靴子裡大世界」兒童節目的企劃初衷。',
          id: 'https://www.youtube.com/watch?v=v6sG0wnzloM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13.JPG?alt=media&token=87e1e676-f9ab-4ef8-b02a-fa778002d42f'
        },
       {
          key: '靴子裡的大世界13',
          name: '靴子裡的大世界13',
          description: '靴子裡的大世界',
          long_descr: '如何有效應用現代化數位影音的特質，引導孩子們進入閱讀天地，同時也讓孩子結合耳朵的聽、眼睛的看，以及腦部對故事的建構和理解，達到潛移默化的教育效果，正是本兒童節目所希望能達到的目標。誠如美學大師蔣勳所言：「偉大的文學，都是從講故事開始的。…可以令人獲得慰藉，可以讓心靈被充滿。」',
          id: 'http://video.tudou.com/v/XMzAxNDYwOTY4MA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/ScuoScarpa%2F7scuo.png?alt=media&token=1de2970d-0e30-40bd-8245-4df22be6d59d'
        }
        
       
        
      ];
      
      var itutorials_keys = {};

      for (var i=0;i<itutorials_list.length;i++){
        itutorials_keys[itutorials_list[i].key] = itutorials_list[i];
      }

    return {
        list: itutorials_list,
        keys: itutorials_keys
    }

}]);