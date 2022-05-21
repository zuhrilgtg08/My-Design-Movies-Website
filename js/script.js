function carikanMovies() {
    $('#list-movies').html('');

    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '7ed2710b',
            's': $('#search-input').val(),
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;
                $.each(movies, function (index, data) {
                    $('#list-movies').append(boxMovies(data));
                });

                console.log(movies);

                $('#search-input').val('');
            } else {
                $('#list-movies').html(`
                        <div class="column">
                            <h1>Movie ${result.Error}</h1>
                        </div>
                    `);
            }
        }
    })
}

$('#search-button').on('click', function () {
    carikanMovies();
});

$('#search-input').on('keyup', function (event) {
    if (event.keyCode === 13) {
        carikanMovies();
    }
});



const boxMovies = function (data) {
    return `<div class="box">
                <div class="kotak-img">
                    <img src="${data.Poster}" alt="movies 1">
                </div>
                <h3>${data.Title}</h3>
                <span>${data.Year} | ${data.Type}</span>
            </div>`;
}






















let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
    },
});