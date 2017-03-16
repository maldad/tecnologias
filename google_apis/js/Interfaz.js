var Interfaz = (function (){
  var separador = HTML.new_element("hr", {});

  var _knowledge = function(){
    document.body.appendChild(HTML.new_element("h1", {}).set_text("Google Knowledge API").element());
    document.body.appendChild(HTML.new_element("input", {"id": "input1"}).element());
    document.body.appendChild(HTML.new_element("button", {"id": "button1"}).set_text("Buscar").element());
    var button = document.getElementById("button1");
    button.addEventListener("click", function(event){XHR.get("../knowledge.json")}, false);
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
