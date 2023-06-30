const filmData = [
    {
        imgSrc: './public/imgFilme.jpg',
        title: 'Avengers Endgame (2019)',
        rating: 92,
        isFavorite: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
    {
        imgSrc: './public/imgFilme.jpg',
        title: 'Vingadores Ultimato (2019)',
        rating: 92,
        isFavorite: false,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    }
];

function renderMovie(movie) {
    const cardsContainer = document.querySelector('.cards');

    const infoFilmContainer = document.createElement('div');
    infoFilmContainer.classList.add('info-film');

    const imageContainer = document.createElement('div');
    const imgFilm = document.createElement('img');
    imgFilm.classList.add('imgfilm');
    imgFilm.src = movie.imgSrc;
    imgFilm.alt = 'imagem do filme';
    imageContainer.appendChild(imgFilm);
    infoFilmContainer.appendChild(imageContainer);

    const titleAssessmentContainer = document.createElement('div');
    titleAssessmentContainer.classList.add('title-assessment');

    const filmTitle = document.createElement('h1');
    filmTitle.textContent = movie.title;
    titleAssessmentContainer.appendChild(filmTitle);

    const ratingFavoriteContainer = document.createElement('div');
    ratingFavoriteContainer.classList.add('rating-favorite');

    const ratingIcon = document.createElement('div');
    ratingIcon.classList.add('icons');
    const starIcon = document.createElement('img');
    starIcon.src = './public/star.svg';
    starIcon.alt = 'ícone de estrela amarela';
    ratingIcon.appendChild(starIcon);
    const ratingText = document.createElement('span');
    ratingText.textContent = movie.rating;
    ratingIcon.appendChild(ratingText);
    ratingFavoriteContainer.appendChild(ratingIcon);

    const favoriteIcon = document.createElement('div');
    favoriteIcon.classList.add('icons');
    const heartIcon = document.createElement('img');
    heartIcon.src = './public/heart.svg';
    heartIcon.alt = 'ícone de coração sem cor e borda vermelha';
    favoriteIcon.appendChild(heartIcon);
    const favoriteText = document.createElement('span');
    favoriteText.textContent = movie.isFavorite ? 'Favorito' : 'Favoritar';
    favoriteIcon.appendChild(favoriteText);
    ratingFavoriteContainer.appendChild(favoriteIcon);

    titleAssessmentContainer.appendChild(ratingFavoriteContainer);
    infoFilmContainer.appendChild(titleAssessmentContainer);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description');
    const descriptionText = document.createElement('p');
    descriptionText.textContent = movie.description;
    descriptionContainer.appendChild(descriptionText);
    infoFilmContainer.appendChild(descriptionContainer);

    cardsContainer.appendChild(infoFilmContainer);
}

filmData.forEach(movie => renderMovie(movie));
