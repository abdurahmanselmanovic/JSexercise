// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezeika
// 5. setNickName - metoda sastavljen od prva dva slova imena i prva dva slova prezimena

const objekat = {};

objekat.firstname = "abdurahman";
objekat.lastname = "selmanovic";
objekat.lang = "bosanski";
unos = "srpski";
objekat.setLanguage = function () {
	return (lang = unos);
};
objekat.setNickName = function () {
	return (
		this.firstname[0] + this.firstname[1] + this.lastname[0] + this.lastname[1]
	);
};

console.log(objekat.setNickName());
