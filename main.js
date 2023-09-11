var childOrdi = document.querySelectorAll(".ordinateur")
var  parentOrdi = document.querySelector(".vente")

    
//     let plusBtn = childOrdi[i].children[2].children[0]

//     let moinsBtn = childOrdi[i].children[2].children[2]

//     let nombreOrdi = childOrdi[i].children[2].children[1]

//     let quantity = parseInt(nombreOrdi.innerHTML)

//     let prix = childOrdi[i].children[2].children[3]

//     let prixUnit  = childOrdi[i].children[3]

//     let ordi = parseInt(prixUnit.innerText)



//     plusBtn.addEventListener("click", function() {
//         quantity++;
//         nombreOrdi.innerHTML = quantity;
//         prix.innerText = quantity*ordi;
//     })


//     moinsBtn.addEventListener('click', function () {
//         if (quantity > 0 ) {
//             quantity--;
//         }

//         nombreOrdi.innerHTML = quantity;

//     })

    
// }

// prixTotal = document.querySelector('.prixTotal');

// function somme() {
//     let sum = 0
//     for (let i = 0; i < childOrdi.length; i++) {
//         price = parseInt(childOrdi[i].children[2].children[3].innerHTML);

//         sum += prix;
        
//     }
//     prixTotal.innerHTML = somme;
// }


// Récupérer les éléments du DOM
const boutonPlus = document.querySelectorAll('#bouttonPlus');
const boutonsIncrement = document.querySelectorAll('.button_incrementation button');
const boutonsFirst = document.querySelectorAll('.first_button button');
const numberSpans = document.querySelectorAll('.number');
const buttonSpans = document.querySelectorAll('.button');

// Ajouter des écouteurs d'événements pour les boutons de chaque produit
boutonPlus.forEach((bouton, index) => {
  bouton.addEventListener('click', () => {
    // Incrémenter le nombre
    let nombre = parseInt(numberSpans[index].textContent);
    nombre++;
    numberSpans[index].textContent = nombre;
  });
});

boutonsIncrement.forEach((bouton, index) => {
  bouton.addEventListener('click', () => {
    // Incrémenter le nombre
    let nombre = parseInt(buttonSpans[index * 2].textContent);
    nombre++;
    buttonSpans[index * 2].textContent = nombre;
  });
});

boutonsFirst.forEach((bouton, index) => {
  bouton.addEventListener('click', () => {
    // Incrémenter ou décrémenter le nombre
    let nombre = parseInt(buttonSpans[(index * 2) + 1].textContent);
    if (bouton.textContent === '+') {
      nombre++;
    } else {
      nombre--;
    }
    buttonSpans[(index * 2) + 1].textContent = nombre;
  });
});

