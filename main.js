const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


// Snack 1 - Filtra e Modifica
// Crea una funzione che somma due numeri.
// Crea un array(longBooks) con i libri che hanno più di 300 pagine;
// Creare un array(longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

function somma(a, b) {
    return a + b
}
const libriLunghi = books.filter((book) => book.pages > 300)
console.log(libriLunghi);

const libriLunghiTitoli = libriLunghi.map((i) => i.title)
console.log(libriLunghiTitoli);

books.forEach((b) => console.log(b.title))


//     Snack 2 - Il primo libro scontato
// Creare un array(availableBooks) che contiene tutti i libri disponibili.
// Crea un array(discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20 % (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile(fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero(senza centesimi).

const libriDisponibili = books.filter((b) => b.available);
console.log(libriDisponibili);

const libriScontati = libriDisponibili.map((b) => {
    const prezzo = parseFloat(b.price.replace('€', ''));
    const prezzoScontato = (prezzo * 0.8).toFixed(2);

    return {
        ...b,
        price: `${prezzoScontato} €`
    }
})
console.log(libriScontati);

const prezzoPieno = libriScontati.find((b) => {
    const prezzo = parseFloat(b.price.replace('€', ''));

    return prezzo % 1 === 0;
});

console.log(prezzoPieno);

//     Snack 3 - Ordinare gli Autori
// Creare un array(authors) che contiene gli autori dei libri.
// Crea una variabile booleana(areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

const autori = books.map((b => b.author))

const autoriMaggiorenni = autori.every(aut => aut.age >= 18);

if (autoriMaggiorenni) {
    autori.sort((a, b) => a.age - b.age);
} else {
    autori.sort((a, b) => b.age - a.age);
}

// autori.sort((a, b) => a.age - b.age) * (autoriMaggiorenni ? 1 : -1));

console.log(autoriMaggiorenni);
console.log(autori);

// Snack 4 - Calcola l’età media
// Creare un array(ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età(agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const anni = autori.map((au) => au.age);
console.log(anni);

const sommaAnni = anni.reduce((somma, ann) => somma + ann, 0);
console.log(sommaAnni);

console.log(`l'età media è di ${sommaAnni / anni.length} anni`)



