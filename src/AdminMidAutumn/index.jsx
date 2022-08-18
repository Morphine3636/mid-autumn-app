import { useEffect, useState } from "react";
import Api from '@/Utils/Api';
import { Http } from '@/Utils/Http';
import './index.scss';

const title = [
    `用户名`,
    `籍贯`,
    `地址`,
    `是否中奖`,
    `奖品`
]

const user='admin';
const passW='EcVtpUMTzNWUlnMZ!zw*';

export default function Admin() {
    
    const [data, setData] = useState([]),
        [site,setSite]=useState(true)

    useEffect(() => {
        (async () => {
            let { data, code } = await Http(Api.getUserList, 'GET');
            if (code === 200) setData(data);
        })();
        // 简单校验登录;
        if( passW===new URLSearchParams(window.location.search).get('passW') && user===new URLSearchParams(window.location.search).get('user') ){
            setSite(false);
        }
    }, [])

    return (
        <>
            {site?'':<div className="admin">
                <header className="header">
                    <h2></h2>
                    <div className="right">
                        <img src={ require('@/Assets/avatar.png') } /> Admin -
                    </div>
                </header>
                <section className="content">
                    <menu className="left">
                        <a><img src={ require('@/Assets/user_icon.png') }></img>用户管理</a>
                    </menu>
                    <div className="right">
                        <div className="list first">
                            {title.map((item, index) => {
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                        {data.map((item, key) => {
                            return (
                                <div className="list" key={item._id}>
                                    <span>{item.userName}</span>
                                    <span>{item.nativePlace}</span>
                                    <span>{item.address}</span>
                                    <span style={{ color: item.isDraw?'#03A764':'red' }}>{item.isDraw ? '是' : '否'}</span>
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