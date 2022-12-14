export default function LoginError(){
    return (
        <>
             <div className="container d-flex flex-column align-items-center">
                <div className="row text-center mt-3">
                    <h1>Login</h1>
                </div>

                <div className="row w-50" >
                    
                    <form >
                        <div className=" mb-3">
                            <label htmlFor="email" className="form-label">Mail address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                               
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password"/>
                        </div>
                      <div className="d-flex justify-content-between ">
                      <p className="text-danger">Incorrect Mail address or passcord!</p>
                        <button  type="reset" className="btn btn-primary">Login</button>
                      </div>
                    </form>
                    
                </div>

            </div>
        </>
    );
}