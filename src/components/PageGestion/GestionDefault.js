import { useState } from "react";
import Gestionrows from "./Gestionrows";
import cookie from 'react-cookies';
//import './gestiondefault.css'
export default function GestionDefault({setAffichage}){
    const [datatest, setDataTest] = useState([{
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    },
    {
        id: crypto.randomUUID(),
        debut: "12/12/2022",
        fin: "12/12/2022",
        type: "Congés payés",
        state: "validee"
    }
    ]);




    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="row text-center mt-3">
                    <h1 >Gestion des absences</h1>
                </div>
                <div id="tableContainer" className="row w-75" >
                    <table className='table table-striped table-hover'>
                        <thead className="table-dark">
                            <tr>
                                <th ><strong>Date de début</strong></th>
                                <th ><strong>Date de fin</strong></th>
                                <th ><strong>Type</strong></th>
                                <th ><strong>State</strong></th>
                                <th ><strong>Action</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datatest.map(data => {
                                    //console.log(data);
                                    return (<Gestionrows key={data.id} data={data} setAffichage={(newState)=>setAffichage(newState)}/>);
                                })
                            }
                        </tbody>
                    </table>

                </div>
                <div className="d-flex flex-row-reverse align-items-center w-75 mt-5">
                    <a onClick={()=>setAffichage("add")} className="btn btn-sm btn-info me-1"><span className="material-symbols-outlined">
                        add
                    </span>
                    </a>
                    <h4>Demander une absence</h4>
                </div>
                <div className="d-flex flex-column align-items-start w-75">
                    <h6>Soldes des compteurs:</h6>

                    <ul>
                        <li>Congés payés:{cookie.load('cp')}</li>
                        <li>RTT:{cookie.load('rtt')}</li>
                    </ul>
                </div>
            </div>


        </>
    );
}