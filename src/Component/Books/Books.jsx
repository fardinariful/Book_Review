import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
     const [books,setbooks]=useState([]);
     useEffect(()=>{
        fetch('Books.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
     },[])

    return (
        <div>
            <h1>Books:{books.length}</h1>
            {
                books.map(book=><Book key={book.id} book={book}></Book>)
            }
            
        </div>
    );
};

export default Books;