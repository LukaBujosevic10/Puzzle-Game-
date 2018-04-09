$(document).ready(function() {
    $('#tabela').hide();
  var zvanicno = new Array(15);
  var luka;
  var unutra = new Array(15);
  var kliknuto;
  var pozicija;
  var z;
  var vrednost = new Array(16);
  var mesto_praznog;
  var mesto_kliknutog;
  $('h3').hide();
  $('#upis').hide();
  var auto_pozicija_nule;
  var at = new Array(16);
  var neispravno = new Array(3, 4, 7, 8, 11, 12);
  var levo = new Array(4, 8, 12);
  var desno = new Array(3, 7 ,11);
  var brojac_ispravnosti = 0;
  var auto_moguce_pomeranje = new Array();
  var broj_u_nizu = 0;
  //Ubacivanje polja i brojeva u glavni
  var broj_poziva = Math.floor((Math.random() * 20) + 50);
  var brojac_poziva = 0;
  var broj = 1;
  var x = Math.floor((Math.random() * 15) + 1);
  var n = 0;
    for (var i = 0; i <= 15; i++) {
      if (i == x) {
          $('#wrap').append('<div id="prazno"><p style="display: none;">0</p></div>');
      }else {
        $('#wrap').append('<div class="puno">'+broj+'</div>');
        broj++;
      }
        if (i==15) {
          luka = $('#wrap').children();
          for (var i = 0; i < 16; i++) {
            unutra[i] = $(luka[i]).text();
            //unutra = $(tekst).text()
            at[i] = $(luka[i]).text();
          }

        poziv_autom_mova = setInterval(moguce_pomeranje, 100);
        /*$('#klik').on('click',function() {
          moguce_pomeranje();
        });*/
        }
    }
    function moguce_pomeranje() {

      auto_pozicija_nule = at.indexOf('0');
      console.log("Auto pozicija nule je "+ auto_pozicija_nule);
      for (var i = 0; i < neispravno.length; i++) {
        if (auto_pozicija_nule != neispravno[i]) {
          brojac_ispravnosti++;
        }
      }
      if (brojac_ispravnosti == 6) {
        if (auto_pozicija_nule+1 < 16) {
           auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule+1;
           broj_u_nizu++;
        }
        if (auto_pozicija_nule-4 > -1) {
           auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule-4;
           broj_u_nizu++;
        }
        if (auto_pozicija_nule-1 > -1) {
           auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule-1;
           broj_u_nizu++;
        }
        if (auto_pozicija_nule+4 < 16) {
           auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule+4;
           broj_u_nizu++;
        }
      }else {
        for (var i = 0; i < 3; i++) {
          if (auto_pozicija_nule == levo[i]) {
            if (auto_pozicija_nule+1 < 16) {
               auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule+1;
               broj_u_nizu++;
            }
            if (auto_pozicija_nule-4 > -1) {
               auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule-4;
               broj_u_nizu++;
            }
            if (auto_pozicija_nule+4 < 16) {
               auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule+4;
               broj_u_nizu++;
            }
          }
        if (auto_pozicija_nule == desno[i]) {
          if (auto_pozicija_nule-4 > -1) {
             auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule-4;
             broj_u_nizu++;
          }
          if (auto_pozicija_nule-1 > -1) {
             auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule-1;
             broj_u_nizu++;
          }
          if (auto_pozicija_nule+4 < 16) {
             auto_moguce_pomeranje[broj_u_nizu] = auto_pozicija_nule+4;
             broj_u_nizu++;
          }
        }
      }

    }
      console.log("Auto moguce pomeranje je "+auto_moguce_pomeranje);
    pomeranje_na_slucajno_mesto();
  }
  function pomeranje_na_slucajno_mesto() {
    console.log("Na slučajnom si mestu");
    var slbr = Math.floor((Math.random() * auto_moguce_pomeranje.length-1)+1);
    console.log("Slučajan broj je "+slbr);
    console.log("Pomeriću na poziciju "+ auto_moguce_pomeranje[slbr]);
    var sl_el_ni = auto_moguce_pomeranje[slbr];
    var tekst_za_pomeranje = at[sl_el_ni];
    console.log("Tekts za pomeranje je "+tekst_za_pomeranje);
    //var kordinate_slucajnog = $(luka[at.indexOf(tekst_za_pomeranje)]).offset();
    //$(luka).text(tekst_za_pomeranje)
    for (var i = 0; i < luka.length; i++) {
      //console.log('Luka i je '+$(luka[i]).text());
      if ($(luka[i]).text() == tekst_za_pomeranje) {
        var tekst_slucajnog = $(luka[i]).text();
        var kordinate_slucajnog = $(luka[i]).offset();
        var redni_luke = i;
        console.log('Kordinate slicajnog su '+ kordinate_slucajnog);
      }

    }
    console.log(kordinate_slucajnog);
    var auto_kordinate_nule = $('#prazno').offset();
    $('#prazno').offset(kordinate_slucajnog);

    $(luka[redni_luke]).offset(auto_kordinate_nule);

    var za_promenu = $(at[sl_el_ni]);
    var za_promenu_dva = at.indexOf(at[sl_el_ni]);

    at[at.indexOf('0')] = at[sl_el_ni];
    at[sl_el_ni] = '0';
    auto_moguce_pomeranje.length = 0;
    broj_u_nizu = 0;
    brojac_ispravnosti = 0;
    console.log(at);
    brojac_poziva++;
   if(brojac_poziva == broj_poziva){
    clearInterval(poziv_autom_mova);
    merenje_vremena();
  }
  }
    //Davanje klika popunjenim mestime
    $('.puno').on('click', function() {
      //zivkam();
      pozicija = $(this);
      var kliknuto = $(this).offset();
      var prazno = $('#prazno').offset();
      var razlika_top = kliknuto.top - prazno.top;
      var razlika_left = kliknuto.left - prazno.left;
      var zbir_top = kliknuto.top + prazno.top;
      var zbir_left = kliknuto.left + prazno.left;
      if (Math.abs(razlika_top) == 100 && razlika_left == 0) {
        var d = $(this).offset(prazno);
        $(this).animate({top: d}, 7000);
        $('#prazno').offset(kliknuto);
        lociranje();
    }
    if (Math.abs(razlika_left) == 100 && razlika_top == 0) {
      var d = $(this).offset(prazno);
      $(this).animate({left: d}, 7000);
      $('#prazno').offset(kliknuto);
      lociranje();

  }
  });


    function lociranje() {
      var k = 0;
      var praz_div = $('#prazno');



      mesto_kliknutog = at.indexOf($(pozicija).text());
      mesto_praznog = at.indexOf($(praz_div).text());

      at[mesto_praznog] = $(pozicija).text();
      at[mesto_kliknutog] = "0";

console.log(at);
      if (at[15] == "0") {
        for (var i = 0; i < 15; i++) {
          if (at[i] == i+1+"") {
            k++;
            if (k == 15) {
              $('h3').show();
              clearInterval(loop);
              $('#wrap').hide();
              $('#upis').show();
              $('#upis').prepend('<h3>Your time is '+ $('#timer').text()+"</h3>");
            }
          }else {
            k=0;
            break;

          }
        }
      }
    }
    var loop;
    function merenje_vremena(){
      var minutes = 0;
      var seconds = 0;
      var stotinke = 0;
      var timer = $('#timer');
      loop = setInterval(function() {
        if (stotinke != 100) {
          stotinke++;
        }else {
          if (seconds != 60) {
            seconds++;
            stotinke = 0;
          }else {
            minutes++,
            seconds = 0;
            stotinke = 0;
          }
        }
        $(timer).text(minutes+":"+seconds+":"+stotinke)
      },1)
    }

    $('#btn').on('click', function() {
      var nick = $('#username').val();
      var vr = $('#timer').text();
    if (nick != "") {

        $('#btn').off();
        $('#tabela').show();
        $('#upis').hide();
        $.post('obrada.php', {'nick': nick, 'vr': vr}, function(data) {
          $('#tabela').html(data);
        });

    }
    })
    })
