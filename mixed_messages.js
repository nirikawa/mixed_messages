
const firstNames = ["Brogan", "Jamen", "Locus", "Nico", "Repper", "Denagelo", "Mogis"];
const lastNames = ["Hillhand", "Applepatch", "Cliprigger", "Fangwhistle", "Burnwillow"];
const appearance = ["portly", "slender", "emaciated", "tired", "flimsy", "strong", "rotund"];

randFirst = Math.floor(Math.random() * firstNames.length);
randLast = Math.floor(Math.random() * lastNames.length);
randAppearance = Math.floor(Math.random() * appearance.length);

console.log(`Their name is ${firstNames[randFirst]} ${lastNames[randLast]} and they are ${appearance[randAppearance]}.`);