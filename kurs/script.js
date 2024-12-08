function filterByGenre(genre) {
    const ul = document.getElementById('movieList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        if (genre === 'all') {
            li[i].style.display = "";
        } else {
            if (li[i].getAttribute('data-genre') === genre) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}