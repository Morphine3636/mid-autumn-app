import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '@/Components/back';
import './index.scss';
var canvas = {};
export default function Moon() {
    let navigate = useNavigate();
    const [log, setLog] = useState('');
    const [posArr, setPosArr] = useState([]);
    const [score, setScore] = useState(0);
    const [pushPosState, setPushPosState] = useState(true);
    const [baseCircle, setBaseCircle] = useState({
        // 基础圆周长
        perimeter: 0,
        // 基础圆半径
        radius: 130,
        // 基础圆位置
        pos: {
            x: parseInt(window.screen.availWidth * 0.5),
            y: 150
        }
    });
    useEffect(() => {
        initCanvas();
    }, [])
    const handleScore = () => {
        // 求出用户圆与基础圆的周长比例
        let userPerimeter = calculateLinePerimeter();
        let userRate = parseInt(
            (userPerimeter / baseCircle.perimeter) * 100
        );
        // 如果用户画的圆 不足基础圆周长的90% 则直接给低分
        if (userRate >= 90) {
            let results = calculateDistancesArr(
                baseCircle.pos,
                posArr
            );
            // 获取最大最小值
            let min = Math.min(...results);
            let max = Math.max(...results);
            let avg = baseCircle.radius;
            // 得出绝对值
            let absMin = Math.abs(avg - min);
            let absMax = Math.abs(avg - max);
            // console.log(absMin,absMax);

            let percentage = absMax > absMin ? absMax : absMin;

            // 获取波动值
            let volatility = parseInt((percentage / avg) * 100);

            setScore(scoringConditions(volatility));
            navigate(`/MoonSuccess?score=${scoringConditions(volatility)}`)
        } else if (userRate >= 50) {
            setScore(scoringConditions(60));
            navigate(`/MoonSuccess?score=${scoringConditions(60)}`)
        } else {
            setScore(scoringConditions(70));
            navigate(`/MoonSuccess?score=${scoringConditions(70)}`)
        }
    };
    const scoringConditions = (volatility) => {
        if (volatility > 80) {
            return 10;
        }
        if (volatility > 70) {
            return 20;
        }
        if (volatility > 60) {
            return 30;
        }
        if (volatility > 50) {
            return 50;
        }
        if (volatility > 40) {
            return 60;
        }
        if (volatility > 30) {
            return 80;
        }
        if (volatility > 20) {
            return 90;
        }
        if (volatility > 10) {
            return 95;
        }
        if (volatility < 10) {
            return 100;
        }
    }
    /**
     * 计算周长
     */
    const calculateLinePerimeter = () => {
        let per = 0;
        posArr.forEach((pos, index) => {
            if (index + 1 < posArr.length) {
                per += calculateDistance(pos, posArr[index + 1]);
            }
        });
        return per;
    };
    // 计算两个点之间的距离
    const calculateDistance = (pos1, pos2) => {
        let result = Math.sqrt(
            Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2)
        );
        return result;
    };
    // 计算两个坐标数组与基础圆中心点
    const calculateDistancesArr = (centerPos, arr2) => {
        let results = [];
        arr2.forEach((pos1, index) => {
            let result = calculateDistance(centerPos, pos1);
            results.push(result);
        });
        return results;
    };
    // 初始化基础圆
    const initBaseCircle = () => {
        var circle = new fabric.Circle({
            radius: baseCircle.radius,
            fill: 'rgba(255, 0, 0, 0)',
            left: baseCircle.pos.x,
            top: baseCircle.pos.y,
            stroke: 'rgba(255, 0, 0, 0)',
            lineWidth: 20,
            originX: 'center',
            originY: 'center'
        });
        canvas.add(circle);
        let bC = baseCircle;
        bC.perimeter = 2 * baseCircle.radius * Math.PI;
        setBaseCircle(bC);
    };
    const pushPos = (pos) => {
        if (!pushPosState) {
            if (!window.timer) {
                window.timer = setTimeout(() => {
                    setPushPosState(true)
                    window.timer = null;
                }, 20);
            }

            return false;
        }
        let pa = posArr;
        pa.push(pos);
        setPosArr(pa)
        setPushPosState(false);
    };
    const initCanvas = () => {
        // let screenWidth = window.screen.availWidth;
        // this.canvasWidth = screenWidth;
        var canvasV = new fabric.Canvas('canvas');
        canvas = canvasV;
        // 开启画布自由绘画模式
        canvas.isDrawingMode = true;
        // 设置自由绘画模式画笔类型为 铅笔类型
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
        // 设置自由绘画模式 画笔颜色与画笔线条大小
        canvas.freeDrawingBrush.color = 'rgb(245, 57, 57)';
        canvas.freeDrawingBrush.width = 4;
        canvas.on('mouse:move', (e) => {
            let pointer = JSON.stringify(e.pointer);
            setLog(log + `<br/>move:${pointer}`)
            pushPos(e.pointer);
        });
        canvas.on('mouse:up', (e) => {
            handleScore();
        });
        initBaseCircle();
    };
    return (
        <div className="moon">
            <div className='box'>
                <img src={ require('@/Assets/moonhua.png') }></img>
                <div className='tip'>
                    <img src={ require('@/Assets/tip.png') }></img>
                </div>
                <canvas className="canvas" id="canvas" width={window.screen.availWidth} height={300}></canvas>
            </div>
            <Back />
        </div>
    )
}