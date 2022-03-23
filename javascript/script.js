

//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// 1 - recupero l'elemento html dalla pagina
const iconContainer = document.getElementById('container');
const iconBox = document.createElement('div');
const selectMenu = document.getElementById('selection');

// 2 - creo i div nella pagina con la funzione
createIconBox(listaicone);

// funzioni per creare i box delle icone

function createIconBox(iconslist) {
    iconslist.forEach((element) => {
        const card = createCard(element);
        iconContainer.appendChild(card);
    });
}

function createCard(iconslist) {
    const iconBox = document.createElement('div');
    iconBox.className = "iconbox";
    iconBox.innerHTML = `
              <div >
                <i class="fa-solid icon ${iconslist.prefix}${iconslist.name}"></i>
                <h3>${iconslist.name}</h3>
              </div>
      `;
    return iconBox;
}

//------------------------------------------------------------------------//

//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

const iconCol = document.getElementsByClassName('icon')[0];

IconColor(listaicone)

function IconColor(array) {
    array.forEach((element) => {
        if (element.color === 'orange' && element.type === 'animal') {
            iconCol.classList.add('icoorange')
        } else if (element.color === 'blue' && element.type === 'user') {
            iconCol.classList.add('icoblue')
        } else if (element.color === 'green' && element.type === 'vegetable') {
            iconCol.classList.add('icogreen')
        }
    })
}

//------------------------------------------------------------------------//

//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const menu = document.getElementById('selection')

menu.innerHTML = `
        <option value="Animals">Animals</option>
        <option value="Vegetable">Vegetable</option>
        <option value="User">User</option>
`;

