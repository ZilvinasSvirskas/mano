import { useEffect } from "react";
import { useState } from "react";

function Modal({ setModalData, modalData, setEditData }) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('1');
    const [subscription, setSubscription] = useState('');
    const [id, setId] = useState('0');
    //kas nutinka kai paspaudziame ant button
    const buttonHandler = () => {
        setEditData({
            title,    //title:title,price:price,category:category(kintamojo vardas atitinka kintamojo savybes)
            author,
            category,
            subscription,
            id
        });
        setModalData(null);
    }

    //reacto kontroliuojamos formos
    const inputHandler = (e, which) => {
        switch (which) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'price':
                setAuthor(e.target.value); //regex keicia kableli i taska
                break;
            case 'category':
                setCategory(e.target.value);
                break;
            case 'subscription':
                setSubscription(e.target.value);
                break;

            default:
        }
    }

    useEffect(() => {
        if (modalData === null) {
            setTitle('');
            setAuthor('');
            setCategory(1);
            setSubscription('');

        } else {
            setTitle(modalData.title);
            setAuthor(modalData.author);
            setCategory(modalData.category);
            setSubscription(modalData.subscription);
            setId(modalData.id);
        }
    }, [modalData])

    if (modalData === null) {
        return null;
    }

    return (
        <div className="modal modal-dialog-centered" id="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Book information</h5>
                        <button type="button" className="close" onClick={() => setModalData(null)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Book title</label>
                                <input type="text" className="form-control" onChange={e => inputHandler(e, 'title')} value={title} />
                                <small className="form-text text-muted">Please add new book title.</small>
                            </div>
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Movie author</label>
                                            <input type="text" className="form-control" onChange={e => inputHandler(e, 'author')} value={author} />
                                            <small className="form-text text-muted"> Add movie author.</small>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Book category</label>
                                            <select className="form-control" onChange={e => inputHandler(e, 'category')} value={category}>
                                                <option value="1">Philosophy</option>
                                                <option value="2">Romance</option>
                                                <option value="3">True crime</option>
                                                <option value="4">Short story</option>
                                                <option value="5">Thriller</option>
                                                <option value="6">Picture book</option>
                                                <option value="7">Journal</option>
                                            </select>
                                            <small className="form-text text-muted"> Book type.</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary m-3" onClick={buttonHandler}>Save</button>
                        <button type="button" className="btn btn-outline-danger m-3" onClick={() => setModalData(null)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;