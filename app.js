const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user__result img");
const cpuResult = document.querySelector(".cpu__result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option__image");



optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionImages.forEach((image2,index2) => {

      index !== index2 && image2.classList.remove("active");
    });

    userResult.src = cpuResult.src = "images/rock.png"
    result.textContent = "Wait..."

    gameContainer.classList.add("start");

      let time = setTimeout(() => {
        gameContainer.classList.remove("start");

        let imageSrc = e.target.querySelector("img").src;
    userResult.src = imageSrc;

    // GENERATE RANDOM NUMBER BETWEEN 0 AND 2
    let randomNumber = Math.floor(Math.random() * 3);


    // CREATE AN ARRAY FOR CPU IMAGE OPTIONS
    let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    cpuResult.src = cpuImages[randomNumber];

    // ASSIGN LETTER VALUES
    let cpuValue = ["R" , "P" , "S"][randomNumber]

    //ASSIGN (BASED ON INDEX)
    let userValue = ["R" , "P" , "S"][index]

    // CREATE AN OBJECT WITH ALL POSSIBLE OUTCOMES
    let outcomes = {
      RR: "Draw",
      RP: "Robot",
      RS: "user",
      PP: "Draw",
      PR: "User",
      PS: "Robot",
      SS: "Draw",
      SR: "Robot",
      SP: "User",
    };

    // LOOK UP THE OUTCOME VALUE BASED ON USER AND CPU OPTIONS
    let outComeValue = outcomes[userValue + cpuValue];

    result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won !!`;

      },2500)

  });
});