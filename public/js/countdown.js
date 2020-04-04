function startCountdown() {
    var hoursParam = window.location.href.split('?')[1];
    var hours = 24;

    if (hoursParam) {
      hours = parseInt(hoursParam.split('=')[1]);
      if (isNaN(hours) || hours < 0) hours = 24
    }

    var now = new Date().getTime();
    var countDownDate = new Date(now + (3600000 * hours));

    var countdown = setInterval(function() {
      var nowActual = new Date().getTime();
      var distance = countDownDate - nowActual;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) hours = '0' + hours;
      
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if (minutes < 10) minutes = '0' + minutes;

      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (seconds < 10) seconds = '0' + seconds;

      var formatted = '';
      if (hours > 0) {
        formatted = hours + ':' + minutes + ':' + seconds;
      } else {
        formatted = minutes + ':' + seconds;
      }

      document.getElementById('countdown').innerHTML = formatted;

      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = 'TIME IS UP!';
      }
    }, 1000);
  }
