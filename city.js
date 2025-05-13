let noun1 = prompt("Enter your first noun:");
let noun2 = prompt("Enter your second noun:");
let noun3 = prompt("Enter your third noun:");
let noun4 = prompt("Enter your fourth noun:");
let noun5 = prompt("Enter your fith noun:");
let noun6 = prompt("Enter your sixth noun:");
let verb1 = prompt("Enter a verb with ed at the end:");
let verb2 = prompt("Enter a past tense verb:");
let adjective1 = prompt("Enter your first adjective:")
let adjective2 = prompt("Enter your second adjective:")

document.getElementById("output").innerHTML = `
    <p>It was a/an ${adjective1} day, perfect for going scuba diving. I grabbed my gear and set out towards ${noun1} beach. At the beach I put my ${noun2} over my head and attached my air tanks to it, testing to make sure I would be able to breathe under the water. Feeling confident that my gear was working properly I ${verb1} far out to sea. Through the murky water I saw a ${noun3} wreck. I figured that it would be a cool place to explore and ${verb2} down to it. I went inside the wreck and was surprised when I saw a ${noun4}. I searched the wreck from top to bottom looking for some sort of treasure. After 20 minutes I decided to head back to shore since my oxygen was being quickly depleted. On my way back I saw a ${adjective2} ${noun5}. I was so terrified I recklessly cut my leg on a piece of ${noun6} when I was trying to swim back to shore.</p>`;
