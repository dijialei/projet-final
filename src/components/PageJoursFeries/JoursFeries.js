import { useEffect, useState } from "react";
import JFadmin from "./JFadmin";

import JFuser from "./JFuser";
import axios from "axios";
import AddJF from "./AddJF";
import cookie from 'react-cookies';

export default function JoursFeries() {
    
    const [jfs, setJfs] = useState([]);

    const urlBackend = "http://127.0.0.1:3001/";
    
    function fetchJF() {
        axios.get(urlBackend + 'jourferie').then((res) => {
            setJfs(res.data);
        })
    };

    const [selectedJour, setSelectedJour] = useState({
        _id: "",
        date: "",
        type: "",
        jour: "",
        libelle: ""
    });
    const initSelected = {
        _id: "",
        date: "",
        type: "",
        jour: "",
        libelle: ""
    };
    const addJour = {
        _id: "",
        date: "",
        type: "add",
        jour: "",
        libelle: ""
    }
    function handleAdd(obj) {

        setSelectedJour(obj);
        //console.log(selectedJour);

    }
    //selectedJour.jour属性需要在这里计算
    function handleDate(e) {
        //console.log(e.target.value);
        selectedJour.date = e.target.value;
        const date = new Date(selectedJour.date);
        const index = date.getDay();
        const week = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
        selectedJour.jour = week[index];
        //console.log(date);
        //console.log(selectedJour.jour);
    };
    function handleType(e) {
        //console.log(e.target.value);
        selectedJour.type = e.target.value;
    };
    function handLibelle(e) {
        //console.log(e.target.value);
        selectedJour.libelle = e.target.value;
    };

    function valitation() {
        if (!selectedJour._id) {
            delete selectedJour._id;
            //console.log(selectedJour);
            axios.post(urlBackend + 'addjourferie', selectedJour).then((res) => {
                setJfs(res.data);
            });
            setSelectedJour(initSelected);
        } else {
            const newJour = {
                _id: selectedJour._id
            };
            if (selectedJour.date) {
                newJour.date = selectedJour.date;
            };
            if (selectedJour.type) {
                newJour.type = selectedJour.type;
            };
            if (selectedJour.jour) {
                newJour.jour = selectedJour.jour;
            };
            if (selectedJour.libelle) {
                newJour.libelle=selectedJour.libelle;  
              };
              axios.post(urlBackend+'updatejourferie',newJour).then((res)=>{
                setJfs(res.data);
              });
              setSelectedJour(initSelected);
            

        };
    };
    function handleDelete(obj) {
        axios.post(urlBackend + 'deletejourferie', obj).then((res) => {
            setJfs(res.data);
        });
    };


    useEffect(() => { fetchJF() }, []);


    if (selectedJour.type !== "") {
        return (<AddJF valitation={() => valitation()} handleType={(e) => handleType(e)} handLibelle={(e) => handLibelle(e)} handleDate={(e) => handleDate(e)} handleAdd={() => handleAdd(initSelected)} selectedJour={selectedJour} />);

    } else if (cookie.load("role") === "user") {
        return (
            <JFuser joursferies={jfs} />
        );
    } else {
        return (
            <JFadmin handleDelete={(obj) => handleDelete(obj)} addJour={addJour} handleAdd={(obj) => handleAdd(obj)} joursferies={jfs} />

        );
    }


}

