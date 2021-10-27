var url = 'https://pokeapi.co/api/v2/pokemon/18';

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    var container = document.getElementById('app'); 
    container.innerHTML = `
    <div class="card">
        <img src="${data.sprites.front_shiny}" alt="" class='card'></img>
        <p class = "name">${data.name} </p>
        <p class = "id"> ID: ${data.id} </p>
        <p class = "types">${data.types[0].type.name} </p>
        <p class = "types">${data.types[1].type.name} </p>
    </div>
`;
})