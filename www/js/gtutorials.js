/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('gtutorials', [])

.service('Gtutorials', [function(){
    
    var gtutorials_list = [
        {
          key: 'Otto',
          name: '洪萬六',
          description: '洪萬六 01',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=NuhrEhlr-1w',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'

        } ,
        {
          key: 'Otto',
          name: '洪萬六',
          description: '洪萬六 02',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=ZR-EY9lMGGk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        } ,
         {
          key: 'Due',
          name: '洪萬六',
          description: '洪萬六 03',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=s9XvCVDP3nU',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
         {
          key: 'Uno',
          name: '洪萬六',
          description: '洪萬六 04',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=AcFyO8XJEew',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
        {
          key: 'Tre',
          name: '洪萬六',
          description: '洪萬六 05',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=3xZ0GG4hcQ8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
        {
          key: 'Quattro',
          name: '洪萬六',
          description: '洪萬六 06',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=DDgCIZ-72FM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
        {
          key: 'Cinque',
          name: '洪萬六',
          description: '洪萬六 07',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=_FjF1akuDW8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
        {
          key: 'Sei',
          name: '洪萬六',
          description: '洪萬六 08',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=7rIa1qF2qZA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
        {
          key: 'Sette',
          name: '洪萬六',
          description: '洪萬六 09',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=2GcUStl76W8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FHWLThumb.jpg?alt=media&token=6f044450-5d89-4a0e-b6e3-131b2e61538e'
        },
        {
          key: 'Nove',
          name: '石頭修士',
          description: '石頭修士 01',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=I31kwfbW9XE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FPedroYz.png?alt=media&token=181e48a7-9c86-43de-b370-5818577e480c'
        } ,
         {
          key: 'Dieci',
          name: '石頭修士',
          description: '石頭修士 02',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=W1P-up92Ewg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FPedroYz.png?alt=media&token=181e48a7-9c86-43de-b370-5818577e480c'
        } ,
        {
          key: 'Undici',
          name: '石頭修士',
          description: '石頭修士 03',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=8ymxSggF3-8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FPedroYz.png?alt=media&token=181e48a7-9c86-43de-b370-5818577e480c'
        } ,
        {
          key: 'Dodici',
          name: '石頭修士',
          description: '石頭修士 04',
          long_descr: '',
          id: 'https://www.youtube.com/watch?v=xhl11X1WJg8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/Hong%20WanLiu%2FPedroYz.png?alt=media&token=181e48a7-9c86-43de-b370-5818577e480c'
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