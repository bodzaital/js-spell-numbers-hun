function akh11_289a(input) {
	let og_input = input;

	let names = [
		null,
		"ezer",
		"millió",
		"milliárd",
		"billió",
		"billiárd",
		"trillió",
		"trilliárd",
	];

	let hundreds = [
		null,
		"száz",
		"kétszáz",
		"háromszáz",
		"négyszáz",
		"ötszáz",
		"hatszáz",
		"hétszáz",
		"nyolcszáz",
		"kilencszáz"
	];

	let tens = [
		null,
		"tizen",
		"huszon",
		"harminc",
		"negyven",
		"ötven",
		"hatvan",
		"hetven",
		"nyolcvan",
		"kilencven"
	];

	let ones = [
		null,
		"egy",
		"két",
		"három",
		"négy",
		"öt",
		"hat",
		"hét",
		"nyolc",
		"kilenc"
	];

	input = input.toString().split(/(?=(?:...)*$)/);

	let string = [];

	for (let i = input.length - 1; i >= 0; i--) {
		input[i] = input[i].padStart(3, "0");
		// console.log(input[i]);
		let substring = [];
		for (let j = 0; j < input[i].length; j++) {
			if (j == 0) {
				substring.push(hundreds[parseInt(input[i][j])]);
			}
			if (j == 1) {
				substring.push(tens[parseInt(input[i][j])]);
			}
			if (j == 2) {
				substring.push(ones[parseInt(input[i][j])]);
			}
		}

		if (substring.includes("tizen")) {
			if (substring[substring.indexOf("tizen") + 1] === null) {
				substring[substring.indexOf("tizen")] = "tíz";
			}
		}

		if (substring.includes("huszon")) {
			if (substring[substring.indexOf("huszon") + 1] === null) {
				substring[substring.indexOf("huszon")] = "húsz";
			}
		}

		substring.push(names[input.length - i - 1]);

		substring = substring.filter((e) => e !== null);

		string.push(substring.join(""));
	}

	string = string.reverse();
	
	if (og_input >= 2000 && og_input % 1000 !== 0) {
		return string.join("-");
	}

	return string.join("");
}
