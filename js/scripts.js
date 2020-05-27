$(function (){
  $('.galeria .conteudo-imagem').on('click', function(){
    $('modal').modal;
    var rota_imagem = ($(this).find('img').attr('src'));
    $('#imagem-modal').attr('src', rota_imagem);
  });

  $('#modal').on('click', function(){
    $('#modal').modal('hide');
  })
})