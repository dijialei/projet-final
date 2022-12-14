import JFrows from "./JFrows";
export default function JFadmin({datatest}) {
    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="row text-center mt-3">
                    <h1 >Jours Fériés et RTT employeurs</h1>
                </div>
                <div className="row text-center m-3">
                    <label htmlFor="year" className="form-label">Année</label>
                    <select className="form-select" id="year" name="year" defaultValue="2022" >
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
                <div id="tableContainer" className="row w-75" >
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
                        <tbody>

                            {
                                datatest.map(data => {
                                    //console.log(data);
                                    return (
                                        <tr>
                                            <JFrows data={data} />
                                            <td><a  className="btn btn-sm btn-info me-1">✎</a>
                                                <a className="btn btn-sm btn-danger">✖︎</a>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        </>
    );
}