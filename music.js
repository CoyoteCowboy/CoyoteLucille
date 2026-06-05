const music = document.getElementById('bgMusic');
         
         function playMusic() {
            music.play();
         }
         
         function pauseMusic() {
            music.pause();
         }
         
         // Auto-play after user interaction (modern browsers requirement)
         document.addEventListener('click', function() {
            music.play();
         }, { once: true });
