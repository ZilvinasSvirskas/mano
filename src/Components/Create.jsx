import { useState } from "react";

function Create({ setCreateData }) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('1');
    const [subscription, setSubscription] = useState('');

    //kas nutinka kai paspaudziame ant button
    const buttonHandler = () => {
        setCreateData({
            title,    //title:title,price:price,category:category(kintamojo vardas atitinka kintamojo savybes)
            author,
            category,
            subscription
        });
        setTitle('');   //po informacijos ivedimo apie objekta laukeliai lieka tusti
        setAuthor('');
        setCategory(1);
        setSubscription('')
    }

    //reacto kontroliuojamos formos
    const inputHandler = (e, which) => {
        switch (which) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'author':
                setAuthor(e.target.value);
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

    return (


        <div classNameName="card m-2">
            <div classNameName="card-header">
                <h3>Add new book</h3>
            </div>
            <div classNameName="card-body">
                <div classNameName="form-group">
                    <label>Book title</label>
                    <input type="text" classNameName="form-control" onChange={e =>inputHandler(e,'title')} value={title}/>
                    <small classNameName="form-text text-muted">Please add new book title.</small>
                </div>
                <div classNameName="container p-0">
                    <div classNameName="row">
                        <div classNameName="col-4">
                            <div classNameName="form-group">
                                <label>Book author</label>
                                <input type="text" classNameName="form-control" onChange={e =>inputHandler(e,'author')} value={author} />
                                <small classNameName="form-text text-muted"> Add book author.</small>
                            </div>
                        </div>
                        <div classNameName="col-6">
                            <div classNameName="form-group">
                                <label>Book category</label>
                                <select classNameName="form-control" onChange={e =>inputHandler(e,'category')} value={category}>
                                    <option value="1">Philosophy</option>
                                    <option value="2">Romance</option>
                                    <option value="3">True crime</option>
                                    <option value="4">Short story</option>
                                    <option value="5">Thriller</option>
                                    <option value="6">Picture book</option>
                                    <option value="7">Journal</option>
                                </select>
                                <small classNameName="form-text text-muted"> Book type.</small>
                            </div>
                        </div>
                        <div classNameName="buttons">
                        <button type="button" classNameName="btn btn-success m-3" onClick={buttonHandler}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create;