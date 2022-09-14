const bag = {
  clubNumber: 14,
  clubList: ["Driver: X Tour", "2H: 18° X Hot ", "3 Iron", "4 Iron", "5 Iron", "6 Iron","7 Iron","8 Iron","9 Iron","PW", "50°W: JAWS 10s", "54°W: MackDaddy 12w", "58°W: JAWS 8c", "Putter: Odyssey 2-Ball XDF"],
  clubBrand: "Callaway",
  golfTowel: true,
  tees: true,
  balls: true,
  ballBrand: "Callaway, Titleist",
  drawClub : () => {
     return bag.clubList[Math.floor(Math.random() * bag.clubList.length)];
  },
  
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
      <h3>Random club selection:  ${bag.drawClub()}</h3>
    </div>


  `;
};

console.log(bag);



const main = document.createElement("main");
main.innerHTML = markup(bag);
document.body.appendChild(main);