document.getElementById("bioForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const interests = document.getElementById("interests").value.trim().split(",");
  const tone = document.getElementById("tone").value;

  let bio = "";

  switch(tone) {
    case "funny":
      bio = `I'm ${name}. I like ${interests.join(", ")}, and pretending I know what I'm doing. Swipe right if you can beat me at Mario Kart.`;
      break;
    case "confident":
      bio = `Name's ${name}. I work hard, play harder. If you're into ${interests.join(", ")}, we might just get along.`;
      break;
    case "chill":
      bio = `${name} here. Big fan of ${interests.join(", ")}. Just looking for someone cool to vibe with.`;
      break;
    case "mysterious":
      bio = `You'll find out who I am if you take the chance. But here's a clue: ${interests[0]} is just the beginning.`;
      break;
  }

  document.getElementById("result").innerText = bio;
});