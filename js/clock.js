function updateClock() {
      const now = new Date();
      const options = {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
      };
      const formattedTime = now.toLocaleTimeString('en-UK', options);
      document.getElementById('clock').textContent = formattedTime;
    }

    setInterval(updateClock, 1000);
