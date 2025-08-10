function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = currentTime;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let dayName = days[now.getDay()];
  let day = now.getDate();
  let monthName = months[now.getMonth()];
  let year = now.getFullYear();

  let currentDate = `${dayName}, ${monthName} ${day}, ${year}`;
  document.getElementById('date').textContent = currentDate;
}

setInterval(updateClock, 1000);
updateClock();
