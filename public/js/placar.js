  $('.mostraPlacar').click(mostraPlacar);
  function inserePlacar(){
    var corpoTabela = $('.placar').find("tbody");
    var usuario = "Bruno";
    var numeroPalavras = $('.contadorDePalavras').text();
    var linha = novaLinha(usuario,numeroPalavras);
    linha.find('.botaRemover').click(removeLinha);
    corpoTabela.prepend(linha);
  }

  function novaLinha(usuario,numeroPalavras){
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavra = $('<td>').text(numeroPalavras);
    var colunaRemover = $('<td>');

    var link = $('<a>').addClass('botaRemover').attr("href","#");
    var icone = $("<i>").addClass('small').addClass('material-icons').text("delete");

    link.append(icone);

    colunaRemover.append(link)

    linha.append(colunaUsuario);
    linha.append(colunaPalavra);
    linha.append(colunaRemover);
    return linha;
  }
  function removeLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(200);
    setTimeout(function () {
        linha.remove();
    }, 200);

  }

  function mostraPlacar(){
    $('.placar').slideToggle(200);
  }
