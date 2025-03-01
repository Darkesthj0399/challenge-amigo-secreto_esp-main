// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = []
function agregarAmigo() {
   
    let nombres=document.getElementById('amigo').value;
    if (nombres==="") {
        alert("Por favor ingrese un nombre valido");
        return}
    else {listaNombres.push(nombres)
        console.log(listaNombres)
        document.getElementById('amigo').value = "";
        actualizarAmigos()
        return listaNombres


    }
}


function actualizarAmigos () {

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    for (let i = 0; i < listaNombres.length; i++) {
         let item = document.createElement("li"); // Creamos un nuevo <li>
         item.textContent = listaNombres[i]; // Asignamos el nombre del amigo
        lista.appendChild(item); // Agregamos el <li> a la lista <ul>
    }
}


function  sortearAmigo() {
    if (listaNombres.length ==0) {
        alert("Ingresar nombres")
    }
    else {
        let NumAleat= Math.floor(Math.random()*listaNombres.length);
        let amigosecreto =listaNombres[NumAleat]
        let resultado = document.getElementById('resultado');
        resultado.textContent = `El amigo secreto es ${amigosecreto}`;
        listaNombres=[];
        actualizarAmigos();

    }

}






