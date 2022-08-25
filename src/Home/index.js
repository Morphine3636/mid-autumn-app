import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Mask, Toast } from 'antd-mobile'
import ScaleLoader from "react-spinners/ScaleLoader";
import Api from '@/Utils/Api';
import { Http } from '@/Utils/Http';
import axios from 'axios';
import './index.scss';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Home() {
  let [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false),

    [isLog, setIsLog] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "中秋节,交行有皎月";
    if (localStorage.u === undefined) {
      setIsLog(false)
    } else {
      setIsLog(true)
    }
  }, [])
  const login = async () => {
    setLoading(true)
    let { data, code } = await Http(Api.login, 'POST', {
      username: 'test123',
      password: 'winds123456'
    });
    if (code === 200) {
      setLoading(false)
      localStorage.k = data.token;
      axios.defaults.headers.Authorization = data.token;
      localStorage.u = JSON.stringify(data.user);
      Toast.show({
        icon: 'success',
        content: '登录成功',
      })
      setIsLog(true)
    }
  }
  return (
    <div className="home">
      <img className='logo' src={require('@/Assets/logo.png')}></img>
      <a className='lotteyInfo' onClick={() => setVisible(true)}><img src={require('@/Assets/lotteyInfo.png')} width={100}></img></a>
      {isLog ? <a className='myLotteyBtn' onClick={() => navigate('/MyLottey')}><img src={require('@/Assets/myLottey.png')} width={100}></img></a> : ''}
      {!isLog ? <a className='action' onClick={login}><img src={require('@/Assets/action.png')} width={160}></img></a>
        : <a className='action' onClick={() => navigate('/Moon')}><img src={require('@/Assets/action.png')} width={160}></img></a>}
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div>
          <img src={require('@/Assets/rule.png')} width={320} height={513.48}></img>
          <a className='adm-close' onClick={() => setVisible(false)}></a>
        </div>
      </Mask>
      <Mask visible={loading} opacity='thin'>
        <div className='loading'>
          <ScaleLoader color={'#FFFFFF'} loading={true} cssOverride={override} size={150} />
        </div>
      </Mask>
    </div>
  )
}