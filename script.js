document.addEventListener('DOMContentLoaded', function() {
    // Agregar un nuevo jugador al hacer clic en el botón "Agregar Jugador"
    document.getElementById('btn-agregar').addEventListener('click', function() {
        var jugador = prompt('Ingresa el nombre del jugador:');

        if (jugador) {
            var listaJugadores = document.getElementById('jugadores-lista');
            var nuevoJugador = document.createElement('li');
            nuevoJugador.textContent = jugador;
            nuevoJugador.classList.add('jugador');
            listaJugadores.appendChild(nuevoJugador);
        }
    });

    // Remover el último jugador al hacer clic en el botón "Remover Último Jugador"
    document.getElementById('btn-remover').addEventListener('click', function() {
        var listaJugadores = document.getElementById('jugadores-lista');
        var ultJugador = listaJugadores.lastElementChild;

        if (ultJugador) {
            listaJugadores.removeChild(ultJugador);
        }
    });

    // Cambiar estilos al hacer clic en el botón "Cambiar Estilos"
    document.getElementById('btn-estilos').addEventListener('click', function() {
        document.body.classList.toggle('modo-oscuro');
    });

    // Cambiar el escudo al hacer clic en el botón "Cambiar Escudo"
    var escudoCambiado = false; // Variable para hacer seguimiento del estado del escudo
    document.getElementById('btn-cambiar-escudo').addEventListener('click', function() {
        var escudo = document.getElementById('escudo');

        if (!escudoCambiado) {
            escudo.src = 'img/escudo2.png';
            escudoCambiado = true;
        } else {
            escudo.src = 'img/escudo1.png';
            escudoCambiado = false;
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        // ...

        // Ejecutar una función cada cierto intervalo de tiempo con setInterval
        setInterval(function() {
            // Código a ejecutar
            console.log('Esta función se ejecutará cada 5 segundos');
        }, 30000); // Intervalo de 30 segundos (5000 milisegundos)

        // Ejecutar una función después de cierto tiempo con setTimeout
        setTimeout(function() {
            // Código a ejecutar después de 3 segundos
            console.log('Esta función se ejecutará después de 3 segundos');
        }, 30000); // Tiempo de espera de 30 segundos (3000 milisegundos)
    });
    // Función para mostrar la notificación
    function mostrarNotificacion() {
        alert("Recuerde que tenemos 14");
    }

    // Llamar a la función cada 30 segundos (30000 milisegundos)
        setInterval(mostrarNotificacion, 30000);

        // Obtener referencias a los elementos del formulario y la lista de comentarios
        const commentForm = document.getElementById('comment-form');
        const commentList = document.getElementById('comment-list');

    // Escuchar el evento de envío del formulario
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Obtener los valores de los campos de nombre y comentario
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');
        const name = nameInput.value;
        const comment = commentInput.value;

        // Crear un nuevo elemento de comentario
        const newComment = document.createElement('div');
        newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;

        // Agregar el nuevo comentario a la lista
        commentList.appendChild(newComment);

        // Limpiar los campos de nombre y comentario
        nameInput.value = '';
        commentInput.value = '';
    });


});



