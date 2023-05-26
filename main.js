
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const inputNomeDaTarefa = $('#nome-tarefa').val();
        const addNaLista = $('#lista-tarefa');
        
        $('<li>').text(inputNomeDaTarefa).appendTo(addNaLista) ;
    })
    
    $('#lista-tarefa').on('click','li', function (){
    $(this).toggleClass('item-completado');
    })

})
