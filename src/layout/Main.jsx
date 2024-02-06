import { useContext } from "react"
import { conx } from "../module/ctxt"
import { Map } from "../module/Map"
import { Game } from "../module/Game"

export function Main() {
    const ctxt=useContext(conx)
    return(
        <>
            {ctxt.mode==='map'?<Map></Map>:<Game></Game>}
        </>
    )
}