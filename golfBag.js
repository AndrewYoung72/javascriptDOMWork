const golfBag = {
  clubNumber: 14,
  clubList: ["Driver", "3H", "3 Iron", "4 Iron", "5 Iron", "6 Iron","7 Iron","8 Iron","9 Iron","PW", "50°W", "54°W", "58°W", "Putter"],
  clubBrand: "Callaway",
  golfTowel: true,
  tees: true,
  balls: true,
  ballBrand: "Callaway",
};

const markup = (bag) => {
  return `
    <div>
      <h3>Club Brand: ${bag.clubBrand}</h3>
      <h3>Club List:</h3>
      <ul>
        <li>${bag.clubList[0]}</li>
        <li>${bag.clubList[1]}</li>
        <li>${bag.clubList[2]}</li>
        <li>${bag.clubList[3]}</li>
        <li>${bag.clubList[4]}</li>
        <li>${bag.clubList[5]}</li>
        <li>${bag.clubList[6]}</li>
        <li>${bag.clubList[7]}</li>
        <li>${bag.clubList[8]}</li>
        <li>${bag.clubList[9]}</li>
        <li>${bag.clubList[10]}</li>
        <li>${bag.clubList[11]}</li>
        <li>${bag.clubList[12]}</li>
        <li>${bag.clubList[13]}</li>
      </ul>
      <h3>Ball Brand: ${bag.ballBrand}</h3>
    </div>


  `;
};

console.log(golfBag);
console.log(golfBag.clubList[1]);


const main = document.createElement("main");
main.innerHTML = markup(golfBag);
document.body.appendChild(main);