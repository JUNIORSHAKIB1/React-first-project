import Book from "./Books"
export default function BookStore({books}){
    return (
        <div>
            <h3>BookName: {books.length}</h3>
            {
                books.map(book=><Book book={book}></Book> )
            }

        </div>
    )
}