let names = new Array();
names[0] = "Yadav";
names[1] = "Jerry";
names[2] = "Janvi";
names[3] = "jivan";
names[4] = "pawan";
names[5] = "anand";
names[6] = "Ansh";
names[7] = "Niraj";
names[8] = "Priya";
names[9] = "agni";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
