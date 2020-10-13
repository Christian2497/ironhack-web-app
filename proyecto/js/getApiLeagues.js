/* 
function getLeagues(){
} */

async function getLeaguesAA() {
const section = document.querySelector(".leagues-list");

for(let i = 0; i < 11; i++){
    try{
        const response = await fetch(`https://apiclient.besoccerapps.com/scripts/api/api.php?key=01da72449d29a7702aba403ec3fb4e98&tz=Europe/Madrid&format=json&req=categories&filter=all`);

        const data = await response.json();

        const article = document.createElement('article');

        article.innerHTML = `
        <img src="${data.logo}" alt="${data.name}"/>
        <h3>${data.name}</h3>        
        `;

        section.appendChild(article);
    } catch(err){
        console.log(err);
    }
}

}

getLeaguesAA();