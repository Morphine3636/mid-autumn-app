import { useEffect } from 'react';
import Back from '@/Components/back';
import Api from '@/Utils/Api';
import { CascadePicker } from 'antd-mobile';
import { useState } from 'react';
import { Http } from '@/Utils/Http';
import './index.scss';

export default function UserInfo() {
    const [visible, setVisible] = useState(false),
        [defaultProvince, setDefaultProvince] = useState([])
    useEffect(() => {
        document.title = "完善信息";
    }, [])
    return (
        <div className="userInfo">
            <div className='list'>
                <label>姓名</label>
                <div className='ipt name'>
                    <input type='text' placeholder='请输入姓名'></input>
                </div>
            </div>
            <div className='list'>
                <label>联系电话</label>
                <div className='ipt tel'>
                    <input type='tel' placeholder='请输入联系方式'></input>
                </div>
            </div>
            <div className='list'>
                <label>所在区域</label>
                <div className='ipt name' onClick={() => setVisible(true)}>
                    { defaultProvince.length===0?<a>请选择所在区域</a>:<a className='active'>{`${defaultProvince[0]}-${defaultProvince[1]}-${defaultProvince[2]}`}</a>}
                </div>
            </div>
            <div className='list'>
                <label>详细地址</label>
                <div className='ipt address'>
                    <input type='text' placeholder='请输入信息地址'></input>
                </div>
            </div>
            <CascadePicker
                title='省市区'
                options={Api.province}
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                onConfirm={(val, extend) => {
                    setDefaultProvince(val)
                }}
                onSelect={val => {
                    console.log('onSelect', val)
                }}
            />
            <div className='editAddress'>
                <a>
                    <img src={require('@/Assets/submit.png')}></img>
                </a>
            </div>
            <Back />
        </div>
    )
}