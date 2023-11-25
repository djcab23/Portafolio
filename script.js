function init() {
  var audio = document.getElementById('audio');
  var playlist = document.getElementById('playlist');
  var tracks = playlist.getElementsByTagName('a');
  audio.volume = 0.10;

  // Asignar eventos a cada canción en la lista
  for (var i = 0; i < tracks.length; i++) {
      var link = tracks[i];
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var song = this.getAttribute('href');
          run(song, audio, this);
      });
  }

  // Manejar el final de cada canción
  audio.addEventListener('ended', function() {
      var nextIndex = (Array.from(tracks).indexOf(document.querySelector('.active a')) + 1) % tracks.length;
      var nextTrack = tracks[nextIndex];
      run(nextTrack.getAttribute('href'), audio, nextTrack);
  });
}

function run(song, audio, link) {
  // Remover la clase 'active' de todos los elementos
  var items = document.querySelectorAll('#playlist li');
  items.forEach(function(item) {
      item.classList.remove("active");
  });

  // Agregar la clase 'active' al elemento actual
  link.parentElement.classList.add("active");

  // Reproducir la canción seleccionada
  audio.src = song;
  audio.load();
  audio.play();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', init);
