function findAccountById(accounts, id) {
  return accounts.find((person) => person.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA,nameB) => nameA.name.last > nameB.name.last ? 1:-1)
}

function getTotalNumberOfBorrows({id: accountId}, books) {
  let totalBorrows = 0; //placeholder for the total
  for (let book of books) { //book is an object in books(an array)
    let {borrows} = book //destructuring borrows(an array) out of book(an object)
    for (let borrower of borrows){ //looping thorugh all of borrows's borrowers
      if (borrower.id === accountId) totalBorrows++ //increments total when specific account is found
    } //end of one borrower obj in borrows, checks the next borrower.id
  }//end of book, checks the next
  return totalBorrows;
}

function getBooksPossessedByAccount({id: borrowerID}, books, authors) {
let result = [];
  for (let book of books) { //book is an object in books(an array)
  let {authorId, borrows} = book //destructuring borrows(an array)out of book(an object); and authorID to later locate author from authors arr 
    for (let borrower of borrows){ //looping thorugh all borrows's borrowers
    if (borrower.id === borrowerID && borrower.returned === false){
        let author = authors.find( author => author.id === authorId)
        book = {author, ...book}//adds author's obj as a property to the book obj
        result.push(book) 
    } //end of borrower, checks the next borrower.id
  }
}
return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
