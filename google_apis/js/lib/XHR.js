var XHR = (function (){
  var _get = function(url){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        var myjson = JSON.parse(xhr.responseText);
        Procesar.procesar(myjson);
        console.log(xhr.responseText);
      }
    };
    xhr.open('GET', url);
    xhr.send();
  };

  return {
    'get': _get
  };

})();
