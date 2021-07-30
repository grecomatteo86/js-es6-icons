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
const iconsDiv = $('.icons');
const colors = ['yellow','red','green'];
const categories = [];
icons.forEach((item,i) => {
  if (categories.includes(item.category) == false ) {
    categories.push(item.category);
  }
});
const iconsColored = icons.map((item) => {
  const categoryIndex = categories.indexOf(item.category);
  const colorItem = colors[categoryIndex];
  item.color = colorItem;
  return item;
});
printIcons (iconsDiv,iconsColored);
const select = $('#type');
printOptions (select,categories);
select.change(function () {
  const optionSelected = $(this).val();
  let iconFiltered = iconsColored.filter((item) => {
    return item.category == optionSelected;
  });
  if (iconFiltered.length == 0) {  //per fare questo ho bisogno che la variabile a riga 214 sia una LET
    iconFiltered = iconsColored;
  }
  printIcons (iconsDiv,iconFiltered);
});
// Function - printIcons
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
// Function - printOptions
function printOptions (target,options){
  options.forEach((item) => {
    const optionHtml = `<option value="${item}">${item}</option>`;
    target.append(optionHtml);
  });
}
