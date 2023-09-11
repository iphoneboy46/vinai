export default function CircleText() {
  var Emblem = {
    init: function (el, str) {
      var elements = document.querySelectorAll(el);
      if (elements) {
        elements.forEach((element)=>{
          var text = str ? str : element.innerHTML;
          element.innerHTML = "";
          for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            var span = element.createElement("span");
            var node = element.createTextNode(letter);
            var r = (360 / text.length) * i;
            var x = (Math.PI / text.length).toFixed(0) * i;
            var y = (Math.PI / text.length).toFixed(0) * i;
            span.appendChild(node);
            span.style.webkitTransform =
              "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
            span.style.transform =
              "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
            element.appendChild(span);
          }
        })
        
      }
    },
  };

  Emblem.init(".emblemJS");
}
