import { useState } from "react";
import AddAbsence from "./AddAbsence";
import GestionDefault from "./GestionDefault";
import ModifyAbsence from "./ModifyAbsence";


export default function Pagegestion() {

    const [affichage,setAffichage] = useState("");

  

    switch (affichage) {
        case "add":
            return (
                <>
                    <AddAbsence setAffichage={(newState)=>setAffichage(newState)} />
                </>
            );
        case "modify":
            return (
                <>
                    <ModifyAbsence setAffichage={(newState)=>setAffichage(newState)} />
                </>
            );
        default:
            return (
                <>
                    <GestionDefault affichage={affichage} setAffichage={(newState)=>setAffichage(newState)}  />
                </>
            );
    }


}