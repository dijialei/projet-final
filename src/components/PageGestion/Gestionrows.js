export default function Gestionrows({ data,setAffichage }) {
    //console.log(data);
    return (
        
            <tr>
                <td>{data.debut}</td>
                <td>{data.fin}</td>
                <td>{data.type}</td>
                <td>{data.status}</td>
                <td><a onClick={()=>setAffichage("modify")} className="btn btn-sm btn-info me-1">✎</a>
                    <a className="btn btn-sm btn-danger">✖︎</a>
                </td>
            </tr>
        
    );
}