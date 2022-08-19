import { useEffect, useState } from "react";
import Api from '@/Utils/Api';
import { Http } from '@/Utils/Http';
import { message } from 'antd';
import axios from 'axios';
import './index.scss';

const title = [
    `用户名`,
    `籍贯`,
    `地址`,
    `是否中奖`,
    `奖品`
]

const user = 'admin';
const passW = 'EcVtpUMTzNWUlnMZ!zw*';

export default function Admin() {

    const [data, setData] = useState([]),
        [site, setSite] = useState(true)

    useEffect(() => {
        // Login;
        if (passW === new URLSearchParams(window.location.search).get('passW') && user === new URLSearchParams(window.location.search).get('user')) {
            setSite(false);
            if( localStorage.u===undefined ){
                (async () => {
                    let { data, code } = await Http(Api.login, 'POST', {
                        username: user,
                        password: passW
                    });
                    if (code === 200) {
                        message.destroy()
                        message.success('😁 登录成功,欢迎回来!')
                        axios.defaults.headers = {
                            'authorization': `Bearer ${data.token}`
                        }
                        localStorage.k = `Bearer ${data.token}`;
                        localStorage.u = JSON.stringify(data.user);
                        getData()
                    }
                })();
            } else {
                getData()
            }
        }
    }, [])
    // Get User;
    const getData = async () => {
        let { data, code } = await Http(Api.getUserList, 'GET');
        if (code === 200) {
            setData(data)
        } else {
            message.destroy()
            message.error(data)
        };
    }

    return (
        <>
            {site ? '' : <div className="admin">
                <header className="header">
                    <div></div>
                    <div className="right">
                        <img alt='' src={require('@/Assets/avatar.png')} /> Admin -
                    </div>
                </header>
                <section className="content">
                    <menu className="left">
                        <a href='/#'><img alt='' src={require('@/Assets/user_icon.png')}></img>用户管理</a>
                    </menu>
                    <div className="right">
                        <div className="list first">
                            {title.map((item, index) => {
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                        {data.length===0?<div>暂无内容 ...</div>:data.map((item, key) => {
                            return (
                                <div className="list" key={item._id}>
                                    <span>{item.userName}</span>
                                    <span>{item.nativePlace}</span>
                                    <span>{item.address}</span>
                                    <span style={{ color: item.isDraw ? '#03A764' : 'red' }}>{item.isDraw ? '是' : '否'}</span>
                                    <span>{item.prize ? item.prize : '-'}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>}
        </>
    )
}