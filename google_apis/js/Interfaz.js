var Interfaz = (function (){
  var separador = HTML.new_element("hr", {});

  //necesitamos elementos separados? o podemos crear uno global y
  //modificarlo cada que se quiera?
  //habrá que recordar... ( ._.)
  var _knowledge = function(){
    var google = HTML.new_element("h1", {});
    google.set_text("Google Knowledge API");
    document.body.appendChild(google.element());
    var input = HTML.new_element("input", {"id": "input1"});
    document.body.appendChild(input.element());
    var button = HTML.new_element("button", {"id": "button1"});
    button.set_text("Search");
    document.body.appendChild(button.element());
    document.body.appendChild(separador.element());
    //seleccionar el botón y asignarle un evento
  }

  var _blogger = function(json){
    document.body.appendChild(HTML.header(1, "Blogger API"));
    document.body.appendChild(document.createElement('hr'));
  }
  return {
    "knowledge": _knowledge,
    "blogger": _blogger,
  }
})();
