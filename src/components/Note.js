import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json'


function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('');
    const [formClass, setFormClass] = useState('');
    const [errorClass, setErrorClass] = useState('hide');




  useEffect(() => {
    if (noteURL !== undefined) {
      setFormClass('hide');
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ "url": noteURL })
      })
        .then(response => response.json())
        .then(response => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass('');
            setFormClass('hide');
          }
          else if (!response.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('')
          }
        });
    }
    else {
      setLineClass('hide');
      setFormClass('');
    }
  }, [])

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert("Введіть текст замітки");
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }

  function searchNote() {
    window.location.href = env.url;
    console.log(env.url);
  }

  return (
      <div className="row">
        <div className="col-12">

          <div className={lineClass}>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Замітка:</h4>
              <div>{noteText}</div>
              <hr />
              <p className="mb-0">Увага! Скопіюйте замітку. Після демонстарції замітка буде видалена!</p>
            </div>  
            <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Переглянути іншу замітку</button></div>
            
          </div>
        <div className={errorClass}>
          <div className="alert alert-danger" role="alert">
            Помилка. Спробуйте знову
          </div>
           <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Переглянути іншу замітку</button></div>
        </div>
          
            <div className="text">
              
                  <form action="" onSubmit={getNote} className={formClass}>
                    <div className="form-group">
                      <label htmlFor="url">Введіть hash замітки</label>
                      <input type="text" name="url" id="url" className="form-control" placeholder='hash' />
                    </div>
                    <div className="form-group text-right">  
                      <button type="submit" className="btn btn-primary">Пошук замітки</button>
                    </div>
                  </form>
            </div>
        </div>

      </div>
    
  );
}

export default Note;

{/*  */}