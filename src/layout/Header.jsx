import { useContext, useEffect } from "react"
import { conx } from "../module/ctxt"
import '../css/header.css'
import $ from 'jquery'
export function Header() {
    const ctxt=useContext(conx)
    useEffect(()=>{
        $('.li').first().addClass('on')
        $('.li').on('click',function () {
            $(this).addClass('on').siblings().removeClass('on')
        })
    },[])
    return(
        <>
            <div className="menu" style={{display:'flex',gap:'30px',justifyContent:'center',alignItems:'center',height:'10vh'}}>
                <div className="li" style={{cursor:'pointer',height:'100%',flexBasis:'25%',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'30px',fontWeight:'bold'}} onClick={()=>ctxt.chan('pic')}>PHOTO</div>
                <div className="li" style={{cursor:'pointer',height:'100%',flexBasis:'25%',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'30px',fontWeight:'bold'}} onClick={()=>ctxt.chan('map')}>MAP</div>
                <div className="li" style={{cursor:'pointer',height:'100%',flexBasis:'25%',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'30px',fontWeight:'bold'}} onClick={()=>ctxt.chan('game')}>GAME</div>
            </div>
        </>
    )
}