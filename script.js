const collection = [
    {
        img: "assets/cr7.jpg",
        name: "Nom: Cristiano Ronaldo",
        birthday: "Date de naissance: 28 février 1985",
        club: "Club actuel: Al Nassr",
        selection: "Sélection nationale: Portugal",
        position: "Poste: Attaquant",
        stat: [
            "996 matches",
            "741 buts"
        ]
    },

    {
        img: "assets/maldini.jpeg",
        name: "Nom: Paolo Maldini",
        birthday: "Date de naissance: 26 juin 1968",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Italie",
        position: "Poste: Défenseur",
        stat: [
            "902 matches",
            "33 buts"
        ]
    },

    {
        img: "assets/kaka.jpg",
        name: "Nom: Ricardo Kaka",
        birthday: "Date de naissance: 22 avril 1982",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Brésil",
        position: "Poste: Millieu offensif",
        stat: [
            "655 matches",
            "207 buts"
        ]
    },

    {
        img: "assets/sheva.jpeg",
        name: "Nom: Andriy Shevchenko",
        birthday: "Date de naissance: 29 septembre 1976",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Ukraine",
        position: "Poste: Attaquant",
        stat: [
            "657 matches",
            "326 buts"
        ]
    },

    {
        img: "assets/ibra.jpg",
        name: "Nom: Zlatan Ibrahimovic",
        birthday: "Date de naissance: 03 octobre 1981",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Suède",
        position: "Poste: Attaquant",
        stat: [
            "866 matches",
            "511 buts"
        ]
    },

    {
        img: "assets/pato.jpeg",
        name: "Nom: Alexandre Pato",
        birthday: "Date de naissance: 02 septembre 1989",
        club: "Club actuel: Sao Paulo FC",
        selection: "Sélection nationale: Brésil",
        position: "Poste: Attaquant",
        stat: [
            "446 matches",
            "167 buts"
        ]
    },

    {
        img: "assets/seedorf.jpeg",
        name: "Nom: Clarence Seedorf",
        birthday: "Date de naissance: 01 avril 1976",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Pays-Bas",
        position: "Poste: Milieu offensif",
        stat: [
            "867 matches",
            "128 buts"
        ]
    },

    {
        img: "assets/nesta.jpg",
        name: "Nom: Alessandro Nesta",
        birthday: "Date de naissance: 19 mars 1976",
        club: "Club actuel: à la retraite",
        selection: "Sélection nationale: Italie",
        position: "Poste: Défenseur",
        stat: [
            "624 matches",
            "13 buts"
        ]
    },

    {
        img: "assets/theo.jpeg",
        name: "Nom: Theo Hernandez",
        birthday: "Date de naissance: 06 octobre 1997",
        club: "Club actuel: AC Milan",
        selection: "Sélection nationale: France",
        position: "Poste: Défenseur gauche",
        stat: [
            "284 matches",
            "31 buts"
        ]
    },

    {
        img: "assets/mbappe.jpg",
        name: "Nom: Kylian Mbappé",
        birthday: "Date de naissance: 20 décembre 1998",
        club: "Club actuel: Paris-Saint-Germain",
        selection: "Sélection: France",
        position: "Poste: Attaquant",
        stat: [
            "351 matches",
            "261 buts"
        ]
    }
]

let section1 = document.querySelector('.box1');

let section2 = document.querySelector('.box2');

function createCard (parent, elementType, className, textContent, src, alt){
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

    parent.appendChild(element)
}

collection.forEach(function(objet, index) {

let section = document.createElement('section');

section.classList.add('card')

createCard(section, 'img', 'card__img', null, objet.img, 'photo du joueur')

createCard(section, 'div', 'card__name', objet.name)

createCard(section, 'div', 'card__birthday', objet.birthday)

createCard(section, 'div', 'card__club', objet.club)

createCard(section, 'div', 'card__selection', objet.selection)

createCard(section, 'div', 'card__position', objet.position)

createCard(section, 'div', 'card__stat', objet.stat.join(', '))


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