import {useEffect, useState} from 'react';
import { useDebounce, checkNumber, validQQ } from '../util';
import { queryInfo } from '../api/search';
import { Loadding } from '../components/Loadding';
import './UserPage.css';


interface IUserDetail {
    code?: number;
    subcode?: number;
    level?: number;
    vip?: number;
    score?: number;
    place?: number;
    payway?: number;
    isyear?: number;
    vendor?: number;
}

interface IUserProps {
    code?: number;
    qq?: string;
    name?: string;
    qlogo?: string;
    lvzuan?: IUserDetail,
    msg?: string
}


function UserPage(){

    const [loading, setLoading] = useState(false);
    const [inputVal, setInput] = useState();

    const defaultUser: IUserProps = {
        code: 0,
        qq: '',
        name: '',
        qlogo: '',
        lvzuan: {},
        msg: ''
    }

    const [user, setUser] = useState(defaultUser);
    // 防抖处理
    const debunceVal = useDebounce(inputVal, 1000);

    useEffect(() => {
        if(debunceVal == null || debunceVal === undefined || debunceVal === '') return;
        if(!validQQ(debunceVal)) {
            alert('非法的qq号码，请检查');
            return;
        }

        setLoading?.(true);
        queryInfo('/qq.info', {
            qq: debunceVal
        }).then(res => {
            setLoading?.(false);
            const result = res as IUserProps;
            if(result?.code === 1){
                setUser(result);
            } else {
                setTimeout(() => {
                    alert(result.msg);
                });
            }
        }).catch(error => {
            setLoading?.(false);
            setTimeout(() => {
                alert(error?.response?.statusText || '请求异常');
            });
        })
      }, [debunceVal]);

    /**
     * 事件
     * @param e 
     */
    const handleChange = (e:any) => {
        if(checkNumber(e?.target?.value)){
            setInput(e?.target?.value);
        }
    };

    return (
        <>
        <div style={{marginLeft: "20px"}}>
            <h2>QQ好查询</h2>
            <div>
                <span style={{fontSize: '20px'}}>QQ</span>
                <input
                    className='input'
                    disabled={loading}
                    maxLength={9}
                    placeholder="请输入QQ号码"
                    value={inputVal}
                    onChange={handleChange}
                />
            </div>
            <div className='user'>
                <img
                    src={user?.qlogo}
                    width={75}
                    height={75}
                    alt="qq头像"
                    style={{borderRadius: 37}} />

                <div className='content'>
                    <div className='name'>{user.name}</div>
                    <div style={{textAlign: "center"}}>{user?.qq}</div>
                </div>

            </div>
        </div>
        <Loadding show={loading}/>
        </>
    )
}

export default UserPage