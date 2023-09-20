$(document).ready(function() {

    $('#formTarefa').submit(function(event) {
        event.preventDefault(); 

        const nomeTarefa = $('#nomeTarefa').val();
        if (nomeTarefa.trim() === '') {
        alert('Por favor, insira o nome da tarefa.');
        return;
    }

        const itemLista = $('<li>').text('- ' + nomeTarefa);  
    itemLista.click(function() {
        $(this).toggleClass('concluida');
    });

        $('#listaTarefas').append(itemLista);
        $('#nomeTarefa').val('');
    });
});