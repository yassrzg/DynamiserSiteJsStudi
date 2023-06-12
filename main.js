

let joueur = 1;
let scoreJoueur1 = 0;
let scoreJoueur2 = 0;
let scoreGlobalJoueur1 = 0; 
let scoreGlobalJoueur2 = 0;// Nouvelle variable pour sauvegarder le score global du joueur 1
let alertInfo = document.querySelector('#alert');
let player1 = document.querySelector('.p1');
let player2 = document.querySelector('.p2');

function jouer() {
    if (joueur === 1) {
      console.log("Joueur 1, c'est à vous de jouer !");
      
      let resultat = Math.floor(Math.random() * 6) + 1;
      document.querySelector(".dice").textContent = "";
      document.querySelector("#dice").classList.add("rotate");
      setTimeout(function() {
        document.querySelector("#dice").classList.remove("rotate");
    
        // Afficher le résultat du dé dans le span avec la classe "dice"
        document.querySelector(".dice").textContent = resultat;
      }, 2000); 
      console.log("Résultat du dé : " + resultat);
      
      
      setTimeout(()=> {
          
      
      if (resultat === 1) {
        scoreJoueur1 = 0;
        document.getElementById("score-joueur1").textContent = scoreJoueur1;
        
          alertInfo.innerHTML = `
          <div class="alert alert-danger" role="alert">
              Vous avez obtenu 1 ! Votre score cumulé retombe à 0.
          </div>`;
          setTimeout(() => {
            alertInfo.innerHTML = '';
        }, 2000);
        
       
        player1.classList.remove('h3-LB')
        player1.classList.add('h3-LL');
        player2.classList.remove('h3-LL')
        player2.classList.add('h3-LB')
        joueur = 2;
        playerPlay();
      } else {
        scoreJoueur1 += resultat;
        document.getElementById("score-joueur1").textContent = scoreJoueur1;
      }
    }, 2000);
  
      console.log("Score cumulé du joueur 1 : " + scoreJoueur1);
    } else {
      console.log("Joueur 2, c'est à vous de jouer !");
      let resultat = Math.floor(Math.random() * 6) + 1;
      document.querySelector(".dice").textContent = "";
      document.querySelector("#dice").classList.add("rotate");

      setTimeout(function() {
        document.querySelector("#dice").classList.remove("rotate");
    
        // Afficher le résultat du dé dans le span avec la classe "dice"
        document.querySelector(".dice").textContent = resultat;
      }, 2000);
      
      console.log("Résultat du dé : " + resultat);
      
      setTimeout(()=> {
      if (resultat === 1) {
        scoreJoueur2 = 0;
        document.getElementById("score-joueur2").textContent = scoreJoueur2;
        alertInfo.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Vous avez obtenu 1 ! Votre score cumulé retombe à 0.
        </div>`;
        setTimeout(() => {
          alertInfo.innerHTML = '';
      }, 2000);
        player2.classList.remove('h3-LB');
        player2.classList.add('h3-LL');
        player1.classList.remove('h3-LL');
        player1.classList.add('h3-LB');
        joueur = 1;
        playerPlay();
      } else {
        scoreJoueur2 += resultat;
        document.getElementById("score-joueur2").textContent = scoreJoueur2;
      }
    }, 2000);
  
      console.log("Score cumulé du joueur 2 : " + scoreJoueur2);
    }
  
    
  }
  

// Nouvelle fonction pour sauvegarder le score global du joueur 1
function hold() {
  if (joueur === 1) {
    if (scoreJoueur1 === 0) {
      // Show error message
      alertInfo.innerHTML = `
      <div class="alert alert-danger" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:" style="width: 24px; height: 24px;">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>Vous devez jouer avant de sauvegarder votre score !</div>  
      </div>`;
      setTimeout(() => {
        alertInfo.innerHTML = '';
      }, 2000);
    } else {
      // Update global score and switch to player 2
      scoreGlobalJoueur1 += scoreJoueur1;
      document.getElementById("score-global-joueur1").textContent = scoreGlobalJoueur1;
      alertInfo.innerHTML = `
        <div class="alert alert-success" role="alert">
            Vous avez sauvegardé votre score !
        </div>`;
      setTimeout(() => {
        alertInfo.innerHTML = '';
      }, 2000);
      scoreJoueur1 = 0;
      document.getElementById("score-joueur1").textContent = scoreJoueur1;
      player1.classList.remove('h3-LB')
      player1.classList.add('h3-LL');
      player2.classList.remove('h3-LL')
      player2.classList.add('h3-LB')
      joueur = 2;
    }
  } else {
    if (scoreJoueur2 === 0) {
      // Show error message
      alertInfo.innerHTML = `
      <div class="alert alert-danger" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:" style="width: 24px; height: 24px;">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>Vous devez jouer avant de sauvegarder votre score !</div>  
      </div>`;
      setTimeout(() => {
        alertInfo.innerHTML = '';
      }, 2000);
    } else {
      // Update global score and switch to player 1
      scoreGlobalJoueur2 += scoreJoueur2;
      document.getElementById("score-global-joueur2").textContent = scoreGlobalJoueur2;
      alertInfo.innerHTML = `
        <div class="alert alert-success" role="alert">
            Vous avez sauvegardé votre score !
        </div>`;
      setTimeout(() => {
        alertInfo.innerHTML = '';
      }, 2000);
      scoreJoueur2 = 0;
      document.getElementById("score-joueur2").textContent = scoreJoueur2;
      player2.classList.remove('h3-LB')
      player2.classList.add('h3-LL');
      player1.classList.remove('h3-LL')
      player1.classList.add('h3-LB')
      joueur = 1;
    }
  }



  winner();
  playerPlay();
}

function resetGame() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scoreTotalPlayer1 = 0;
    scoreJoueur1 = 0;
    scoreJoueur2 = 0;
    scoreGlobalJoueur1 = 0;
    scoreGlobalJoueur2 = 0;
    joueur = 1;
    document.getElementById("score-joueur1").textContent = 0;
    document.getElementById("score-joueur2").textContent = 0;
    document.getElementById("score-global-joueur1").textContent = 0;
    document.getElementById("score-global-joueur2").textContent = 0;
    document.querySelector(".dice").textContent = "";
    alert("Nouvelle Partie !")
  }

function winner() {
    if (scoreGlobalJoueur1 >= 100) {
    
      alert("Félicitations ! Joueur 1 a gagné !");
      
      resetGame();
    } else if (scoreGlobalJoueur2 >= 100) {
      
      alert("Félicitations ! Joueur 2 a gagné !")
      resetGame();
    }
    
  }


  function playerPlay() {
    if (joueur === 1  ) {
        let player1Play = document.querySelector('.player1');
        player1Play.style.display = "block";

        let player2Play = document.querySelector('.player2');
        player2Play.style.display = "none";
    } else {
        let player2Play = document.querySelector('.player2');
        player2Play.style.display = "block";

        let player1Play = document.querySelector('.player1');
        player1Play.style.display = "none";
    }
}

  
