let precio=0;

// function saludar(nombre) {
//     let opcion=prompt ('Genial '+nombre+' te presentamos nuestros servicios \n\n 1.- Asesoría de marketing \n 2.-Diseño gráfico\n 3.-Gestión de redes\n\n Selecciona el que se adapte a tus necesidades \n\n Para salir presiona x');
//     }
    

    
//     let nombreUser=prompt('Bienvenido a Nueve Agency, es un gusto tenerte con nosotros ¿Cuál es tu nombre?');
    
//     saludar(nombreUser);

nombre = prompt ('Bienvenido a Nueve Agency, es un gusto tenerte con nosotros ¿Cuál es tu nombre?');

let opcion=prompt ('Genial '+nombre+' te presentamos nuestros servicios \n\n 1.- Asesoría de marketing \n 2.-Diseño gráfico\n 3.-Gestión de redes\n\n Selecciona el que se adapte a tus necesidades \n\n Para salir presiona x');

while (opcion != 'x' && opcion != 'X') 

{
    switch (opcion) {

    case '1':

    precio=500;

    let asesoria= prompt ('Empezamos conociendo tu caso, lo estudiamos y planteamos los planes de acción de acuerdo con el perfil de tus clientes actuales y/o potenciales. Buscamos la mejor manera de potenciar la identidad de tu empresa para poder comunicar todo aquello que la hace diferente de tus competidores \n\n Precio: USD 500 \n\n ¿Te gustaría agregarlo a tu carrito?');
        
        if (asesoria=='si')
            {
            alert ('Se ha agregado exitosamente');
            let agregar= prompt('¿Deseas agregar algo más?');
                if (agregar=='si') {
                    opcion=prompt ('Genial '+nombre+' Puedes agregar estos servicios \n\n 2.-Diseño gráfico\n 3.-Gestión de redes\n\n Selecciona el que se adapte a tus necesidades \n\n Para salir presiona x');
                } else {
                    alert ('El total de tu compra es: ' + precio);
                }
                break;
                }
        
        else if (asesoria=='no') {
            alert ('Gracias por tu interés');
        }

        break;

    case '2': 

    precio=400;

    let diseno= prompt ('La imagen de tu marca es muy importante, por eso te ofrecemos un pack completo de diseño, que incluye identidad de marca, material POP y diseños para tus redes sociales \n\n Precio: USD 400 \n\n ¿Te gustaría agregarlo a tu carrito?');
        
        if (diseno=='si') {
            alert ('Se ha agregado exitosamente');
            let agregar2= prompt('¿Deseas agregar algo más?');
                if (agregar2=='si') {
                    opcion=prompt ('Genial '+nombre+' Puedes agregar estos servicios \n\n 1.-Asesoría de Marketing \n 3.-Gestión de redes\n\n Selecciona el que se adapte a tus necesidades \n\n Para salir presiona x');
                } else {
                    alert ('El total de tu compra es: ' + precio);
                }
                
        } else {
            alert ('Gracias por tu interés')
        }
        
        break;

    case '3':

    precio=1000;
        
    let gestion= prompt ('Tus redes sociales son tu casa en el mundo digital \n\n Precio: USD 1000 \n\n ¿Te gustaría agregarlo a tu carrito?');
        
    if (gestion=='si') {
        alert ('Se ha agregado exitosamente');
        let agregar3= prompt('¿Deseas agregar algo más?');
            if (agregar3=='si') {
                opcion=prompt ('Genial '+nombre+' Puedes agregar estos servicios \n\n 1.-Asesoría de Marketing \n 2.-Diseño gráfico\n\n Selecciona el que se adapte a tus necesidades \n\n Para salir presiona x');
            } else {
                alert ('El total de tu compra es: ' + precio);
            } 
            
    } else {
        alert ('Gracias por tu interés')
    }
        

        break;

    default:
        alert ('Ingresaste una opción inválida');
        opcion=prompt ('Genial '+nombre+' te presentamos nuestros servicios \n\n 1.- Asesoría de marketing \n 2.-Diseño gráfico\n 3.-Gestión de redes\n\n Selecciona el que se adapte a tus necesidades \n\n Para salir presiona x');
        
        break;
}
}


alert ('Hasta luego');

