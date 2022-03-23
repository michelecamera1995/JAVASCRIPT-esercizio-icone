console.log("js-ok")

//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// 1 - recupero l'elemento html dalla pagina
const iconContainer = document.getElementById('container');

// 2 - creo i div nella pagina con la funzione
createIconBox(listaicone);

// funzioni per creare i box delle icone
function createIconBox(iconslist) {
    for (let i = 0; i < iconslist.length; i++) {
        const card = createCard(iconslist[i]);
        iconContainer.appendChild(card);
    }
}

function createCard(iconslist) {
    const iconBox = document.createElement('div');
    iconBox.className = "iconbox";
    iconBox.innerHTML = `
              <div class="card-image">
                <i>${iconslist.prefix}${iconslist.name}</i>
                <span><h3>${iconslist.name}</h3></span>
              </div>
      `;
    return iconBox;
}





//------------------------------------------------------------------------//

//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

const teamContainer = document.querySelector('.iconbox');

