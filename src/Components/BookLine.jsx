function BookLine({ book, setDeleteId,setModalData }) {
    //perdedamas li i atskira komponenta
    return (
        <li className="list-group">
            <div className="book-line">
                <div className="book-line_content">
                    {book.title}
                </div>
                <div className="film-line_buttons">
                <button type="button" className="btn btn-primary m-1" onClick={()=>setModalData(book)}>Edit</button>
                <button type="button" className="btn btn-danger m-1" onClick={()=>setDeleteId({id:book.id})}>Delete</button>
                </div>
            </div>

        </li>
    )
}

export default BookLine;