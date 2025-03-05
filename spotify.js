async function veASpotify() {
    let r = await fetch("https://accounts.spotify.com/api/token",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: "60c9a704ce204c328b9a028b8c940f8e",
            client_secret: '59e05d00b3bf4810b8049ec1def37223' 
        })
    });

    

    let rJSON = await r.json();
    console.log(rJSON);

    const token= rJSON.access_token;
    console.log(token);
    const url1= "https://api.spotify.com/v1/artists/{52iwsT98xCoGgiGntTiR7K}";

    const token1= rJSON.access_token;
    console.log(token1);
    const url2= "https://api.spotify.com/v1/artists/{52iwsT98xCoGgiGntTiR7K}/top-tracks";

    const respuesta1= await fetch(url1, {method: "GET", headers: {"Authorization": "Bearer ${token}"}})
    
    const respuesta1JSON= await respuesta1.json();
    console.log(respuesta1JSON);
}