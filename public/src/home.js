function getCount(item){
  return item.length
}//helper function

const getTotalBooksCount = books => getCount(books)

const getTotalAccountsCount = accounts => getCount(accounts)

function getBooksBorrowedCount(books) {
  let currentlyBorrowed = books.filter(({borrows}) => borrows[0].returned === false)
  return getCount(currentlyBorrowed)
}


function getMostCommonGenres(books) {
  
    const getGenreAndCount = (genre) => {
        let count = 0
        for (let book of books){
          if(book.genre === genre) count++
        }
        return {name: genre, count};
      } // generates the object structure for a given genre {name: genre, count: x}

    const genresList = books.reduce((acc, book)=> {
      if (!acc.includes(book.genre)) acc.push(book.genre)
      return acc
    }, []) //a list of each genre
    console.log(genresList)

let result = genresList.map(genre => getGenreAndCount(genre))
result.sort((genreA,genreB) => genreA.count < genreB.count ? 1:-1)
console.log(result)
  result.length = 5
return result 
}

function getMostPopularBooks(books) {
  books.sort((a,b) => a.borrows.length < b.borrows.length ? 1:-1)
  let result = books.reduce((acc,book) => {
      let name = book.title
      let count = book.borrows.length
      acc.push({name, count})
      return acc
    }, [])
  result.length = 5
return result;
}


function getMostPopularAuthors(books, authors) {
      // this helper function generates the object structure for the author 
      //{name: author's name, count: #ofBorrowsTotal}
      const authorAndCount = (author) => {
        let count = 0
        for (let book of books){
            if(book.authorId === author.id){
            count+= book.borrows.length
            }
        } 
        return {name: `${author.name.first} ${author.name.last}`, count: count};
      }

  let result = authors.map(author => authorAndCount(author))
  result.sort((authorA,authorB) => authorA.count < authorB.count ? 1:-1)
  result.length = 5
return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
