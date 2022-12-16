import cookie from 'react-cookies';

export default function AddAbsence({ setAffichage }) {

    //判断点击add还是modify返回不同页面

    const absence = {
        userId: cookie.load("_id"),
        userName: cookie.load("name"),
        debut: "",
        fin: "",
        status: "EN_ATTENTE",
        type: "",
        motif: ""
    };

    /*    const test = "2022-12-30";
       const year = test.split('-');
       console.log(year);
       console.log(Number(test.split('-')[0]) >= Number(test.split('-')[1])); */
    /* const year = 1>2;
    console.log(year); false
 */



    //需要计算请假天数，需要判断是否有jf rttp 周六周日
    function verification() {
        /*    const year = Number(absence.debut.split('-')[0]) <= Number(absence.fin.split('-')[0]);
           const month = Number(absence.debut.split('-')[1]) <= Number(absence.fin.split('-')[1]);
           const day = Number(absence.debut.split('-')[2]) <= Number(absence.fin.split('-')[2]);
           if (year && month && day) {
               return true;
           } else {
               return false;
           } */
        const dayBegin = new Date(absence.debut);
        const dayEnd = new Date(absence.fin);
        console.log((dayEnd-dayBegin)/(60*60*24*1000)+1);
        if (dayBegin <= dayEnd) {
            return true;
        } else {
            return false;
        };

    }
    //还要加入所选日期是否为jf rttp 或周六周日
    function handleFin(e) {
        // console.log(e.target.value);
        const errorFin = document.querySelector("#errorFin");
        absence.fin = e.target.value;
        //e.target.value="2022-12-12";
        if (absence.debut === "") {
            errorFin.className = "text-success";
            errorFin.innerHTML = "OK";
        } else if (verification()) {
            errorFin.className = "text-success";
            errorFin.innerHTML = "OK";
        } else {
            errorFin.className = "text-danger";
            errorFin.innerHTML = "date fin need later than date begin";
            e.target.value = "";
            absence.fin = "";
        }


    }
    //还要加入所选日期是否为jf rttp 或周六周日
    function handleDebut(e) {
        //console.log(e.target.value);
        const errorDebut = document.querySelector("#errorDebut");
        absence.debut = e.target.value;
        if (absence.fin === "") {
            errorDebut.className = "text-success";
            errorDebut.innerHTML = "OK";
        } else if (verification()) {
            errorDebut.className = "text-success";
            errorDebut.innerHTML = "OK";
        } else {
            errorDebut.className = "text-danger";
            errorDebut.innerHTML = "date begin need earlier than date fin";
            e.target.value = "";
            absence.debut = "";
        }

    }

    function handleType(e) {
        //console.log(e.target.value);
        const errorType = document.querySelector("#errorType");
        absence.type = e.target.value;
        if (absence.type === "css") {
            errorType.className = "text-success";
            errorType.innerHTML = "OK";
        }
    }
    function handleModif(e) {
        //console.log(e.target.value);
        absence.motif = e.target.value;
    }
    function validation() {


    }




    return (

        <div className="container d-flex flex-column align-items-center">
            <div className="row "><h4>Demande d'absence</h4></div>
            <div className="row w-75 ">
                <form action="" className="w-75">


                    <table className="table ">
                        <tbody>
                            <tr>
                                <td><label htmlFor="debut" className="form-label">Date de début</label></td>
                                <td><input onChange={(e) => handleDebut(e)} type="date" className="form-control" id="debut" name="debut" defaultValue="" /></td>

                            </tr>
                            <tr><td><p id='errorDebut'></p></td></tr>
                            <tr>
                                <td><label htmlFor="fin" className="form-label">Date de fin</label></td>
                                <td><input onChange={(e) => handleFin(e)} type="date" className="form-control" id="fin" name="fin" defaultValue="" /></td>
                            </tr>
                            <tr><td><p id='errorFin'></p></td></tr>
                            <tr>
                                <td><label htmlFor="type" className="form-label">Type de congé</label></td>
                                <td><select onChange={(e) => handleType(e)} className="form-select" id="type" name="type" defaultValue="css" >
                                    <option value="css">Congé sans solde</option>
                                    <option value="cp">Congé payé</option>
                                    <option value="rtt">RTT</option>
                                </select></td>

                            </tr>
                            <tr><td><p id='errorType'></p></td></tr>
                            <tr>
                                <td><label htmlFor="motif" className="form-label">Motif</label></td>
                                <td><textarea onChange={(e) => handleModif(e)} className="form-control" id="motif" name="motif" rows="5"></textarea></td>

                            </tr>
                            <tr><td><p id='errorMotif'></p></td></tr>
                        </tbody>
                    </table>



                    <div className="d-flex flex-row justify-content-evenly m-2">
                        <input onClick={() => setAffichage("default")} type="reset" className="btn btn-danger" value="Annuler" />
                        <input onClick={() => validation()} type="reset" className="btn btn-success" value="Valider" />
                    </div>

                </form>
            </div>
        </div>

    );
}