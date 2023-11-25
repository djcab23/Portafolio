document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audio');
    var playlist = document.getElementById('playlist');
    var tracks = playlist.getElementsByTagName('a');

    function playSong(songSrc) {
        audio.src = songSrc;
        audio.load();
        audio.play();
    }

    for (var i = 0; i < tracks.length; i++) {
        tracks[i].addEventListener('click', function (e) {
            e.preventDefault();
            var songSrc = this.getAttribute('href');
            playSong(songSrc);

            // Remover la clase 'active' de todos los elementos de la lista
            var items = playlist.getElementsByTagName('li');
            for (var item of items) {
                item.classList.remove("active");
            }

            // Agregar la clase 'active' al elemento de la lista clicado
            this.parentElement.classList.add("active");
        });
    }
});
