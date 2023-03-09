const numberOfPlayers = document.getElementById("playersInATeam");
const btnGenerate = document.getElementById("generatebtn");
const numberFormatDisplay = document.getElementById("numberFormat");
const numberGenerated = document.getElementById("numberGenerated");

btnGenerate.addEventListener("click", () => {
  GenerateNumbers();
});

function GenerateNumbers() {
  let allNumbers = [];
  for (let i = 0; i < numberOfPlayers.value; i++) {
    allNumbers.push(i);
  }
  console.log(allNumbers);

  let numberArray = [];
  let tempArray = [];
  //generate numbers as of now 7 numbers in all
  for (i = 0; i < allNumbers.length; i++) {
    num = Math.floor(Math.random() * numberOfPlayers.value);

    if (tempArray.includes(num) === true) {
      i = i - 1;
    } else {
      tempArray.push(num);
      console.log(num);
    }
  }
  const newLi = document.createElement("li");
  newLi.innerText = tempArray;
  numberGenerated.appendChild(newLi);
}
