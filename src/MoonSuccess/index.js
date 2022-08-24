import { useLocation } from "react-router-dom"
import { Toast } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import '../Moon/index.scss';
import { useEffect } from "react";
export default function MoonSuccess(props){
    const location=useLocation();
    let navigate = useNavigate();
    let utils=new URLSearchParams(location.search)
    useEffect(()=>{
        if( utils.get('score') >= 90 ){
            Toast.show({
                content: '恭喜您,获得了1次抽奖机会.',
            })
        } else {
            Toast.show({
                content: '很遗憾,请再接再厉!',
            })
        }
    },[])
    return (
        <div className="moon moonsuccess">
            <div className='box'>
                <img src={ require('@/Assets/moonhua.png') }></img>
                <div className='tip tipScore'>
                    { utils.get('score')}<span> 分</span>
                    <p>抽奖次数:<span className="bold">4</span> </p>
                </div>
                <canvas className="canvas" id="canvas" width={window.screen.availWidth} height={300}></canvas>
            </div>
            <div className="menu">
                <a onClick={ ()=>navigate('/Moon') }><img src={ require('@/Assets/ag.png') } width={160}></img></a>
                <a onClick={ ()=>navigate('/Draw') }><img src={ require('@/Assets/golottery.png') } width={160}></img></a>
            </div>
        </div>
    )
}