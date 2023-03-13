import React from 'react';
import { useState } from 'react';
import env from '../env.json'

function Create() {

  const [url, setUrl] = useState();
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');



  const sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        if (response.result) {
          setUrl(env.url+'/'+response.url);
        }
      })
  }

  const loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert("Введіть текст замітки");
      return false;
    }
    sendData({"note" : note})
  }


  return (
    <div className="row"> 
      <div className="col-12">
          <div className="text">
            <form action="" onSubmit={loadDataFromForm} className={formClass}>
              <div className="form-group">
                  <label htmlFor="note">Введіть замітку</label>
                  <textarea name="note" className="form-control" id="note" placeholder='Текст замітки'></textarea>
                  <p><b>Увага!</b> Максимальна довжина замітки 1000 символів.</p>
              </div>  
              <div className="form-group text-right">
                <button type="submit" className="btn btn-primary">Створити замітку</button>
              </div>
            </form>
            <div className={lineClass}>
              <div className="alert alert-primary" role="alert">{url}</div>
              <p>Скопіюйте URL і передайте адресату. <b>Увага!</b> переглянути замітку можливо один раз!</p>
              <div className="text-right"><button onClick={function () { window.location.reload() }} className="btn btn-primary">Створити нову замітку</button></div>
            </div>
          </div>
       </div>
    </div>
  );
}

export default Create;
