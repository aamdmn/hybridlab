console.log('Hello');

function Start() {
  alert('Hra sa začína!' + '\n' + 'Vyber si si pozíciu na ktorú chceš hrat.');
  Play();
}

function Play() {
  const gesta = [(kamen = 'kamen'), (papier = 'papier'), (noznice = 'nožnice')];

  let robot = Math.floor(Math.random() * gesta.length) + 1;

  let pozicia = prompt('Vyber si pozíciu: 1 - kamen, 2 - papier, 3 - nožnice');

  console.log(gesta[robot - 1]);

  score_robot = 0;
  score_player = 0;

  let humanScore = document.getElementById('human');
  let robotScore = document.getElementById('robot');

  if (pozicia == 1 || pozicia == 2 || pozicia == 3) {
    if (pozicia == robot) {
      alert('Remíza');
    } else if (pozicia == 1 && robot == 2) {
      alert('Vyhráva robot!');
      robotScore.innerHTML = score_robot + 1;
    } else if (pozicia == 1 && robot == 3) {
      alert('Vyhráva človek!');
    } else if (pozicia == 2 && robot == 1) {
      alert('Vyhráva človek!');
    } else if (pozicia == 3 && robot == 1) {
      alert('Vyhráva robot!');
    } else if (pozicia == 3 && robot == 2) {
      alert('Vyhráva človek!');
    } else if (pozicia == 2 && robot == 3) {
      alert('Vyhráva robot!');
      //add one point to robot
    }
  }
}
