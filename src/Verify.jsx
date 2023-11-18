import { Link } from "react-router-dom";

function LinkGrid(){
    return(
        <div className="Link-grid">
            <div className="row-1">
                <div>Wound Care</div>
                <Link to="/shop">
                <div className="row-head">Accessories</div>
                <div className="row-list">Bandages</div>
                <div className="row-list">Gypsum foundations</div>
                <div className="row-list">Patches and tapes</div>
                <div className="row-list">Surgical sutures</div>
                <div className="row-list">Swabs</div>
                <div className="row-list">Wound Healing</div>
                </Link>
            </div>
            <div className="row-2">
                <div>Higiene</div>
                <Link to="/shop">
                <div className="row-head">Disinfectants</div>
                <div className="row-list">Disposable products</div>
                <div className="row-list">Face Masks - protective</div>
                <div className="row-list">Gloves</div>
                <div className="row-list">Protective clothing</div>
                <div className="row-list">Sterilization</div>
                <div className="row-list">Surgical foils</div>
                </Link>
            </div>
            <div className="row-3">
                <div>Laboratory</div>
                <Link to="/shop">
                <div className="row-head">Accessories</div>
                <div className="row-list">Devices</div>
                <div className="row-list">Diagnostic Tests</div>
                <div className="row-list">Dyes</div>
                <div className="row-list">Pippets</div>
                <div className="row-list">Tube</div>
                <div className="row-list">Test-Tubes</div>
                </Link>
            </div>
            <div className="row-4">
                <div>Tools</div>
                <Link to="/shop">
                <div className="row-head">Care Products</div>
                <div className="row-list">Claws and Forceps</div>
                <div className="row-list">Electrosurgery</div>
                <div className="row-list">Needles</div>
                <div className="row-list">Plaster Tools</div>
                <div className="row-list">Scalpels, blades</div>
                <div className="row-list">Scissors</div>
                </Link>
            </div>
            <div className="row-5">
                <div>Diagnosis</div>
                <Link to="/shop">
                <div className="row-head">Accessories</div>
                <div className="row-list">Biopsy Tools</div>
                <div className="row-list">Endoscopes</div>
                <div className="row-list">Monitoting</div>
                <div className="row-list">Otoscopes</div>
                <div className="row-list">Oxygen Concentration</div>
                <div className="row-list">Thermometers</div>
                </Link>
            </div>
            <div className="row-6">
                
                <div>Equipment</div>
                <Link to="/shop">
                <div className="row-head">Blades</div>
                <div className="row-list">Education</div>
                <div className="row-list">Germicidal Lamps</div>
                <div className="row-list">Infusion Stands</div>
                <div className="row-list">Ligthning</div>
                <div className="row-list">Methods</div>
                <div className="row-list">Tables and assistants</div>
                </Link>
            </div>
        </div>
    );
}
export default LinkGrid;