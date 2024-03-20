$(document).ready(function () {
    $('button.expandir-boton-historia').click(function () {
        let sectionHistoria = $(this).closest('section.section-historia');
        let flecha = $(this).find('i');

        sectionHistoria.find('.contenido-adicional-historia').slideToggle(function () {
            sectionHistoria.toggleClass('abierto');

            if (sectionHistoria.hasClass('abierto')) {
                flecha.css('transform', 'rotate(180deg)');
            } else {
                flecha.css('transform', 'rotate(0deg)');
            }
        });
    });
});

$(document).ready(function () {
    $('button.expandir-boton-menu').click(function () {
        let sectionMenu = $(this).closest('section.section-menu');
        let flecha = $(this).find('i');

        sectionMenu.find('.contenido-adicional-menu').slideToggle(function () {
            sectionMenu.toggleClass('abierto');

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

    let verMasLabel = $(button).find('.ver-mas-label');

    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

function toggleContentPostres(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-postres');
    contenidoAdicional.slideToggle();

    let verMasLabel = $(button).find('.ver-mas-label');

    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

function toggleContentDesayunosSolidos(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-desayunoss');
    contenidoAdicional.slideToggle();

    let verMasLabel = $(button).find('.ver-mas-label');

    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

function toggleContentSandwiches(button) {
    let contenidoAdicional = $(button).closest('.menu-item').find('.contenido-adicional-sandwiches');
    contenidoAdicional.slideToggle();

    let verMasLabel = $(button).find('.ver-mas-label');

    verMasLabel.text(verMasLabel.text() === "+" ? "-" : "+");
}

$(document).ready(function () {
    $('button.expandir-boton-ubicacion').click(function () {
        let sectionUbicacion = $(this).closest('section.section-ubicacion');
        let flecha = $(this).find('i');

        sectionUbicacion.find('.contenido-adicional-ubicacion').slideToggle(function () {
            sectionUbicacion.toggleClass('abierto');

            if (sectionUbicacion.hasClass('abierto')) {
                flecha.css('transform', 'rotate(180deg)');
            } else {
                flecha.css('transform', 'rotate(0deg)');
            }
        });
    });
});
