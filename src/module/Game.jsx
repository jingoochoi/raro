import { useEffect, useRef, useState } from 'react'
import '../css/game.css'
import $ from 'jquery'
export function Game() {
    const init=useRef(0)
    const demo=useRef(0)
    const [rdnb,setRdnb]=useState(null)
    const clft=(nber)=>{
        init.current=init.current+nber
        $('.nb').text(init.current)
        if (init.current>30) {
            $('.sult').html(`T.T<br>YOU LOSE<br><br>(click here)`)
            $('.etit').html(`✨ DEMON    ✨`)
            $('.sult').css({display:'block'})
            $('.enum').css({opacity:0})
            $('button').css({cursor:'default'})
            return
        }
        demo.current=Math.ceil(Math.random()*3)
        $('.enum').css({opacity:1}).find('span').text(demo.current)
        init.current=init.current+Number($('.enum span').text())
        $('.nb').text(init.current)
        if (init.current>30) {
            $('.sult').html(`🎉YEAH🎉<br>YOU WIN<br><br>(click here)`)
            $('.etit').html(`🔥 DEMON    🔥`)
            $('.sult').css({display:'block'})
            $('button').css({cursor:'default'})
            return
        }
        
        setRdnb(Math.random())
    }
    useEffect(()=>{
        if(window.matchMedia('(max-width:600px)').matches){
            const sultElement = document.querySelector('.sult');
      const mymyElement = document.querySelector('.mymy');
      
      if (sultElement && mymyElement) {
        const mymyOffsetTop = mymyElement.offsetTop;
        sultElement.style.top = `${mymyOffsetTop-30}px`;
        console.log(mymyOffsetTop);
        console.log(sultElement.offsetTop);
      }
        }
    },[])
    const load=()=>{
        $('.sult').text('')
        $('.sult').css({display:'none'})
        init.current=0
        demo.current=0
        $('.nb').text('0')
        $('.enum').css({opacity:0})
        $('button').css({cursor:'pointer'})
    }
    return(
        <>
            <div className="game" style={{backgroundColor:'lightblue',paddingTop:'5vh',fontSize:'30px',height:'75vh'}}>
            <div className="evil" style={{textAlign: 'center',backgroundColor:'black',color:'white',width:'300px',height:'200px',margin:'0 auto',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
        <div className="etit" style={{color:'black'}}>👁‍🗨    DEMON   👁‍🗨</div>
        <div className="enum" style={{opacity: 0}}>+<span></span></div>
    </div>
    <div className="nb" style={{textAlign: 'center',marginTop: '1vh',height:'5.5vh'}}>0</div>
    <div className="mymy" style={{textAlign: 'center',margin:'1vh auto',backgroundColor:'pink',width:'300px',height:'200px',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
        <div className="mtit">ME</div>
        <div className="btns" style={{display:'flex',justifyContent:'space-evenly'}}>
            <button style={{cursor: 'pointer'}} onClick={()=>clft(1)}>+1</button>
            <button style={{cursor: 'pointer'}} onClick={()=>clft(2)}>+2</button>
            <button style={{cursor: 'pointer'}} onClick={()=>clft(3)}>+3</button>
        </div>
    </div>
    <div className="sult" style={{textAlign: 'center',marginTop: '30px',fontWeight: 'bold',cursor: 'pointer',display:'none'}} onClick={load}></div>
            </div>
        </>
    )
}