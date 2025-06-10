function updateDateTime() {
  const now = new Date();
  const options = {  
    weekday: 'long',   // fx "mandag"
    year: 'numeric',   // fx "2025"
    month: 'long',     // fx "juni"
    day: 'numeric',    // fx "10"
    hour: '2-digit',   // fx "14"
    minute: '2-digit', // fx "05"
    second: '2-digit'  // fx "09"
  };
  const formatted = now.toLocaleDateString('da-DK', options) + ' ' + now.toLocaleTimeString('da-DK');
  document.getElementById('datetime').textContent = formatted;
}

// Opdater hvert sekund
setInterval(updateDateTime, 1000);

// Opdater straks ved sideindlæsning
updateDateTime();
