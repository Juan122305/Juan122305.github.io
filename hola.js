function autorizar(){
    const mensaje = "informacion robada";
    console.log(mensaje);

    const spotifyURL = "https://accounts.spotify.com/authorize?response_type=code&client_id=60c9a704ce204c328b9a028b8c940f8e&scope=user-top-read&redirect_uri=http://127.0.0.1:5500/Src/hola.html";

    window.location.href =spotifyURL;
}

function autorizarToken(){

    const code = new URLSearchParams(window.location.search).get("code");
    console.log(code);
    requestToken8(code);




    

}
 async function requestToken8(code){
    const urlspotify = "https://accounts.spotify.com/api/token";
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " +
        btoa("60c9a704ce204c328b9a028b8c940f8e:59e05d00b3bf4810b8049ec1def37223")
    };
    const body = {grant_type: "authorization_code", code:code , redirect_uri: "http://127.0.0.1:5500/Src/hola.html"};
    const params = {
        method: "POST",
        headers: headers,
        body: new URLSearchParams(body)
    };
    fetch(urlspotify, params)
    .then(response => response.json())
    .then(async data => {
        console.log(data);
        const token = data.access_token;
        await requestArtist(token);
        
    })
    .catch(error => console.error(error));

}
 function requestArtist(token){
    const urlspotify = "https://api.spotify.com/v1/me/top/artists";
    const headers = {
        Authorization: "Bearer " + token
    };
    const options = {
        method: "GET",
        headers: headers
    };
    fetch(urlspotify, options).then((response) => response.json()
        
        
        
    ).then((data) => {
        console.log(data);
        const artistas = data.items;
        console.log(artistas);
        artistas.forEach((artista) => {
            const artistName = document.createElement("p");
            artistName.innerHTML = `Nombre del artista: ${artista.name}`;
            
            document.body.appendChild(artistName);
        });
    })
    
 }