import logo from './logo.svg';
import './App.css';
import { useState, useTransition } from 'react';

function App() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE = 20000;
  

  function textHandler(e){
    setText(e.target.value);
    //it will set low priority to the code in startTransaction, it will render twice if the value is changed one for - setText(e.target.value); and another for code in startTransaction
    startTransition(()=>{
      const l = []
      for ( let i = 0; i<= LIST_SIZE; i++){
        l.push(e.target.value)
      }
      setList(l);
    })
  }

  return (
    <>
      <input type='text' value={text} onChange={textHandler}/>
      {isPending ? 'Loading....': list.map((item,index)=>{ return <div key={index}>{item}</div>})}
    </>
  );
}

export default App;
