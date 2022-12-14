import ValidationRows from "./ValidationRows";
import cookie from 'react-cookies';
export default function Validation() {
    const datatest=[
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        },
        {
            id:crypto.randomUUID(),
            debut:"31/07/2017",
            fin:"31/07/2017",
            type:"RTT",
            nom:"user"
        }
    ];
    //console.log(cookie.load("userName"));
    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="row text-center mt-3">
                    <h1 >Validation des demandes</h1>
                </div>
                <div id="tableContainer" className="row w-75" >
                    <table className='table table-striped table-hover'>
                        <thead className="table-dark">
                            <tr>
                                <th ><strong>Date de début</strong></th>
                                <th ><strong>Date de fin</strong></th>
                                <th ><strong>Type</strong></th>
                                <th ><strong>Nom</strong></th>
                                <th ><strong>Action</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datatest.map(data => {
                                    //console.log(data);
                                    return (<ValidationRows key={data.id} data={data} />);
                                })
                            }
                        </tbody>
                    </table>

                </div>
               
            </div>


        </>
    );
}