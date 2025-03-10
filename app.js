var listaAmigos = [];

function agregarAmigo() {
    var amigo = document.getElementById("amigo").value;
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    var amigosEnDoc = document.getElementById("listaAmigos");
    amigosEnDoc.insertAdjacentHTML("beforeend", "<li>"+amigo+"</li>")
}

function sortearAmigo () {
    var azar = numeroAleatorio(listaAmigos.length+1);
    var amigoSorteado = listaAmigos[azar];
    alert(amigoSorteado);
}

function numeroAleatorio(valor){
    return Math.floor(Math.random()*valor)
}