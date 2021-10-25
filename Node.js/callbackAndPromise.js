const books = [
    {name: 'kitap 1', author: 'Yazar 1'},
    {name: 'kitap 2', author: 'Yazar 2'},
    {name: 'kitap 3', author: 'Yazar 3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        //resolve(books);
        reject("Bir Hata olustu");
    });

    return promise1;
};

// addBook({name: 'kitap 4', author: 'Yazar 4'})
//     .then(() => {
//         console.log("YENI LISTE");
//         listBooks();
//     }).catch((error) => {
//         console.log(error);
//     });

async function showBooks() {
    try {
        await addBook({name: 'kitap 4', author: 'Yazar 4'});
        listBooks();
    } catch (error) {
        console.log(error);
    }
}

showBooks();