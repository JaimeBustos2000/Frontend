let catalogo = [
    {
        codigo: 'P0001',
        categoria: 'Juegos de Tablero',
        nombre: 'Tablero de Damas',
        descripcion: 'Tablero para el juego de damas. Incluye un tablero y 24 fichas repartidas entre el color blanco y negro. Tablero se convierte en maleta para guardar las fichas.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0001.png',
        disponibilidad: 10,
        tiempo: 1
    },
    {
        codigo: 'P0002',
        categoria: 'Juegos de Tablero',
        nombre: 'Tablero de Ajedrez',
        descripcion: 'Tablero para jugar Ajedrez. Incluye un tablero y con el set de fichas completo tanto de color blanco como negro. Tablero se convierte en maleta para guardar las fichas.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0002.jpg',
        disponibilidad: 10,
        tiempo: 1
    },
    {
        codigo: 'P0003',
        categoria: 'Juegos de Rol',
        nombre: 'Dungeons & Dragons 5ed, Manual del Jugador',
        descripcion: 'Manual del jugador para la 5ta edición del juego de rol Dungeons & Dragons. Tapa dura y en español.',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0003.jpg',
        disponibilidad: 3,
        tiempo: 5
    },
    {
        codigo: 'P0004',
        categoria: 'Juegos de Estrategia',
        nombre: 'Scythe',
        descripcion: 'Ambientado en una realidad paralela de 1920, Scythe es un juego de estrategia tipo 4x para 1 a 5 jugadores (ampliado a 7 jugadores en la expansión “Invasores de tierras lejanas“).',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0004.png',
        disponibilidad: 7,
        tiempo: 3
    },
    {
        codigo: 'P0005',
        categoria: 'Juego Creativo',
        nombre: 'Dixit',
        descripcion: '¡Dixit es un creativo juego de deducción, bellamente ilustrado, donde tu imaginación crea increíbles historias! 84 cartas con bellas ilustraciones para que los adultos se luzcan con su agudeza y los pequeños sorprendan con su imaginación. ',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0005.png',
        disponibilidad: 12,
        tiempo: 5
    },
    {
        codigo: 'P0006',
        categoria: 'Juegos Competitivo',
        nombre: 'Aventureros al Tren (Ticket to Ride)',
        descripcion: '¡Aventureros al Tren! es un juego de aventuras en tren. Los jugadores acumulan cartas de ciertos tipos de vagones que les permiten conectar diferentes ciudades a lo largo y ancho de Norteamérica. Mientras más largos son los recorridos, más puntos se ganan.',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0006.png',
        disponibilidad: 10,
        tiempo: 5
    },
    {
        codigo: 'P0007',
        categoria: 'Juegos de Cartas',
        nombre: 'Dobble',
        descripcion: 'Dobble un juego con más de 50 símbolos, 55 cartas, con uno, y solamente un símbolo idéntico entre cada carta. ¿Serás capaz de descubrirlo?',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0007.png',
        disponibilidad: 7,
        tiempo: 3
    },
    {
        codigo: 'P0008',
        categoria: 'Juegos de Estrategia',
        nombre: 'Catan, El Juego',
        descripcion: 'Catan es un juego de mesa para toda la familia que se ha convertido en un fenómeno mundial. Desde su aparición en Alemania ha vendido más que muchos de los juegos más tradicionales. Se trata de un juego que aúna la estrategia, la astucia y la capacidad para negociar y en el que los jugadores tratan de colonizar una isla, Catán, rica en recursos naturales.',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0008.png',
        disponibilidad: 2,
        tiempo: 5
    },
    {
        codigo: 'P0009',
        categoria: 'Juegos Cooperativos',
        nombre: 'Arkham Horror',
        descripcion: 'Arkham Horror es un juego cooperativo. Todos los jugadores colaboran entre sí y ganan o pierden la partida como equipo. Cada jugador controla a un intrépido investigador, uno de los pocos individuos excepcionales que están al tanto del peligro que se cierne sobre nuestro mundo. Los investigadores deben explorar la ciudad para descubrir lugares, personas y criaturas de naturaleza tanto ordinaria como sobrenatural.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0009.png',
        disponibilidad: 6,
        tiempo: 3
    },
    {
        codigo: 'P0010',
        categoria: 'Juegos de Cartas',
        nombre: 'Timeline - Eventos',
        descripcion: '¿Acaso Julio César había sido nombrado dictador cuando ocurrió el Gran Incendio de Roma? ¿Había comenzado ya la construcción de la Gran Muralla China? ¿La Fiebre del Oro de California tuvo lugar al mismo tiempo? Para ganar la partida, sé el primero en colocar correctamente todas tus cartas.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0010.png',
        disponibilidad: 15,
        tiempo: 3
    },
];

let catalogo_original = [
    {
        codigo: 'P0001',
        categoria: 'Juegos de Tablero',
        nombre: 'Tablero de Damas',
        descripcion: 'Tablero para el juego de damas. Incluye un tablero y 24 fichas repartidas entre el color blanco y negro. Tablero se convierte en maleta para guardar las fichas.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0001.png',
        disponibilidad: 10,
        tiempo: 1
    },
    {
        codigo: 'P0002',
        categoria: 'Juegos de Tablero',
        nombre: 'Tablero de Ajedrez',
        descripcion: 'Tablero para jugar Ajedrez. Incluye un tablero y con el set de fichas completo tanto de color blanco como negro. Tablero se convierte en maleta para guardar las fichas.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0002.jpg',
        disponibilidad: 10,
        tiempo: 1
    },
    {
        codigo: 'P0003',
        categoria: 'Juegos de Rol',
        nombre: 'Dungeons & Dragons 5ed, Manual del Jugador',
        descripcion: 'Manual del jugador para la 5ta edición del juego de rol Dungeons & Dragons. Tapa dura y en español.',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0003.jpg',
        disponibilidad: 3,
        tiempo: 5
    },
    {
        codigo: 'P0004',
        categoria: 'Juegos de Estrategia',
        nombre: 'Scythe',
        descripcion: 'Ambientado en una realidad paralela de 1920, Scythe es un juego de estrategia tipo 4x para 1 a 5 jugadores (ampliado a 7 jugadores en la expansión “Invasores de tierras lejanas“).',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0004.png',
        disponibilidad: 7,
        tiempo: 3
    },
    {
        codigo: 'P0005',
        categoria: 'Juego Creativo',
        nombre: 'Dixit',
        descripcion: '¡Dixit es un creativo juego de deducción, bellamente ilustrado, donde tu imaginación crea increíbles historias! 84 cartas con bellas ilustraciones para que los adultos se luzcan con su agudeza y los pequeños sorprendan con su imaginación. ',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0005.png',
        disponibilidad: 12,
        tiempo: 5
    },
    {
        codigo: 'P0006',
        categoria: 'Juegos Competitivo',
        nombre: 'Aventureros al Tren (Ticket to Ride)',
        descripcion: '¡Aventureros al Tren! es un juego de aventuras en tren. Los jugadores acumulan cartas de ciertos tipos de vagones que les permiten conectar diferentes ciudades a lo largo y ancho de Norteamérica. Mientras más largos son los recorridos, más puntos se ganan.',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0006.png',
        disponibilidad: 10,
        tiempo: 5
    },
    {
        codigo: 'P0007',
        categoria: 'Juegos de Cartas',
        nombre: 'Dobble',
        descripcion: 'Dobble un juego con más de 50 símbolos, 55 cartas, con uno, y solamente un símbolo idéntico entre cada carta. ¿Serás capaz de descubrirlo?',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0007.png',
        disponibilidad: 7,
        tiempo: 3
    },
    {
        codigo: 'P0008',
        categoria: 'Juegos de Estrategia',
        nombre: 'Catan, El Juego',
        descripcion: 'Catan es un juego de mesa para toda la familia que se ha convertido en un fenómeno mundial. Desde su aparición en Alemania ha vendido más que muchos de los juegos más tradicionales. Se trata de un juego que aúna la estrategia, la astucia y la capacidad para negociar y en el que los jugadores tratan de colonizar una isla, Catán, rica en recursos naturales.',
        ubicacion: 'Santiago Centro',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0008.png',
        disponibilidad: 2,
        tiempo: 5
    },
    {
        codigo: 'P0009',
        categoria: 'Juegos Cooperativos',
        nombre: 'Arkham Horror',
        descripcion: 'Arkham Horror es un juego cooperativo. Todos los jugadores colaboran entre sí y ganan o pierden la partida como equipo. Cada jugador controla a un intrépido investigador, uno de los pocos individuos excepcionales que están al tanto del peligro que se cierne sobre nuestro mundo. Los investigadores deben explorar la ciudad para descubrir lugares, personas y criaturas de naturaleza tanto ordinaria como sobrenatural.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0009.png',
        disponibilidad: 6,
        tiempo: 3
    },
    {
        codigo: 'P0010',
        categoria: 'Juegos de Cartas',
        nombre: 'Timeline - Eventos',
        descripcion: '¿Acaso Julio César había sido nombrado dictador cuando ocurrió el Gran Incendio de Roma? ¿Había comenzado ya la construcción de la Gran Muralla China? ¿La Fiebre del Oro de California tuvo lugar al mismo tiempo? Para ganar la partida, sé el primero en colocar correctamente todas tus cartas.',
        ubicacion: 'Renca',
        imagen: '/Evaluaciones/Sumativa 3/assets/p0010.png',
        disponibilidad: 15,
        tiempo: 3
    },
];

let carritoProductos = []
let logueado = false

function conectar() {
    let usuario = document.getElementById('username').value
    let del_buttons = document.getElementById('del-add')
    del_buttons.value = 'Añadir/eliminar'

    if (usuario == '') {
        window.alert('No se puede ingresar un nombre vacio')

    }
    else {
        document.getElementById('nickname-user').innerHTML = 'Bienvenido ' + usuario
        document.getElementById('form').style.display = 'none'
        document.getElementById('disconnect').style.display = 'block'
        document.getElementById('btn-carrito').style.display = 'block'
        document.getElementById('carrito').hidden = false
        document.getElementById('sesion').innerHTML = ''
        document.getElementById('del-add').innerHTML = 'Stock'
        logueado = true
        mostrarCatalogo()
    }
}

function desconectar() {
    document.getElementById('nickname-user').innerHTML = 'Bienvenido nickname'
    document.getElementById('disconnect').style.display = 'none'
    document.getElementById('form').style.display = 'block'
    document.getElementById('btn-carrito').style.display = 'none'
    document.getElementById('carrito').hidden = true
    document.getElementById('username').value = ''
    logueado = false
    catalogo = catalogo_original
    carritoProductos = []
    let carro = document.getElementById('carrodecompra')
    carro.innerHTML = ''
    mostrarCatalogo()
}

function mostrarCatalogo() {
    let tablaCatalogo = document.getElementById("catalogo");

    tablaCatalogo.innerHTML = '';

    catalogo.forEach(function (item, index) {
        if (logueado === true) {
            tablaCatalogo.innerHTML += `<tr>
                    <td>${index + 1}</td>
                    <td><img src="${item.imagen}" width="150"></td>
                    <td>${item.categoria}</td>
                    <td>${item.nombre}</td>
                    <td>${item.ubicacion}</td>
                    <td>${item.descripcion}</td>
                    <td align="center">${item.disponibilidad}</td>
                    <td align="center">
                        <button type="button" class="añadir" onclick="añadir(${index}, false)">+<i class="fas fa-pen"></i></button>
                        <button type="button" class="menos" onclick="añadir(${index}, true)">-<i class="fas fa-pen"></i></button>
                    </td>
                </tr>`;
        }
        else {
            tablaCatalogo.innerHTML += `<tr>
                    <td>${index + 1}</td>
                    <td><img src="${item.imagen}" width="150"></td>
                    <td>${item.categoria}</td>
                    <td>${item.nombre}</td>
                    <td>${item.ubicacion}</td>
                    <td>${item.descripcion}</td>
                    <td align="center">${item.disponibilidad}</td>
                    <td align="center">
                    </td>
                </tr>`
        }
    });
}


function añadir(indice, eliminar) {

    let producto = catalogo[indice];
    let carro = document.getElementById('carrodecompra')

    let productoEnCarrito = carritoProductos.find(item => item.codigo === producto.codigo);

    if (productoEnCarrito) {
        if (eliminar) {
            productoEnCarrito.cantidad--;
            producto.disponibilidad++;
            if (productoEnCarrito.cantidad == 0) {
                carritoProductos = carritoProductos.filter(item => item.codigo !== producto.codigo);
            }
        } else {
            if (producto.disponibilidad > 0) {
                producto.disponibilidad--;
                productoEnCarrito.cantidad++;
            }
            else {
                window.alert('No hay stock disponible');
                return;
            }
        }

    } else {
        if (carritoProductos.length > 0 && carritoProductos[0].ubicacion !== producto.ubicacion) {
            window.alert('No se puede añadir productos de diferentes ubicaciones, por favor escoja otro producto');
        } else {
            if (producto.disponibilidad == 0) {
                window.alert('No hay stock disponible');
                return;
            } else if (!eliminar) {
                producto.disponibilidad--;
                carritoProductos.push({
                    codigo: producto.codigo,
                    nombre: producto.nombre,
                    ubicacion: producto.ubicacion,
                    cantidad: 1,
                    tiempo: producto.tiempo
                });
            }
        }
    }


    carro.innerHTML = '';
    carritoProductos.forEach((producto, index) => {
        carro.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${producto.nombre}</td>
            <td align="end">${producto.cantidad}
            <button type="button" class="del-carrito" onclick="deletes(${index})">Eliminar<i class="fas fa-pen"></i></button>
            </td>
        </tr>`;
    })
    let tablaCatalogo = document.getElementById("catalogo");
    tablaCatalogo.innerHTML = '';
    // Actualizar el catálogo
    mostrarCatalogo();
}

function deletes(index) {
    let carro = document.getElementById('carrodecompra')
    let productoEliminado = carritoProductos[index];

    let productoCatalogo = catalogo.find(item => item.codigo === productoEliminado.codigo);
    if (productoCatalogo) {
        productoCatalogo.disponibilidad += productoEliminado.cantidad;
    }

    carritoProductos.splice(index, 1);
    carro.innerHTML = '';

    carritoProductos.forEach((producto, index) => {
        carro.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${producto.nombre}</td>
            <td align="end">${producto.cantidad}
            <button type="button" class="del-carrito" onclick="deletes(${index},carritoProductos)">Eliminar<i class="fas fa-pen"></i></button>
            </td>
        </tr>`;
    })
    let tablaCatalogo = document.getElementById("catalogo");
    tablaCatalogo.innerHTML = '';
    // Actualizar el catálogo
    mostrarCatalogo();
}