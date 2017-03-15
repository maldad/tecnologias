var Resultado =(function (){
  var get = XHR.get("https://kgsearch.googleapis.com/v1/entities:search?query=megadeth&key=AIzaSyC-IDgTVba5ssFlzRKbPYPL9D8Z_ZPOg_o&limit=1&indent=True");
  // var get = XHR.get("../knowledge.json");
  var _gui = function(test){
    // console.log(test);
   document.body.appendChild(HTML.header(3, "Entidad:"))
   document.body.appendChild(HTML.header(4, test.itemListElement[0].result.description));
   document.body.appendChild(HTML.header(3, "Descripcion:"))
   document.body.appendChild(HTML.header(4, test.itemListElement[0].result.detailedDescription.articleBody));
   document.body.appendChild(HTML.header(3, "Imagen:"))
   document.body.appendChild(HTML.header(4, test.itemListElement[0].result.image.contentUrl));
   document.body.appendChild(HTML.header(3, "Score:"))
   document.body.appendChild(HTML.header(4, test.itemListElement[0].resultScore));
  }
  return{
    "gui": _gui
  }
})();
