let randomNumber1 = Math.floor(Math.random() *6)+1;

let randomNumber2 = Math.floor(Math.random() *6)+1;

let leftImg = document.getElementsByClassName("img1")[0];

leftImg.setAttribute("src",  `
  images/dice${randomNumber1}.png`);

  let rightImg = document.getElementsByClassName("img2")[0];

  rightImg .setAttribute("src",  `
  images/dice${randomNumber2}.png`);

  let result = document.querySelector("h1");

  
    if (randomNumber1 > randomNumber2) {
      result.textContent ="Player 1 wins!";
    } 
      else if (randomNumber1 < randomNumber2){result.textContent ="Player 2 wins!";}
     else if(randomNumber1 ===    randomNumber2){result.textContent ="It's a draw!";}


  
