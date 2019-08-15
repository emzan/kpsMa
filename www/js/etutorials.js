/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('etutorials', [])

.service('Etutorials', [function(){
    
    var etutorials_list = [
        {
          key: 'Silence1',
          name: '【沈默】Silence 精彩預告',
          description: '2017/2/17 隆重獻映',
          long_descr: '★ 榮獲2016 美國國家評論協會獎「年度十大電影」、「最佳改編劇本獎」★ 首部全片在台灣拍攝的好萊塢史詩鉅獻 台灣團隊協力製作 台灣美景映入全球眼簾 ★ 國際金獎大導馬丁史柯西斯籌備28年 「非完成不可」的畢生夢想之作 ★ 馬丁史柯西斯御用金獎團隊聯手打造 場景波瀾壯闊 畫面驚心動魄 ★ 東西方巨星雲集 《即刻救援》連恩尼遜 x《蜘蛛人：驚奇再起》安德魯加菲爾x《STAR WARS：原力覺醒》亞當崔佛 x《寄生獸》淺野忠信 x《GO！大暴走》窪塚洋介 ★ 全球媒體和影評引頸期盼 強勢問鼎2017奧斯卡大獎 ★ 改編日本文學作家遠藤周作同名小說 痛徹心扉的人生抉擇 將帶來前所未有的衝擊 ★ 在這迫害的時代 拋棄信念 拋棄自我 才能存活 在17世紀日本江戶幕府的禁教時代，兩名天主教神父（安德魯加菲爾 和 亞當崔佛 飾）偷渡到日本調查恩師（連恩尼遜 飾）受迫害宣誓棄教之謎，在潛藏日本的過程中，目睹了各種凌遲與磨難，兩人開始懷疑自己一直堅持的初衷，更被迫面臨最艱難的抉擇……。',
          id: 'https://www.youtube.com/watch?v=NsM6dA2xUMU',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FST.JPG?alt=media&token=043468ed-53ec-4878-9e2d-d3f026c83cd5'
        },
        {
          key: 'SilenceJerry2',
          name: '丁松筠神父談沉默',
          description: 'Silence 沉默',
          long_descr: '丁松筠神父談沉默',
          id: 'https://www.youtube.com/watch?v=EjfH6YTuljI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/CattoliciGrande30%2FJSL.JPG?alt=media&token=a59741f3-acaf-4ada-a7e3-72826f60a2b9'
        }
        
      ];
      
      var etutorials_keys = {};

      for (var i=0;i<etutorials_list.length;i++){
        etutorials_keys[etutorials_list[i].key] = etutorials_list[i];
      }

    return {
        list: etutorials_list,
        keys: etutorials_keys
    }

}]);