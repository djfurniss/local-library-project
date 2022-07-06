function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false)
  const returnedBooks = books.filter(book => book.borrows[0].returned === true)
return [borrowedBooks, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let result = []
    for (let {id, returned} of book.borrows){ //destructuring id and returned values from each borrows element
      for(let accountInfo of accounts){ //inner loop of the accounts
        if (id === accountInfo.id){
            result.push({returned, ...accountInfo}) //push the returned value along with the ...rest of the borrower's information
          }
        if (result.length === 10) break; //breaks and stops pushing if reached 10 entries
      }
    }
return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
