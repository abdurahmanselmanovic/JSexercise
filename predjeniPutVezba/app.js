console.log("proba");
// document.getElementById("demo").innerHTML =
// 	"U Slucaju nedostatka informacije ostavite polje prazno";

const s = prompt(
	"Unesite predjeni put u metrima (u slucaju nedostatka informacije `/`)"
);
const v = prompt(
	"Unesite brzinu u metrima u sekundi (u slucaju nedostatka informacije `/`) "
);
const t = prompt(
	"Unesite vreme u sekundama (u slucaju nedostatka informacije `/`)"
);
const myfunc = () => {
	if (isNaN(s) && isNaN(v) && isNaN(t)) {
		return "nisu uneti";
	} else if (s == "/") {
		return v * t + " JE PREDJENI PUT";
	} else if (v == "/") {
		return s / t + " Je Brzina";
	} else if (t == "/") {
		return s / v + " Je vreme";
	} else {
		return "Uneti su svi podatci";
	}
};

console.log(myfunc());
document.getElementById("demo").innerHTML = myfunc();
document.getElementById("demo").style.cssText = `
  margin-top: 10px; 
  text-align: center;
  color: #f14f12;
  font-size: 42px;
`;
// DONT CHANGE TEMPLATE LITERALS OR PROGRAM WONT WORK PROPERLY
