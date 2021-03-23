// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icon =
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  };

// destrutturo
const {name,prefix,family} = icon;

const html =`
<div>
  <i class="${family} ${prefix}${name}"></i>
  <div class="title">${name}</div>
</div>`;

$('.icons').append(html);
