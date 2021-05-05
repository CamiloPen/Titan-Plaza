// // ...................................................... { all var }
// var pos_xy ='';
// var pos_x ='';
// var pos_y ='';
// var nombre_store ='';
// var label_store ='';
// var url_store ='';
// var img_store ='';

// // ...................................................... { mapa interactivo }

// $(document).ready(function(){
//   // parametros incial del mapa
//   jQuery(function($){
//   		$('#map').smoothZoom({
//             width: '100%',
//             height: '100%',
//           //   container: 'Map',
//             animation_SMOOTHNESS: 8,
//             animation_SPEED_ZOOM: 2,					  //Speed of zoom movements [Any number from 0]
//             animation_SPEED_PAN: 2,					  //Speed of pan movements [Any number from 0]
//             pan_BUTTONS_SHOW: "NO",
//             pan_LIMIT_BOUNDARY: "NO",
//             button_SIZE: 45,
//             button_SIZE_TOUCH_DEVICE:45,
//             button_ALIGN: "top right",
//             border_TRANSPARENCY: 0,
//             button_ROUND_CORNERS:0,
//             button_BG_TRANSPARENCY: 1,
//             responsive: true,
//             zoom_MAX: 100
//   		});
//   	});

//   // controles mapa
//   $('#close-resultados').click(function(){
//       $('#box-resulado').addClass('is-hidden');
//   });

//   $('.ver-almacenes, .menu-mapa__link').click(function(){
//       $('.menu-mapa__content').slideToggle();
//       $('.al-mapa .controls').fadeToggle();
//   });

//   $('.piso-1').click(function(){
//       //$('.al-mapa__loading').fadeIn();
//       // ocultar loading
//       // $('.al-mapa__loading').fadeOut();
//       $('.controls__piso a').removeClass('active');
//       $("#map").smoothZoom("removeLandmark");
//       $( '#map' ).attr( 'src', '../assets/map/pisos/plano_piso_uno.jpg' );
//       $(this).addClass('active');
//   });

//   $('.piso-2').click(function(){
//       //$('.al-mapa__loading').fadeIn();
//       // ocultar loading
//       // $('.al-mapa__loading').fadeOut();
//       $('.controls__piso a').removeClass('active');
//       $("#map").smoothZoom("removeLandmark");
//       $( '#map' ).attr( 'src', '../assets/map/pisos/plano_piso_dos.jpg' );
//       $(this).addClass('active');
//   });



//   // pin mapa desktop - almacenes
//   $('.pin-mapa').click(function(){
//       $(this).find(".info-pin").fadeToggle();
//   });

//   // pin mapa mobile - close
//   $('.info-pin__close').click(function(){
//     console.log('cerrar');
//     // $(".info-pin--mobile").fadeToggle();
//     $(".info-pin--mobile").toggleClass('is-hidden');
//   });

//   // controls - zoom mapa
//   $('.zoom-in').click(function(){
//       $('#map').smoothZoom('zoomIn');
//       return false
//   });

//   $('.zoom-out').click(function(){
//       $('#map').smoothZoom('zoomOut');
//       return false
//   });

//   var listval = $('#pos-start__list');

//   $('.navegar__input').change(function(){
//       $(".navegar__par").slideToggle()
//   });

//   $('#pos-start__list').click(function(){
//       $console.log(listval.val());
//   });

//   // --------------------------------------------------- {Select - mapa App}
//   //$("select.flexselect").flexselect();

//   $("#start_input").change(function () {
//     console.log(777);
//     $(".navegar__par").slideToggle()
//    var val=$('#start_input').val();
//    var val_n = $('#start_input').find('option[value="'+val+'"]').data('n');
//    var val_m = $('#start_input').find('option[value="'+val+'"]').data('m');
//    var val_floor = $('#start_input').find('option[value="'+val+'"]').data('floor');
//    console.log('Start: ' + val_n, val_m, val_floor);
// });

//   $("#end_input").change(function () {
//    var val=$('#end_input').val();
//    var val_n = $('#end_input').find('option[value="'+val+'"]').data('n');
//    var val_m = $('#end_input').find('option[value="'+val+'"]').data('m');
//    var val_floor = $('#end_input').find('option[value="'+val+'"]').data('floor');
//    console.log('End: ' + val_n, val_m, val_floor);
// });
// // {/end Select - mapa App}

//   // Mapa versión app
//   $('.navegar__input').focusout(function(){
//       $(".navegar__par").slideDown()
//   });

//   $('.navegar__ver').click(function(){
//       $(".navegar__01").hide();
//       $(".al-mapa").show();
//   });

//   $('.navegar__cerrar').click(function(){
//       $(".navegar__02").hide();
//       $(".navegar__01").show();
//   });


//   var $htmlOrBody = $('html, body'), // scrollTop works on <body> for some browsers, <html> for others
//       scrollTopPadding = 8;

//   $('.navegar__form input').focus(function() {
//     $('.navegar__form').css('margin-bottom','500px');
//       // get textarea's offset top position
//       var textareaTop = $(this).offset().top;
//       // scroll to the textarea
//       $htmlOrBody.scrollTop(textareaTop - scrollTopPadding);
//   });

// });



// // ...................................................... { validar desktop/mobile }

// (function(a) {
// (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
// })(navigator.userAgent || navigator.vendor || window.opera);



// // Ubicación de los pin en el mapa
// function goto_almacen(id,nombre_store,label_store,url_store,img_store,pos_x,pos_y){
//   // eliminamos los pin creados
//   $("#map").smoothZoom("removeLandmark", [e]);
//   // moviento del mapa
//   $('#map').smoothZoom('focusTo', {x:pos_x, y:pos_y, zoom:80, speed:5});
//   pos_xy = $('#map').smoothZoom('getZoomData');

//   console.log(pos_xy);

// if(jQuery.browser.mobile){
//     // agregamos el pin del almacen - version monbile

//     var e = '<div class="item lable" data-show-at-zoom="0" data-position="' + pos_x + ", " + pos_y + '">';
//     e += '<span id="' + id + '" class="pin pin-mapa" data-show-at-zoom="0" onClick="ver_almacen(this.id)">';
//     e += '<img class="animated infinite pulse" src="assets/map/pin-mapa.svg" alt="">';
//     e += '</div>';
//     e += '</div>';


//     var pin_mobile = '<div class="info-pin--mobile"><div class="info-pin__content"><figure class="info-pin__figure"><span class="info-pin__close" onClick="close_pin()"><b class="icon-cross"></b></span>';
//     pin_mobile += '<img class="info-pin__img" src="assets/map/3-4-parrilla.jpg" alt=""></figure>';
//     pin_mobile += '<figcaption class="info-pin__info"><h4 class="info-pin__title">'+ nombre_store +' 2 </h4>';
//     pin_mobile += '<p class="info-pin__par">' + label_store + '</p><a class="info-pin__link" href="#">&nbsp;VER ALMACEN</a></figcaption>';

//     $('.cont-pin--mobile').append([pin_mobile]);

//     console.log('mobile');
// }else{

//   // agregamos el pin del almacen - version desktop
//   var e = '<div class="item lable" data-show-at-zoom="0" data-position="' + pos_x + ", " + pos_y + '">';
//   e += '<span id="' + id + '" class="pin pin-mapa" data-show-at-zoom="0" onClick="ver_almacen(this.id)">';
//   e += '<img class="animated infinite pulse" src="assets/map/pin-mapa.svg" alt="">';
//   e += '<div class="info-pin m--mod-2"><div class="info-pin__content"><figcaption class="info-pin__info">';
//   e += '<h4 class="info-pin__title">' + nombre_store + '</h4><button class="info-pin__icon"><b class="icon-heart"></b></button>';
//   e += '<p class="info-pin__par">' + label_store + '</p><a class="info-pin__link" href="' + url_store + '">&nbsp;VER ALMACEN</a></figcaption><a class="info-pin__link" href="#">';
//   e += '<figure class="info-pin__figure"><span class="info-pin__close pin-mapa"><b class="icon-cross"></b></span>';
//   e += '<img class="info-pin__img" src="' + img_store + '" alt=""></figure></a>';
//   e += '</div>';
//   e += '</span>';
//   e += "</div>";

//   console.log('desktop');
// }

//   $("#map").smoothZoom("addLandmark", [e]);
//   return false;
// }

// // cerrar pin mobile
// function close_pin (){
//     $(".info-pin--mobile").fadeToggle();
// }

// // mostramos la info del almacen
// function ver_almacen(id){
//       $("#"+id+ " .info-pin").fadeToggle();
//       console.log(id);
// }
