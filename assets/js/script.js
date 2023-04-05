function changeColor(color){
    document.querySelector('.boxResizer').style.color = color;
}

var button = document.getElementById("magicButton");
		var isDragging = false;
		var offset = {
			x: 0,
			y: 0
		};

		button.addEventListener("mousedown", function(event) {
			isDragging = true;
			offset.x = event.offsetX;
			offset.y = event.offsetY;
		});

		window.addEventListener("mouseup", function(event) {
			isDragging = false;
		});

		window.addEventListener("mousemove", function(event) {
			if (isDragging) {
				var x = event.clientX - offset.x;
				var y = event.clientY - offset.y;
				button.style.left = x + "px";
				button.style.top = y + "px";
			}
		});

		button.addEventListener("click", function() {
			isDragging = true;
			offset.x = button.offsetWidth / 2;
			offset.y = button.offsetHeight / 2;
		});

var btn = document.getElementById('magicButton');
var msg = document.getElementById('message-box');

btn.addEventListener('click', function() {
    msg.style.display = 'block';
});

document.addEventListener('click', function(e) {
    if (e.target != btn && e.target != msg) {
        msg.style.display = 'none';
    }
});

var intervalId;
      var originalBackground = document.documentElement.style.backgroundColor;

      function startTimer() {
        intervalId = setInterval(changeBackground, 500);
        document.getElementById("color-button").style.display = "none";
        document.getElementById("stop-button").style.display = "inline-block";
        setTimeout(function() {
          clearInterval(intervalId);
          document.getElementById("color-button").style.display = "inline-block";
          document.getElementById("stop-button").style.display = "none";
        }, 500 * 100000);
      }

      function stopTimer() {
        clearInterval(intervalId);
        document.documentElement.style.backgroundColor = originalBackground;
        document.getElementById("color-button").style.display = "inline-block";
        document.getElementById("stop-button").style.display = "none";
      }

      function changeBackground() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = "rgb(" + r + "," + g + "," + b + ")";
        document.documentElement.style.backgroundColor = color;
      }

      document.getElementById("reset-button").addEventListener("click", function() {
        clearInterval(intervalId);
        document.documentElement.style.backgroundColor = originalBackground;
      });