
import React, {useState} from "react";
import {validateValue} from "./validate";

export function App() {

  const [value, setValue]=useState('');
  const [touched, setTouched]=useState(false);
  const [valueMessage, setValueMessage]=useState('');

  function handleSubmit(event) {
    event.preventDefault(value);
    setTouched(true);

     setValueMessage(validateValue(value));

    const isFormValid=!validateValue(value);
    if (!isFormValid) return;

    alert('Форма отправлена')
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) 
      document.querySelector('button').click();
  });

  return (
     <div className="container">
      <h1>Форма для ввода массива данных</h1>
      <h3>Введите числа через запятую (можно также и через пробел)</h3>
        <form className="form" onSubmit={handleSubmit}> 
          <textarea
              className="input"
              value={value}
              onChange={handleChange}
              aria-invalid={(valueMessage && !valueMessage.includes('Сумма двух наименьших')) ? 'true': undefined}/> 
          <button type='submit' className="button" >Рассчитать</button>
          {touched && valueMessage && (<div className="answer">{valueMessage}</div>)}
        </form>
     </div>
  )
  }


