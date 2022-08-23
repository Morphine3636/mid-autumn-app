import { useLocation } from "react-router-dom"
import '../Moon/index.scss';
export default function MoonSuccess(props){
    const location=useLocation();
    let utils=new URLSearchParams(location.search)
    return (
        <div className="moon">
            <div className='box'>
                <img src={ require('@/Assets/moonhua.png') }></img>
                <div className='tip tipScore'>
                    { utils.get('score')}<span> 分</span>
                </div>
                <canvas className="canvas" id="canvas" width={window.screen.availWidth} height={300}></canvas>
            </div>
        </div>
    )
}