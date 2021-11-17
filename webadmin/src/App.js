import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState('')
  useEffect(async () => {
    const dat = await (await firebase.firestore().collection('test').doc('test').get()).data()
    console.log(dat)
    setData(dat.test)
  }, [])
  return (
    <div>
     { data }
    </div>
  );
}

export default App;
