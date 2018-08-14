angular.module('app.services', [])

.service('Survey', ['$http', function($http){
    
    var api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=xTadJaRi3gLdqCpx4KGUX2bpFc18nkpnJ2m8guFdtmJA_mqOaFeiQgHTfBYQnoe_OJqEGmQ05NMPOodCbAYr1ePtkWMEocPSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKVtoCZtkVndpva-8Z0HE08kPLkd7Npe5xGrmCT9EF8pnB1tCXYCFXZSJixS_1zvGkWY2nZ7HPw5&lib=Mmq_rE2z6YtOR3c2nfZEVFVBVJNP6x9cr';
    var currentID = 1;
    
    function filterBlankRows(l){
        return l.filter(function(obj){
            return obj.id != '';
        });
    }
    
    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                var results = filterBlankRows(resp.data);
                if (results.length > 0) currentID = parseInt(results[results.length-1].id);
                return results;
            });
            
        }, 
        add: function(data){
            currentID++;
            data.id = currentID;
            
            return $http.post(api_url, data).then(function(resp){
                return resp.data;
            });

        },

        query: function(params){
            
            var actual_params = [];
            for (var k in params){
                if (params[k]){
                    actual_params.push(k + '=' + params[k]);
                }
            }
            actual_params = '?'+actual_params.join('&');
            
            return $http.get(api_url+'/search'+actual_params).then(function(resp){
                return filterBlankRows(resp.data);
            })
            
        }
    }
    
    ret.all();
    
    return ret;

}]);