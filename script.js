const footballTeam={
  team: "The Police",
  year: 2026,
  headCoach:"Someone",
  players: [{name:"Klay",position:"forward", isCaptain:true},{name:"Muttaz",position:"defender", isCaptain:false},{name:"Kaz",position:"goalkeeper", isCaptain:false},{name:"Taha",position:"midfielder", isCaptain:false}]
}
let teamName=document.getElementById("team")
teamName.innerText=footballTeam.team
let year=document.getElementById("year")
year.innerText=footballTeam.year
let headCoach=document.getElementById("head-coach")
headCoach.innerText=footballTeam.headCoach
let cards=document.getElementById("player-cards")
function playersToShow(inputPosition){
  let players = inputPosition === "all"
    ? footballTeam.players
    : footballTeam.players.filter(({ position }) => position === inputPosition);
  return players
}
function handleCards(){
    let selected = document.getElementById("players");

    return playersToShow(selected.value).map(player=>`<div class="player-card">
        <h2>${player.isCaptain ?  `(Captain)${player.name}`: player.name}</h2>
        <p>Position: ${player.position}</p>
        </div>`
    
).join("")
}
let selected = document.getElementById("players");
cards.innerHTML=handleCards()
selected.addEventListener("change",()=>{
cards.innerHTML=handleCards()})