var Interfaz = (function (){
  var separador = HTML.new_element("hr", {});

  var reemplaza_espacio_por_signo = function(s){
    var reemplazo = "";
    for(var i = 0; i < s.length; i++){
      if(s[i] === " "){
        reemplazo = reemplazo.concat("+");
      }else{
        reemplazo = reemplazo.concat(s[i]);
      }
    }
    return reemplazo;
  };

  // var limpiar = function(){
  //   document.
  // }

  var _knowledge = function(){
    document.body.appendChild(HTML.new_element("h1", {}).set_text("Google Knowledge API").element());
    document.body.appendChild(HTML.new_element("input", {"id": "input1"}).element());
    document.body.appendChild(HTML.new_element("button", {"id": "button1"}).set_text("Buscar").element());
    var button = document.getElementById("button1");
    // la url debe caer como parámetro aquí
    var input = document.getElementById("input1");
    button.addEventListener("click", function(event){
      var query = input.value;
      query = reemplaza_espacio_por_signo(query);
      var url = "https://kgsearch.googleapis.com/v1/entities:search?query=" + query  + "&key=AIzaSyC-IDgTVba5ssFlzRKbPYPL9D8Z_ZPOg_o&limit=1&indent=True";
      // XHR.get("../knowledge.json")
      XHR.get(url);
    }, false);
  }

  var _blogger = function(json){
    document.body.appendChild(HTML.new_element("h1", {}).set_text("Blogger API").element());
    document.body.appendChild(HTML.new_element("input", {"id": "input2"}).element());
    document.body.appendChild(HTML.new_element("button", {"id": "button2"}).set_text("Buscar").element());
    var button = document.getElementById("button2");
    button.addEventListener("click", function(event){XHR.get("../blogger.json")}, false);
  }
  return {
    "knowledge": _knowledge,
    "blogger": _blogger,
  }
})();
