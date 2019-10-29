import React from 'react'

const ButikAdmin = () => {
    return (
        <>
        <h1 className="text-center">Butik Admin Side</h1>
            <form className="mb-5">
                <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Logo</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputName4">Navn</label>
                    <input type="text" className="form-control" id="inputName4" placeholder="Navn" />
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleFormControlTextarea1">Detail Oplyninger</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Tlf.</label>
                    <input type="number" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>

                <button type="submit" className="btn btn-danger">Slet Profil</button>
                <button type="submit" className="btn btn-primary">Rediger</button>
            </form>
            <form className="mb-5">
                <div class="form-group col-md-12">
                    <label for="inputkodeord">Kodeord:</label>
                    <input type="text" className="form-control" id="inputkodeord" placeholder="Kodeord" />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputbeløb">Beløb der skal trækkes: </label>
                    <input type="text" className="form-control" id="inputbeløb" placeholder="Beløb i kr." value="115 kr." />
                </div>
                <button type="submit" class="btn btn-primary">Rediger</button>
            </form>
            <div className="mb-5">
                <h4>Samlede indtægt: 12.400.545 kr.</h4>
            </div>
        </>
    )
}

export default ButikAdmin
