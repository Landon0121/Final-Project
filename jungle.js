
let adjective = prompt("Enter your first adjective:");
let object = prompt("object:");
let clothing = prompt("Enter a piece of clothing:");
let scent = prompt("Enter a smell:");
let animal = prompt("Enter a plural animal:");
let adjective2 = prompt("Enter another adjective:");
let tool = prompt("Enter a tool:");
let noun = prompt("Enter a noun:");
let liquid = prompt("Enter a liquid:")
let adjective3 = prompt("Enter your third adjective:")
let food = prompt("Enter a food in plural:");
let object1 = prompt("Enter an object:");
let liquid = prompt("Enter a liquid:")
let adjective3 = prompt("Enter your third adjective:")

document.getElementById("output").innerHTML = `
    <p>It all started when I woke up in the middle of a(n) ${adjective} jungle, clutching nothing but a ${object} and wearing my lucky ${clothing}. The air smelled like ${scent}, and I could hear ${animal} calling in the distance.I took a deep breath and set off, hacking my way through the ${adjective} vines with my trusty [tool]. Suddenly, I tripped over a [noun] and landed face-first in a puddle of [liquid]. Classic me.
    Just as I was getting up, a [adjective] monkey dropped from the trees, wearing sunglasses and eating [plural food item].
    "Hey!" it said. "If you're looking for the legendary [mythical object], you're going the wrong way."
    I didn't even question it—I just followed. We swung from [plural noun], danced with a group of [plural occupation], and narrowly escaped a herd of angry [plural animal].
    Finally, we reached a hidden temple made entirely of [material]. Inside, glowing on a pedestal, was the [noun] I'd been dreaming about since I was a kid. I reached out, touched it, and instantly felt a surge of [emotion].
    Now, I roam the jungle with my new power of [superpower], protecting the land as the mysterious, the daring, the [adjective] [nickname or title]..</p>`;
