var tableau = [
    {name: "un", titre: "Family Gathering", texte : "We love for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.", image : 'images/homepage/family-gathering-desktop.jpg'},
    {name: "deux", titre: "Special Events", texte : "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.", image : 'images/homepage/special-events-desktop.jpg'  },
    {name: "trois", titre: "Social Events", texte : "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.", image : 'images/homepage/social-events-desktop.jpg'}
]


const active = document.querySelectorAll('.active');
const titre = document.querySelector('.titre-container-main-quatre-partie-droite');
const paragraphe = document.querySelector('.paragraphe-container-main-quatre-partie-droite');
const image = document.querySelector('.image-main-container-quatre');


let choix ="un";
active.forEach((item) => {
    item.addEventListener('click', function(e) {
        choix = e.target.id;

        tableau.forEach(object =>{
            if(object.name === choix){
                titre.innerHTML = object.titre;
                paragraphe.innerHTML = object.texte;
                image.src = object.image;
            }
        });
    });
});

const reservation = document.querySelector('#book-table');
const body = document.querySelector('body')

reservation.addEventListener('click', function() {
    body.classList.toggle('agrandir');
})


const bouton = document.querySelectorAll('.bouton');
const nombre_personne = document.querySelector('.reservation-personne');

let nombre = 0
bouton.forEach((item) => {
    item.addEventListener('click', function(e) {
        switch (e.target.id) {
            case "moins" :
                if(nombre === 0) {
                    nombre++;
                }
                nombre--;
                nombre_personne.innerHTML = nombre;
                break;

            case "plus" :
                nombre++;
                nombre_personne.innerHTML = nombre;
                break;
        };
    });
})


const select = document.querySelector('select');

select.addEventListener('click', function() {
    body.classList.toggle('rotate')
});


const traitUn = document.querySelector('#trait-un');
const un = document.querySelector('#un');

un.addEventListener('click', function() {
    un.classList.add('color');
    traitUn.classList.add('display')
})
