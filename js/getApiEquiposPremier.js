"use strict";


async function apiEquiposPremier() {
    const section = document.querySelector(".equipos-list");


    const response = await fetch("https://cors-anywhere.herokuapp.com/https://apiclient.besoccerapps.com/scripts/api/api.php?key=01da72449d29a7702aba403ec3fb4e98&tz=Europe/Madrid&format=json&req=teams&league=10&year=2021")
    const equipos = await response.json();

    const equiposLiga = equipos.team.map((oneTeam) => {
        const equipo = document.createElement("div");
        equipo.innerHTML = `
        <img src="${oneTeam.shield_big} alt="${oneTeam.fullName}"/>
        <h3> ${oneTeam.fullName}</h3>
        `
        return section.appendChild(equipo);
    })  
}

apiEquiposPremier()
