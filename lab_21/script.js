const library = {
   books: [],
 
   add_book: function(book) {
      this.books.push(book);
   }
};

library.add_book({ title: "Гаррі Поттер", author: "Джоан Роулінг" });
library.add_book({ title: "Шерлок Голмс", author: "Артур Конан Дойл" });
console.log(library.books);