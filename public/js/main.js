  var TempoInicial = $('#tempoDigitacao').text();
  var campo = $('.campoDeDigitacao');
  var mensagemInicial = $(".msg").text();
  var mensagem = $(".msg");
  var frase = $(".frase").text();


  $("document").ready(function(){
    InicializaFrase();
    InicializaContadores();
    InicializaCronometro();

    $('.reset').click(reiniciaJogo);
  });


  function InicializaFrase(){
  var numeroPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanhoFrase");

  tamanhoFrase.text(numeroPalavras);
  }


  function  InicializaContadores(){
    campo.on("input",function(){
      var conteudo = campo.val();
      var qtdPalavra = conteudo.split(/\S+/).length - 1;
      $(".contadorDePalavras").text(qtdPalavra);
      var qtdCaracteres = conteudo.length;
      $(".contadorDeCaracteres").text(qtdCaracteres);
    })
  }


  function InicializaCronometro(){
    campo.one("focus", function(){
      var tempoDigitacao = $("#tempoDigitacao").text();
      var idInterval =  setInterval(function(){
        tempoDigitacao--;
        $("#tempoDigitacao").text(tempoDigitacao);
        if(tempoDigitacao == 0){
          clearInterval(idInterval);
          finalizaJogo();
        }
      },1000);
    });
  }

  function finalizaJogo(){
    campo.toggleClass("campoDisabled");
    mensagem.addClass("msgDisabled");
    mensagem.text("GAME OVER");
    campo.addClass("bordaVermelha");
    campo.attr("disabled",true);
    inserePlacar();
  }

  function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    mensagem.text(mensagemInicial);
    $(".contadorDePalavras").text("0");
    $(".contadorDeCaracteres").text("0");
    $('#tempoDigitacao').text(TempoInicial);
    campo.toggleClass("campoDisabled");
    mensagem.removeClass("msgDisabled");
    campo.removeClass("bordaVerde");
    campo.removeClass("bordaVermelha");
    campo.addClass("bordaPreta");
    InicializaCronometro();
  }

  campo.on("input",function(){
    campo.removeClass("bordaPreta");
    var digitado = campo.val();
    var comparavel = frase.substr(0,digitado.length)
    if(digitado == comparavel){
    campo.addClass("bordaVerde");
    campo.removeClass("bordaVermelha");
    }else{
      campo.addClass("bordaVermelha");
      campo.removeClass("bordaVerde");
    }
  });
