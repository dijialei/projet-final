export default function AddJF({selectedJour,handleAdd}){
 
    let title ="";
    if (selectedJour.type === "add") {
        title="Ajouter un jour férié ou RTT employeur";        
    }else{
        title="Modifier un jour férié ou RTT employeur"
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="row m-5"><h4>{title}</h4></div>
            <div className="row w-75 ">
                <form action="" className="w-75">


                    <table className="table">
                        <tbody>
                        <tr>
                            <td><label htmlFor="date" className="form-label">Date</label></td>
                            <td><input type="date" className="form-control" id="date" name="date" defaultValue={selectedJour.date} /></td>
                        </tr>
                        
                        <tr>
                            <td><label htmlFor="type" className="form-label">Type de congé</label></td>
                            <td><select className="form-select" id="type" name="type" defaultValue={selectedJour.type} >
                                <option value="">Choose the type</option>
                                <option value="Jour Férié">Jour Férié</option>
                                <option value="RTT Employeur">RTT Employeur </option>
                                
                            </select></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="motif" className="form-label">Motif</label></td>
                            <td><textarea className="form-control" id="motif" name="motif" rows="5" defaultValue={selectedJour.libelle}></textarea></td>
                        </tr>
                        </tbody>
                    </table>



                    <div className="d-flex flex-row justify-content-evenly m-2">
                        <input onClick={()=>handleAdd()} type="reset" className="btn btn-danger" value="Annuler" />
                        <input type="submit" className="btn btn-success" value="Valider" />
                    </div>

                </form>
            </div>
        </div>
    );
}