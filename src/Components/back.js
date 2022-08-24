import { useNavigate } from 'react-router-dom';
export default function Back(){
    let navigate = useNavigate();
    return (
        <a className="back" onClick={ () => navigate(-1) }>返回</a>
    )
}