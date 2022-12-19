export default function Gestionrows({ setSelectedAb,data ,setAffichage}) {
    //console.log(data);
    return (
        
            <tr>
                <td>{data.debut}</td>
                <td>{data.fin}</td>
                <td>{data.type}</td>
                <td>{data.status}</td>
                <td><a onClick={()=>{setSelectedAb();setAffichage("add")}} className="btn btn-sm btn-info me-1">✎</a>
                    <a onClick={()=>setSelectedAb()} className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">✖︎</a>
                </td>
            </tr>
        
    );
}