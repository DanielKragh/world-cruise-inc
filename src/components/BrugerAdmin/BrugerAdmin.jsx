import React from 'react'

const BrugerAdmin = () => {
    return (
        <>
        <h1 className="text-center">Bruger Admin Side</h1>

            <form className="mb-5">
                <div className="form-group col-md-12">
                    <label htmlFor="inputName4">Navn</label>
                    <input type="text" className="form-control" id="inputName4" placeholder="Navn" />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputAddress">Addresse</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputText">Kodeord</label>
                    <input type="number" className="form-control" id="inputText" placeholder="Kodeord" />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputState">Nationalitet</label>
                    <select id="inputState" className="form-control">
                        <option selected>Vælg Nationalitet</option>
                        <option>Danmark</option>
                        <option>Tyskland</option>
                        <option>Sverige</option>
                        <option>Norge</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-danger">Slet Profil</button>
                <button type="submit" className="btn btn-primary">Rediger</button>
            </form>
            <form className="mb-5">
                <div className="form-group col-md-12">
                    <label htmlFor="inputOverfør">Overfør til World Cruise konto:</label>
                    <input type="number" className="form-control" id="inputOverfør" placeholder="Overførelses beløb" />
                </div>
                <button type="submit" className="btn btn-primary">Overfør</button>

            </form>
            <div className="mb-5">
                <h4>Konto balance: <span class="kontoBalance">-400 kr.</span></h4>
            </div>
            <h5>Butikker du har handlet i:</h5>
            <table className="mb-5">
                <thead>
                    <tr>
                        <th>Butik</th>
                        <th>Pris</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jysk</td>
                        <td>300 kr.</td>
                    </tr>
                    <tr>
                        <td>THansen</td>
                        <td>540 kr.</td>
                    </tr>
                    <tr>
                        <td>Bilka</td>
                        <td>250 kr.</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default BrugerAdmin

