
import './App.css';
import Accueil from './components/Accueil';
import Validation from './components/PageAdmission/Validation';
import AddAbsence from './components/PageGestion/AddAbsence';
import ModifyAbsence from './components/PageGestion/ModifyAbsence';
import Pagegestion from './components/PageGestion/Pagegestion';
import JoursFeries from './components/PageJoursFeries/JoursFeries';
import Login from './components/Login/Login';
import cookie from 'react-cookies';
import { useState } from 'react';


function App() {
  //console.log(cookie.load("username"));
/* const[ login,setLogin] = useState(false);
if (login || cookie.load("_id")) {
  return(
    <Accueil/>
  );
  
}else{
  return (
    <div className="App">
    <Login setLogin={()=>setLogin(true)} />
    </div>
  );
} */
return (
  <div className="App">
  <JoursFeries />
  </div>
);
}

export default App;
