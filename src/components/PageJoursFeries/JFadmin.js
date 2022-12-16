import JFrows from "./JFrows";
export default function JFadmin({ datatest }) {

    function hanldleClick(data) {
        console.log(data);
    }


    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="row text-center ">
                    <h3 >Jours Fériés et RTT employeurs</h3>
                </div>
                <div className=" d-flex align-items-center text-center ">
                    <label htmlFor="year" className="form-label me-3">Année:</label>
                    <select className="form-select" id="year" name="year" defaultValue="2022" >
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
                <div className="roz w-75">
                    <table className='table table-striped table-hover'>
                    <thead className="table-dark">
                            <tr>
                                <th ><strong>Date</strong></th>
                                <th ><strong>Type</strong></th>
                                <th ><strong>Jour</strong></th>
                                <th ><strong>Contents</strong></th>
                                <th ><strong>Action</strong></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div id="tableContainer" className="row w-75" >
                    <table className='table table-striped table-hover'>
                       
                        <tbody>

                            {
                                datatest.map(data => {
                                    //console.log(data);
                                    return (
                                        <tr key={data.id}>
                                            <JFrows data={data} />
                                            <td><a onClick={() => hanldleClick(data)} className="btn btn-sm btn-info me-1">✎</a>
                                                <a onClick={() => hanldleClick(data)} className="btn btn-sm btn-danger">✖︎</a>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>

                </div>
                <div className="d-flex flex-row-reverse align-items-center w-75 mt-5">
                    <a className="btn btn-sm btn-info ms-2"><span className="material-symbols-outlined">
                        add
                    </span>
                    </a>
                    <h4>Ajouter un jour férié ou RTT Employeur</h4>
                </div>

            </div>
        </>
    );
}