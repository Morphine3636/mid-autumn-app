import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mask } from 'antd-mobile'
import './index.scss';
let prize = ["一等奖", "谢谢参与", "三等奖", "二等奖", "二等奖", "三等奖", "谢谢参与", "一等奖"];
export default function Draw() {
    const [visible, setVisible] = useState(false)
    const [vip, setVip] = useState(0)  // 0 是未中奖 1 是一等奖 2 是二等奖 3 是三等奖
    let wapperRef = useRef();
    let navigate = useNavigate();
    // 权重数组
    let prizeWeight = [0.5, 46.5, 2, 1, 1, 2, 46.5, 0.5];
    let isFlag = true;
    const circleClick = () => {
        if (isFlag) {
            let weightRandom = parseInt(Math.random() * 30);
            let concatAfterArr = prizeWeight.concat(weightRandom);
            let sortedWeightArr = concatAfterArr.sort(function (a, b) { return a - b });
            var randomIndex = sortedWeightArr.indexOf(weightRandom);
            randomIndex = Math.min(randomIndex, prize.length - 1);
            let text = prize[randomIndex];
            switch (randomIndex) {
                case 0:
                    run(22.5, text);
                    break;
                case 1:
                    run(66.5, text);
                    break;
                case 2:
                    run(112.5, text);
                    break;
                case 3:
                    run(157.5, text);
                    break;
                case 4:
                    run(338.5, text);
                    break;
                case 5:
                    run(294.5, text);

                    break;
                case 6:
                    run(247.5, text);
                    break;
                case 7:
                    run(201.5, text);
                    break;
            }
        }
    }

    const run = (angle, text) => {
        isFlag = false;
        let begin = 0;
        let timer = null;
        let basic = 1800;
        timer = setInterval(function () {
            if (begin > (basic + angle) || begin == (basic + angle)) {
                isFlag = true;
                clearInterval(timer);
                console.log("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + text);
                if (text == '一等奖') {
                    setVip(1)
                } else if (text == '二等奖') {
                    setVip(2)
                } else if (text == '三等奖') {
                    setVip(3)
                } else {
                    setVip(0)
                }
                setVisible(true)
            }
            wapperRef.current.style.transform = "rotate(" + (begin) + "deg)";
            begin += Math.ceil(basic + angle - begin) * 0.1;
        }, 70);
    }
    return (
        <div className="draw">
            <a className='myLotteyBtn' onClick={() => navigate('/MyLottey')}><img src={require('@/Assets/myLottey.png')} width={100}></img></a>
            <div className='draw-box'>
                <div className='d'>今日剩余1次抽奖机会</div>
                <img src={require('@/Assets/turntable.png')} width={380}></img>
                <div className="wapper" ref={wapperRef}>
                    <div className="left">
                        {prize.map((item, index) => {
                            return index < 4 ? <div key={index} className={`t${index}`}>
                                <span className="text">{item}</span>
                                <img src={require(index === 1 ? '@/Assets/no.png' : '@/Assets/gift.png')} width={46}></img>
                            </div> : ''
                        })}
                    </div>
                    <div className="right">
                        {prize.map((item, index) => {
                            return index > 3 ? <div key={index} className={`t${index}`}>
                                <span className="text">{item}</span>
                                <img src={require(index === 6 ? '@/Assets/no.png' : '@/Assets/gift.png')} width={46}></img>
                            </div> : ''
                        })}
                    </div>
                </div>
                <a className='success' onClick={circleClick}>
                    <img src={require('@/Assets/drawsuccess.png')}></img>
                </a>
            </div>
            <a className='action' onClick={circleClick}>
                <img src={require('@/Assets/actiondraw.png')} width={180}></img>
            </a>
            <Mask visible={visible} onMaskClick={() => setVisible(false)}>
                <div>
                    <img src={require(vip === 1 ? '@/Assets/no1.png' : vip === 2 ? '@/Assets/no2.png' : vip === 3 ? '@/Assets/no3.png' : '@/Assets/notlottey.png')} width={360} height={500.64}></img>
                    <a className='adm-close' onClick={() => setVisible(false)}></a>
                    {vip === 0 ? <a className='goAddress' onClick={() => navigate('/UserInfo')}></a> : ''}
                </div>
            </Mask>
        </div>
    )
}