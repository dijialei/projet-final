export default function JFrows({data}){
    return(
    <>
        
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>{data.jour}</td>
                <td>{data.Contents}</td>
                {/* <td><a onClick={()=>setAffichage("modify")} className="btn btn-sm btn-info me-1">✎</a>
                    <a className="btn btn-sm btn-danger">✖︎</a>
                </td> */}
           
    </>
    );
}