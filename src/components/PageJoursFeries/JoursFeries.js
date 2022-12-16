import { useEffect, useState } from "react";
import JFadmin from "./JFadmin";

import JFuser from "./JFuser";
import axios from "axios";
import AddJF from "./AddJF";

export default function JoursFeries() {
    const [jfs, setJfs] = useState([]);
   
    const urlBackend = "http://127.0.0.1:3001/";
    const role = "manager";

    function fetchJF() {
        axios.get(urlBackend + 'jourferie').then((res) => {
            setJfs(res.data);
        })
    };
    
    const [selectedJour,setSelectedJour] = useState({
        "_id": "",
        "date": "",
        "type": "",
        "jour": "",
        "libelle": ""
    });
    const initSelected={
        
        date: "",
        type: "",
        jour: "",
        libelle: ""
    };
    const addJour = {
        
        date: "",
        type: "add",
        jour: "",
        libelle: ""
    }
    function handleAdd(obj){
        setSelectedJour(obj);
    }



    useEffect(() => { fetchJF() }, []);
    

    if (selectedJour.type !== "") {
        return (<AddJF handleAdd={()=>handleAdd(initSelected)} selectedJour={selectedJour} />);

    }else if (role === "user") {
        return (
            <JFuser joursferies={jfs} />
        );
    } else {
        return (
            <JFadmin addJour={addJour} handleAdd={(obj)=>handleAdd(obj)} joursferies={jfs} />

        );
    }


}

