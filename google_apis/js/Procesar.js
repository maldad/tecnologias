var Procesar =(function (){
  // XHR.get("../knowledge.json");
  // XHR.get("../blogger.json");
  // debe haber un procesar para cada tipo de JSON a formatear
  var _procesar = function(json){
    document.body.appendChild(HTML.new_element("h3", {}).set_text("Entidad").element());
    document.body.appendChild(HTML.new_element("h4", {}).set_text(json.itemListElement[0].result.description).element());
    document.body.appendChild(HTML.new_element("h3", {}).set_text("Descripción").element());
    document.body.appendChild(HTML.new_element("h4", {}).set_text(json.itemListElement[0].result.detailedDescription.articleBody).element());
    document.body.appendChild(HTML.new_element("h3", {}).set_text("Imagen").element());
    document.body.appendChild(HTML.new_element("h4", {}).set_text(json.itemListElement[0].result.image.contentUrl).element());
    document.body.appendChild(HTML.new_element("h3", {}).set_text("Puntuación").element());
    document.body.appendChild(HTML.new_element("h4", {}).set_text(json.itemListElement[0].resultScore).element());
  }

  return{
    "procesar": _procesar
  }
})();
