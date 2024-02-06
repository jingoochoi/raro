import { useContext } from "react"
import { conx } from "../module/ctxt"

export function Header() {
    const ctxt=useContext(conx)
    return(
        <>
            <div className="menu">
                <div className="li" style={{cursor:'pointer'}} onClick={()=>ctxt.chan('map')}>MAP</div>
                <div className="li" style={{cursor:'pointer'}} onClick={()=>ctxt.chan('game')}>GAME</div>
            </div>
        </>
    )
}