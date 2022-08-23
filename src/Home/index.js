import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Mask } from 'antd-mobile'
import './index.scss';
export default function Home() {
  const [visible, setVisible] = useState(false)
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "中秋节,交行有皎月";
  }, [])
  return (
    <div className="home">
      <img className='logo' src={require('@/Assets/logo.png')}></img>
      <a className='lotteyInfo' onClick={() => setVisible(true)}><img src={require('@/Assets/lotteyInfo.png')} width={100}></img></a>
      <a className='myLotteyBtn' onClick={() => navigate('/MyLottey')}><img src={require('@/Assets/myLottey.png')} width={100}></img></a>
      <a className='action' onClick={() => navigate('/Moon')}><img src={require('@/Assets/action.png')} width={160}></img></a>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div>
          <img src={require('@/Assets/rule.png')} width={320} height={513.48}></img>
          <a className='adm-close' onClick={() => setVisible(false)}></a>
        </div>
      </Mask>
    </div>
  )
}