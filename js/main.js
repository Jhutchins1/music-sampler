


let albumCover = document.querySelectorAll('.cover'); 
let infoDivs = document.querySelectorAll('.audio-player'); 

function hideAll() {
    infoDivs.forEach(function(el) {
      el.style.display = 'none';
    });
  }
  
    hideAll();

albumCover.forEach(function(el) {
    el.onclick = (e) => {

        hideAll();
        let players = document.querySelectorAll('audio');
            players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


        switch (e.target.getAttribute('id')) {
            case 'album1':
              document.querySelector('#audio-player1')
                  .style.display = 'block';
              break;
            case 'album2':
              document.querySelector('#audio-player2')
                  .style.display = 'block';
              break;
            case 'album3':
              document.querySelector('#audio-player3')
              .style.display = 'block';
              break;
            case 'album4':
              document.querySelector('#audio-player4')
              .style.display = 'block';
              break;

        }
    }
}); 
