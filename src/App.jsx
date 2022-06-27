
import { useEffect, useState} from 'react';
import './bootstrap.css';
import './App.scss';
import axios from 'axios';
import Create from './Components/Create';
import BookLine from './Components/BookLine';
import Modal from './Components/Modal';

function App() {

  
  //atvaizduoja filmus
  const [books, setBooks] = useState([]);

  //state buttonui info tik is create 
  const [createData,setCreateData] = useState(null);//null - objekto nebuvimas
  const [editData,setEditData] = useState(null);
  const [deleteId,setDeleteId] = useState(null);

  const [modalData,setModalData] = useState(null);
  
  const [lastUpdate,setLastUpdate] = useState(Date.now());
  
  
  //READ
  useEffect(() => {
    axios.get('http://localhost:3003/books-manager')
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
  }, [lastUpdate]);
  //atvaizduoja knygas

  //CREATE
  useEffect(()=>{
    if (null=== createData){   // pirma karta mountinasi ir useEffect suveikia
      return;
    }
      axios.post ('http://localhost:3003/books-manager',createData)// naujos info dejimas i serveri yra post
      .then(response => {
        console.log(response)
        setLastUpdate(Date.now());
      });
    

  },[createData]);

  //EDIT
  useEffect(()=>{
    if (null=== editData){   // pirma karta mountinasi ir useEffect suveikia
      return;
    }
      axios.put ('http://localhost:3003/books-manager/'+ editData.id, editData)
      .then(response => {
        console.log(response)
        setLastUpdate(Date.now());
      });
    

  },[editData]);

  
  //DELETE
  useEffect(()=>{
    if (null=== deleteId){   
      return;
    }
      axios.delete ('http://localhost:3003/books-manager/'+ deleteId.id,) //delete visa adresa
      .then(response => {
        console.log(response)
        setLastUpdate(Date.now());
      });
    

  },[deleteId])
  
  //mygtuko paspaudimo info issiuntimas paimt is create ir issiust i serveri
  
  return (

    
    
    <>
    <div className="container">
      <div className="row">
        <div className="col-4">
         <Create setCreateData={setCreateData}></Create>  
        </div>
        <div className="col-8">
          <div className="card m-2">
            <div className="card-header">
              <h3>List of Books</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {
                  books.map(b => <BookLine key={b.id} book={b} setDeleteId={setDeleteId} setModalData={setModalData}></BookLine>)
                }
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
    <Modal setEditData={setEditData} setModalData={setModalData} modalData={modalData}></Modal>
    </>
  );
}

export default App;
