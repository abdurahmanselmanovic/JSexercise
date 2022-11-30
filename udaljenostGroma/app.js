const vrijemeOdSvetlaDoZvuka = prompt(
	"Unesite vreme od svetla do zvuka u sekundama"
);
const brzinaZvuka = 343;

const func = () => {
	if (isNaN(vrijemeOdSvetlaDoZvuka) || vrijemeOdSvetlaDoZvuka < 0) {
		return "Uneta vrednost nije ispravna";
	} else {
		return brzinaZvuka * vrijemeOdSvetlaDoZvuka + "m";
	}
};

console.log(func());
document.getElementById("demo").innerHTML = func();
document.getElementById("demo").style.cssText = `
  margin-top: 50px; 
  text-align: center;
  color: #f14f12;
  font-size: 42px;
`;
