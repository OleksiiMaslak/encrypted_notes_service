

function Main() {
  return (
    <>
       <div className="container">
            <div className="col-12">
                <div className="text">
                    <ul className="row button-list">
                        <li className="col-6"><a href="/create" type=" button" className="btn btn-primary">Створити замітку</a></li>
                        <li className="col-6"><a href="/note" type=" button" className="btn btn-primary">Переглянути замітку</a></li>
                    </ul>
                </div>
                
                <div className="text">
                    <p><b>ShareNotes</b> – сервіс для обміну замітками. Створіть замітку, відправте посилання на замітку і ваш друг зможе її переглянути. Після перегляду замітка буде видалена (або через 15 хвилин з моменту створення).</p>
                    <p>Як створити замітку? </p>
                    <ul>
                        <li>перейдіть по посиланню</li>
                        <li>Вставте текст і натисніть "створити"</li>
                        <li>Выдправте сгенеровану адресу другу!</li>
                    </ul>
                    <p>Як прочитати замытку? Перейдыть по отриманному URL, або введыть адресу руками тут.</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Main;
