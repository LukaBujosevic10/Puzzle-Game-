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

  //Ubacivanje polja i brojeva u glavni
  var x = Math.floor((Math.random() * 15) + 1);
  var niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


  var n = 0;
    for (var i = 0; i <= 15; i++) {
      var rand = Math.floor(Math.random() * niz.length);
      if (i == x) {
          $('#wrap').append('<div id="prazno"><p style="display: none;">0</p></div>');
      }else {
        $('#wrap').append('<div class="puno">'+niz[rand]+'</div>');
        niz.splice(rand, 1);
      }
        if (i==15) {
          luka = $('#wrap').children();
          for (var i = 0; i < 16; i++) {
            unutra[i] = $(luka[i]).text();
            //unutra = $(tekst).text()

          }
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
  z = $('#wrap').children();
  for (var i = 0; i < 16; i++) {
    vrednost[i] =$(z[i]).text();
  }
  var k = 0;
    function lociranje() {
      var praz_div = $('#prazno');


      var la = "0";
      mesto_kliknutog = vrednost.indexOf($(pozicija).text());
      mesto_praznog = vrednost.indexOf($(praz_div).text());

      vrednost[mesto_praznog] = $(pozicija).text();
      vrednost[mesto_kliknutog] = "0";

      if (vrednost[15] == "0") {
        for (var i = 0; i < 15; i++) {
          if (vrednost[i] == i+1+"") {
            k++;
            if (k == 1) {
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
    var minutes = 0;
    var seconds = 0;
    var stotinke = 0;
    var timer = $('#timer');
    var loop = setInterval(function() {
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
