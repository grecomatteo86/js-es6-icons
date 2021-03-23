// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Milestone 1: mostro tutte le icone disponibili

// 3. Istanzio una const dentro la quale salvo il div dell'html
const iconsDiv = $('.icons');

/* 2. Uso un ciclo forEach per ciclare tutte le icone e poterle stampare
icons.forEach((item) => {

  // 1. Destrutturo
  const {name,prefix,family} = item;

  const html =`
  <div>
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">${name}</div>
  </div>`;

  iconsDiv.append(html);

});*/


// Milestone 2 : colorare le icone per tipo

// 4. Mi creo un array di colori
const colors = ['yellow','red','green'];

/* 5. Devo creare un nuovo set di icone colorate: ho bisogno di ottenere un
array con la category food, beverage e animal, per poi salvarmele dentro una
variabile in modo da poter fare il match tra category e colore.
Mi utilizzo il forEach per ciclare icons e prendermi le category */

// 6. Mi creo un array vuoto per salvare le category
const categories = [];

icons.forEach((item,i) => {
  // faccio un controllo per prendermi le category una volta sola (e non 6 volte per ognuna)
  if (categories.includes(item.category) == false ) {
    categories.push(item.category);
  }
});

/* 7. Coloro le icone per tipo: mi devo creare un nuovo array di icone (colorate),
quindi verificare in che posizione si trova la category dell'icona che sto ciclando
e prendermi il colore che si trova in corrispondenza (fare un'assegnazione per
posizione tra gli array colors e categories). Utilizzo il MAP */
const iconsColored = icons.map((item) => {
  const categoryIndex = categories.indexOf(item.category);
  const colorItem = colors[categoryIndex];

  item.color = colorItem;

  return item;
});

// 8. Stampiamo le icone colorate
printIcons (iconsDiv,iconsColored);

// Milestone 3: creare una select con i tipi di icone e usarla per filtrare le icone.

/* Ho già l'array categories; ho già una select, che per il momento ha solo ALL;
adesso mi devo aggiungere tante option quante sono le categories. Prendo ogni
categoria e la appendo */

/* 9. Mi seleziono la select e me la salvo in una const */
const select = $('#type');
/* 10. Per ogni categoria mi vado a creare la mia option nell'html.
Il value mi serve per andare a fare il filtro sulle icone */
categories.forEach((item) => {
  const optionHtml = `<option value="${item}">${item}</option>`;
  select.append(optionHtml);
});

/* 11. Quando seleziono una voce dal filtro, mi devono rimanere solo le
corrispondenti icone. Uso il .change() di jQuery, che mi permette di rimanere
in ascolto di un evento e vedere quando cambia il valore di questa select.
Vado a definire l'evento */
select.change(function () {
  const optionSelected = $(this).val();
  /* 12. adesso devo fare in modo che al click su una determinata categoria, mi devono
  rimanere solamente le icone corrispondenti */
  let iconFiltered = iconsColored.filter((item) => {
    return item.category == optionSelected;
  });

  /* 15. Faccio un controllo per fare in modo che quando seleziono ALL mi compaiono
  tutte le icone: se */
  if (iconFiltered.length == 0) {  //per fare questo ho bisogno che la variabile a riga 214 sia una LET
    iconFiltered = iconsColored;
  }

  /* 14. inserisco un comando che mi toglie le icone selezionate precedentemente
  quando seleziono le successive */
  // 13. vado a ristamparle
  printIcons (iconsDiv,iconFiltered);

});

// FUNZIONI

function printIcons (target,icons) {

  target.html('');

  icons.forEach((item) => {

    const {name,prefix,family,color} = item;

    const html =`
    <div>
      <i class="${family} ${prefix}${name}" style="color:${color}"></i>
      <div class="title">${name}</div>
    </div>`;

    target.append(html);

  });

}
