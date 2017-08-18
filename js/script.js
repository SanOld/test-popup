;(function(){

//***ЗАГРУЗКА РЕСУРСОВ
document.addEventListener("DOMContentLoaded", loader, false);
var used_jQuery = null;

//загрузка доп. ресурсов
function loader(){

  //подключаю необходимые внешние стили
  include('link', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');

  //подключаю необходимые внешние скрипты
  if( window.jQuery  ){

    used_jQuery = jQuery;
    include('script', 'https://code.jquery.com/jquery-2.2.3.min.js');

  } else {

    include('script', 'https://code.jquery.com/jquery-2.2.3.min.js');

  }

};
function include( tag, url ) {

  switch (tag) {
    case 'link':

      var el = window.document.createElement('link');
      el.href = url;
      el.rel="stylesheet";
      window.document.getElementsByTagName('body')[0].appendChild(el);

      break;

    case 'script':

      var script = window.document.createElement('script');
      script.src = url;
      script.async = false;
      window.document.getElementsByTagName('body')[0].appendChild(script);

      break;

  }

}


//***ФОРМИРОВАНИЕ ВИДЖЕТА
window.onload = function (){

//инкапсуляция используемой версии
var $ = jQuery;
if ( used_jQuery ) jQuery = used_jQuery;

//класс виджета
var TestWidget = (function() {

  function Widget( options ) {

    var url = options.hasOwnProperty("url") ? options["url"] : '';
    var elem, box, button, button2;
    var avatar, name, spec, question, img, span;

    function getElem() {
      if ( !elem ) {
        render();
        fillElem();
      }
      return elem;
    }

    function render() {

      //элементы
      elem  = document.createElement( 'div' );
      elem.className = 'tw-message_block';
      box = document.createElement( 'div' );
      box.className = 'tw-box';
      var name_p = document.createElement( 'p' );
      name_p.className = 'tw-name_p';
      var avatar_p = document.createElement( 'p' );
      avatar_p.className = 'tw-avatar_p';
      var spec_p = document.createElement( 'p' );
      spec_p.className = 'tw-spec_p';
      var question_p = document.createElement( 'p' );
      question_p.className = 'tw-question_p';
      name = document.createElement( 'a' );
      name.className = 'tw-name';
      avatar = document.createElement( 'a' );
      avatar.className = 'tw-avatar';
      spec = document.createElement( 'a' );
      spec.className = 'tw-spec';
      question = document.createElement( 'a' );
      question.className = 'tw-question';
      img = document.createElement( 'img' );
      span = document.createElement( 'span' );

      button = document.createElement( 'a' );
      button.className = 'tw-close fa fa-times';
      button.title = 'Закрыть';

      button2 = document.createElement( 'a' );
      button2.className = 'tw-close2 fa fa-times';
      button2.title = 'Закрыть';


      elem .appendChild( box );
      elem .appendChild( button );
      elem .appendChild( button2 );

      box.appendChild(name_p);
      box.appendChild(avatar_p);
      box.appendChild(spec_p);
      box.appendChild(question_p);

      name_p.appendChild( name );
      avatar_p.appendChild( avatar );
      spec_p.appendChild( spec );
      question_p.appendChild( question );

      avatar.appendChild( img );
      question.appendChild( span );

      //Стили
      var style = document.createElement( 'style' );
      style.innerHTML = style2();
      document.body.appendChild(style);

      //события
      elem .onmousedown = function() {
        return false;
      };

      elem .onclick = function( event ) {
        if ( event.target.closest('.tw-close') || event.target.closest('.tw-close2') ) {
          toggle();
        }
      };

    };

    function style2(){
      var style =
                ".tw-message_block {\
                    position: absolute;\
                    width: 400px;\
                    border-radius: 10px;\
                    margin: 20px 20px;\
                    bottom: 15px;\
                    right: 20px;\
                    font-size: 14px;\
                    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;\
                    background: #DCDCDC;\
                    z-index: 10000\
                  }\
               .tw-box {\
                    display: block;\
                    min-height: 150px;\
                    margin: 0 auto 0px auto;\
                    overflow: hidden;\
                    border-radius: 5px;\
                    -moz-border-radius: 5px;\
                    -webkit-border-radius: 5px;\
                    position: relative;\
                  }\
                \
                 .tw-message_block p {\
                    display: block;\
                    padding:  0 10px;\
                    padding-left: 100px;\
                  }\
                \
                .tw-message_block a {\
                  display: block;\
                  text-decoration: none;\
                }\
                \
                .tw-spec_p  { margin-top: -12px;  }\
                .tw-name_p  { padding-bottom:  0; }\
                .tw-name  {\
                  font-weight: bold;\
                  line-height: 20px;\
                  font-size: 16px;\
                  margin-top: 23px;\
                  max-height: 42px;\
                  overflow: hidden;\
                  color:black;\
                }\
                \
                \
                .tw-avatar {\
                  padding: 0px 0px;\
                  position: absolute;\
                  width: 80px;\
                  height: 80px;\
                  top: 5px;\
                  left: 5px;\
                  overflow: hidden;\
                  border-radius: 100%;\
                  -moz-border-radius: 100%;\
                  -webkit-border-radius: 100%;\
                \
                }\
                .tw-message_block img {\
                  width: 80px;\
                  height: auto;\
                }\
                \
                .tw-spec {\
                  color: #999;\
                  font-size: 14px;\
                  padding-top: 0;\
                }\
                \
                .tw-message_block .tw-question_p{\
                  padding-left:0px;\
                  padding-right:0px;\
                  padding-top: 20px;\
                  margin-bottom: 0px;\
                }\
                \
                .tw-message_block .tw-question {\
                  position: relative;\
                  left: 0;\
                  width: 100%;\
                  display: table-row;\
                  text-decoration: none;\
                  margin-bottom: 0px;\
                  background: #e5f0d6;\
                  background: #fff;\
                  color: #999;\
                  font-size: 16px;\
                \
                }\
                .tw-question::before {\
                  content: '';\
                  position: relative;\
                  left: 35px;\
                  top: -14px;\
                  display: inline-block;\
                  width: 0;\
                  height: 0;\
                  border-style: solid;\
                  border-width: 0 10px 10px 10px;\
                  border-color: transparent transparent #fff transparent;\
                }\
                \
                .tw-message_block span{\
                  width:100%;\
                  text-align:left;\
                  font-size: 20px;\
                  overflow: hidden;\
                  display: block;\
                  padding: 5px;\
                }\
                \
                .tw-close {\
                  \
                  background: #00d9ff;\
                  color: #FFFFFF;\
                  line-height: 50px;\
                  position: absolute;\
                  right: -24px;\
                  text-align: center;\
                  bottom: -20px;\
                  width: 49px;\
                  \
                  font-size: 28px;\
                  -webkit-border-radius: 24px;\
                  -moz-border-radius: 24px;\
                  border-radius: 24px;\
                  -moz-box-shadow: 1px 1px 3px #000;\
                  -webkit-box-shadow: 1px 1px 3px #000;\
                  box-shadow: 1px 1px 3px #000;\
                  opacity: 1;\
                }\
                \
                .tw-close2 {\
                  \
                  background: #DCDCDC;\\n\
                  color: #000;\
                  line-height: 20px;\
                  position: absolute;\
                  right: 20px;\
                  text-align: center;\
                  top: 20px;\
                  width: 20px;\
                  \
                  font-size: 14px;\\n\
                  font-weight: 100\
                }";

      return style;
    };

    function open() {
      $(button).removeClass( "fa-check-square-o" ).addClass( "fa-times" );
      $(button).attr( 'title', 'Закрыть' );
      $(box).show();
      $(button2).show();
    };

    function close() {
      $(button).removeClass( "fa-times" ).addClass( "fa-check-square-o" );
      $(button).attr( 'title', 'Открыть' );
      $(box).hide();
      $(button2).hide();
    };

    function toggle() {

      if ( $(button).hasClass('fa-check-square-o')){
        open();
      } else {
        close();
      }

    };

    function fillElem(){

      $.getJSON(
        url,
        function(json) {

          $(img).attr('src', json.messages[0].image );
          $(name).text( json.messages[0].name );
          $(spec).text( json.messages[0].title );
          $(span).text( json.messages[0].message );

        }
      );

    }

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
  }

  // Возвращаем класс виджета
  return Widget;
})();

//инициализация
var widget = new TestWidget( {url:'http://dev.nexusmedia-ua.com/devtest/'} );

// получить сгенерированный DOM-элемент виджета
var elem = widget.getElem();

// вставить виджет на страницу
document.body.appendChild(elem);


};

}());