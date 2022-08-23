import { useEffect } from 'react';
import Back from '@/Components/back';
import { useNavigate } from 'react-router-dom';
import './index.scss';
export default function MyLottey(){
    let navigate = useNavigate();
    useEffect(()=>{
        document.title = "我的奖品";
    },[])
    return (
        <div className="myLottey">
            <div className='list'>
                <div className='box'>
                    <div className='img'>
                        <img src={ require('@/Assets/lotteyIcon.png') } />
                    </div>
                    <div className='info'>
                        <h2>一等奖</h2>
                        <p>湖南省长沙市雨花区德思勤广场467号</p>
                    </div>
                </div>
            </div>
            <div className='editAddress' onClick={()=> navigate('/UserInfo') }>
                <a>
                   完善地址
                </a>
            </div>
            <Back />
        </div>
    )
}