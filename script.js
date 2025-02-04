
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const redButton = document.querySelector(".vignette__button--red");
    let textIndex = 0;

    redButton.addEventListener("click", () => {
        const buttonRect = redButton.getBoundingClientRect();
        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;

        let buttonTexts = [
            "Réfléchis bien en vraii..",
            "Aller ça peut pas être si mal",
            "Stp...",
            "Jte jure t'y as pas assez pensé",
            "Encore un peu..",
            "Sinon je capture Timo",
            "Je cuisine Ao?",
            "Aller j'ai mit du temps a faire ça...",
            "Arrête de cliquer jvais t'enculer",
            "Tu veux vraiment me rendre fou jusqu'au bout",
            "Katia...",
            "Je t'aime..?",
            "Aller appuie sur oui frr",
            "Lâche ça",
            "Regarde meme rell elle regarde le bouton oui",
            "Clique vite j'ai plus beaucoup d'idées de texte a mettre",
            "Tu veux ma mort ? (appuie sur oui si c le cas)",
            "Jamais tu t'arrêtes",
            "C'est bon on a rigolé 5min clique mtn j'ai pas fait tout ça pour rien"
        ];

        // Définition des limites pour éviter que le bouton ne sorte de l'écran
        const maxX = window.innerWidth - buttonWidth - 780;
        const maxY = window.innerHeight - buttonHeight - 200;

        // Génération de coordonnées aléatoires
        const randomX = Math.random() * (maxX - 5) - 5;
        const randomY = Math.random() * (maxY - 5) - 5;

        // Appliquer la nouvelle position
        redButton.style.position = "absolute";
        redButton.style.left = `${randomX}px`;
        redButton.style.top = `${randomY}px`;

        // Changer le texte du bouton
        redButton.textContent = buttonTexts[textIndex];
        textIndex = (textIndex + 1) % buttonTexts.length;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const greenButton = document.querySelector(".vignette__button--green");
  const redButton = document.querySelector(".vignette__button--red");
  const title = document.querySelector(".vignette__title");
  const image = document.querySelector(".vignette__image");
  const heartButton = document.querySelector(".vignette__button--heart");

  greenButton.addEventListener("click", () => {
      greenButton.style.display = "none";
      redButton.style.display = "none";

      title.textContent = "Wow euh, GGWP a nous j'imagine..";

      image.src = "img/rammus.png";  
      image.alt = "Rammus Ok"; 

      heartButton.style.display = "block";
  });
});
