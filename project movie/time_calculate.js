function calculate() {
    const episodes = document.getElementById('episodes').value;
    const duration = document.getElementById('duration').value;
    const episodesPerDay = document.getElementById('episodesPerDay').value;
    const sound = document.getElementById('madeInHeavenSound'); // Get the sound element
  
    if (!episodes || !duration || !episodesPerDay) {
      alert("Please fill all fields!");
      return;
    }
  
    const totalMinutes = episodes * duration;
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    const daysToFinish = Math.ceil(episodes / episodesPerDay);
  
    document.getElementById('result').innerHTML = `
      <p>⏳ Total Time: <strong>${totalHours} hours ${remainingMinutes} minutes</strong></p>
      <p>🗓️ Days to Finish: <strong>${daysToFinish} days</strong> (watching ${episodesPerDay} episodes/day)</p>
    `;
  
    sound.play(); // Play the sound effect
    sound.volume = 1.0; // Max volume
 sound.currentTime = 0; // Restart from the beginning every time
 sound.play();

  }
  