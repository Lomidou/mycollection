const collection = [
    {
        img: "assets/cr7.jpg",
        name: "Nom: Cristiano Ronaldo",
        birthday: "Date de naissance: 28/02/1985",
        club: "Club actuel: Al Nassr",
        selection: "Sélection nationale: Portugal",
        position: "Poste: Attaquant",
        stat: [
            "996 matches",
            "741 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=UK5cu3LJ9qk"
        }
    },

    {
        img: "assets/maldini.jpeg",
        name: "Nom: Paolo Maldini",
        birthday: "Date de naissance: 26/06/1968",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Italie",
        position: "Poste: Défenseur",
        stat: [
            "902 matches",
            "33 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=Pah2arSLVlg"
        }
    },

    {
        img: "assets/kaka.jpg",
        name: "Nom: Ricardo Kaka",
        birthday: "Date de naissance: 22/04/1982",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Brésil",
        position: "Poste: Millieu offensif",
        stat: [
            "655 matches",
            "207 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=D5ue1K9_7rg"
        }
    },

    {
        img: "assets/sheva.jpeg",
        name: "Nom: Andriy Shevchenko",
        birthday: "Date de naissance: 29/09/1976",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Ukraine",
        position: "Poste: Attaquant",
        stat: [
            "657 matches",
            "326 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=wIApv7UI_Vw"
        }
    },

    {
        img: "assets/ibra.jpg",
        name: "Nom: Zlatan Ibrahimovic",
        birthday: "Date de naissance: 03/10/1981",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Suède",
        position: "Poste: Attaquant",
        stat: [
            "866 matches",
            "511 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=9s0ErlOT09c"
        }
    },

    {
        img: "assets/pato.jpeg",
        name: "Nom: Alexandre Pato",
        birthday: "Date de naissance: 02/09/1989",
        club: "Club actuel: Sao Paulo FC",
        selection: "Sélection nationale: Brésil",
        position: "Poste: Attaquant",
        stat: [
            "446 matches",
            "167 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=7L6OjHsLEMM&t=2s"
        }
    },

    {
        img: "assets/seedorf.jpeg",
        name: "Nom: Clarence Seedorf",
        birthday: "Date de naissance: 01/04/1976",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Pays-Bas",
        position: "Poste: Milieu offensif",
        stat: [
            "867 matches",
            "128 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=sDxiIlBhdbI&t=303s"
        }
    },

    {
        img: "assets/nesta.jpg",
        name: "Nom: Alessandro Nesta",
        birthday: "Date de naissance: 19/03/1976",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Italie",
        position: "Poste: Défenseur",
        stat: [
            "624 matches",
            "13 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=Tzx63QJQzpY"
        }
    },

    {
        img: "assets/theo.jpeg",
        name: "Nom: Theo Hernandez",
        birthday: "Date de naissance: 06/10/1997",
        club: "Club actuel: AC Milan",
        selection: "Sélection nationale: France",
        position: "Poste: Défenseur gauche",
        stat: [
            "284 matches",
            "31 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=_nje-hCADQQ"
        }
    },

    {
        img: "assets/mbappe.jpg",
        name: "Nom: Kylian Mbappé",
        birthday: "Date de naissance: 20/12/1998",
        club: "Club actuel: Paris-Saint-Germain",
        selection: "Sélection: France",
        position: "Poste: Attaquant",
        stat: [
            "351 matches",
            "261 buts"
        ],
        video: {
            icon: "assets/youtube.svg",
            url: "https://www.youtube.com/watch?v=rc_dP695GFU"
        }
    }
]

let section1 = document.querySelector('.box1');
let section2 = document.querySelector('.box2');

function createCard (parent, elementType, className, textContent, src, alt, url){
    let element = document.createElement(elementType);

    if (className){
        element.classList.add(className)
    }

    if (textContent){
        element.textContent = textContent
    }

    if (src){
        element.setAttribute('src', src)
    }

    if (alt){
        element.setAttribute('alt', alt)
    }

    if (url){
        element.setAttribute('url', url)
    }

    parent.appendChild(element)
}

function createDeleteButton(parent, section) {
    let deleteButton = document.createElement('button');

    deleteButton.classList.add('card__delete-button');

    deleteButton.textContent = 'x';

    deleteButton.addEventListener('click', function () {
        
        parent.removeChild(section);

    });

    section.appendChild(deleteButton);
}

collection.forEach(function(objet, index) {

let section = document.createElement('section');

section.classList.add('card')

createDeleteButton(index % 2 === 0 ? section1 : section2, section);

createCard(section, 'img', 'card__img', null, objet.img, 'photo du joueur')

createCard(section, 'div', 'card__name', objet.name)

createCard(section, 'div', 'card__birthday', objet.birthday)

createCard(section, 'div', 'card__club', objet.club)

createCard(section, 'div', 'card__selection', objet.selection)

createCard(section, 'div', 'card__position', objet.position)

createCard(section, 'div', 'card__stat', objet.stat.join(', '))

if (objet.video) {
    let videoLink = document.createElement('a');
    
    videoLink.classList.add('card__video-link');
    
    videoLink.setAttribute('href', objet.video.url);
    
    videoLink.setAttribute('target', '_blank');

    let videoIcon = document.createElement('img');
   
    videoIcon.classList.add('card__video-icon');
   
    videoIcon.setAttribute('src', objet.video.icon);
   
    videoIcon.setAttribute('alt', 'Icone vidéo');

    videoLink.appendChild(videoIcon);
    
    section.appendChild(videoLink);
}

/*let img = document.createElement('img')'
img.classList.add('card__img')
img.setAttribute('src', objet.img)
img.setAttribute('alt', 'photo du joueur')
section.appendChild(img)

let name = document.createElement('div')
name.classList.add('card__name')
name.textContent = objet.name
section.appendChild(name)

let birthday = document.createElement('div')
birthday.classList.add('card__birthday')
birthday.textContent = objet.birthday
section.appendChild(birthday);

let club = document.createElement('div')
club.classList.add('card__club')
club.textContent = objet.club
section.appendChild(club);

let selection = document.createElement('div')
selection.classList.add('card__selection')
selection.textContent = objet.selection
section.appendChild(selection);

let position = document.createElement('div')
position.classList.add('card__position')
position.textContent = objet.position
section.appendChild(position);

let stat = document.createElement('div')
stat.classList.add('card__stat')
stat.textContent = objet.stat.join(', ')
section.appendChild(stat);*/

    if (index % 2 === 0) {
        section1.appendChild(section);
    } else {
        section2.appendChild(section);
    }
});