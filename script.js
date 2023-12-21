$(document).ready(function() {
    // Agregar un evento de clic a los botones de expansión de la historia
    $('button.expandir-boton-historia').click(function() {
        let sectionHistoria = $(this).closest('section.section-historia');
        let flecha = $(this).find('i'); // Selecciona la flecha en el botón

        sectionHistoria.find('.contenido-adicional-historia').slideToggle(function() {
            // Callback que se ejecuta después de la animación de desplazamiento
            sectionHistoria.toggleClass('abierto'); // Alterna la clase "abierto" en el section padre

            // Cambiar la rotación de la flecha (de 0 a 180 grados) al hacer clic
            if (sectionHistoria.hasClass('abierto')) {
                flecha.css('transform', 'rotate(180deg)');
            } else {
                flecha.css('transform', 'rotate(0deg)');
            }
        });
    });
});

$(document).ready(function() {
    // Agregar un evento de clic a los botones "expandir-boton-menu"
    $('button.expandir-boton-menu').click(function() {
        let sectionMenu = $(this).closest('section.section-menu');
        let flecha = $(this).find('i'); // Selecciona la flecha en el botón

        sectionMenu.find('.contenido-adicional-menu').slideToggle(function() {
            // Callback que se ejecuta después de la animación de desplazamiento
            sectionMenu.toggleClass('abierto'); // Alterna la clase "abierto" en el section padre

            // Cambiar la rotación de la flecha (de 0 a 180 grados) al hacer clic
            if (sectionMenu.hasClass('abierto')) {
                flecha.css('transform', 'rotate(180deg)');
            } else {
                flecha.css('transform', 'rotate(0deg)');
            }
        });
    });
});


function toggleContentDesayunosBebibles(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-desayunosb');
    contenidoAdicional.slideToggle();

    // Obtén el elemento <span> con la clase "ver-mas-label"
    let verMasLabel = $(button).find('.ver-mas-label');

    // Cambia el contenido del <span> entre "+" y "-"
    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

function toggleContentPostres(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-postres');
    contenidoAdicional.slideToggle();

    // Obtén el elemento <span> con la clase "ver-mas-label"
    let verMasLabel = $(button).find('.ver-mas-label');

    // Cambia el contenido del <span> entre "+" y "-"
    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

function toggleContentDesayunosSolidos(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-desayunoss');
    contenidoAdicional.slideToggle();

    // Obtén el elemento <span> con la clase "ver-mas-label"
    let verMasLabel = $(button).find('.ver-mas-label');

    // Cambia el contenido del <span> entre "+" y "-"
    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

function toggleContentSandwiches(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-sandwiches');
    contenidoAdicional.slideToggle();

    // Obtén el elemento <span> con la clase "ver-mas-label"
    let verMasLabel = $(button).find('.ver-mas-label');

    // Cambia el contenido del <span> entre "+" y "-"
    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

$(document).ready(function() {
    // Agregar un evento de clic a los botones "expandir-boton-menu"
    $('button.expandir-boton-ubicacion').click(function() {
        let sectionUbicacion = $(this).closest('section.section-ubicacion');
        let flecha = $(this).find('i'); // Selecciona la flecha en el botón

        sectionUbicacion.find('.contenido-adicional-ubicacion').slideToggle(function() {
            // Callback que se ejecuta después de la animación de desplazamiento
            sectionUbicacion.toggleClass('abierto'); // Alterna la clase "abierto" en el section padre

            // Cambiar la rotación de la flecha (de 0 a 180 grados) al hacer clic
            if (sectionUbicacion.hasClass('abierto')) {
                flecha.css('transform', 'rotate(180deg)');
            } else {
                flecha.css('transform', 'rotate(0deg)');
            }
        });
    });
});
