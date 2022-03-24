

//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.



//  recupero l'elemento html dalla pagina
const iconContainer = document.getElementById('container');
const selectMenu = document.getElementById('selection');
const categories = ['animal', 'vegetable', 'user'];

// creo i div nella pagina con la funzione

createIconBox(listaicone)

createSelectElement(categories);

//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

selectMenu.addEventListener('change', (event) => {
    // console.log(event.target.value);
    const selectedCategory = event.target.value;
    if (selectedCategory === 'all') {
        createIconBox(listaicone);
    } else {
        const filtered = listaicone.filter((item) => {
            return item.type === selectedCategory;
        });
        createIconBox(filtered);
    }
});

//------------------------------------------------------------------------//

// funzioni per creare i box delle icone

function createIconBox(data) {
    let allIcons = '';
    data.forEach(element => {
        const { family, prefix, name, color } = element;
        const template = `
        <div class="iconbox">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <p>${name}</p>
        </div>
        `
        allIcons += template;
    });
    iconContainer.innerHTML = allIcons;
}

// funzioni per selezionare la categoria delle icone

function createSelectElement(types) {

    let content = '<option value="all">All</option>';

    types.forEach((category) => {
        content += `
            <option value="${category}">${category}</option>
        `
    });
    selectMenu.innerHTML = content;
}




