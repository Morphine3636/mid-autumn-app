import { useNavigate } from 'react-router-dom';
export default function Home(){
  let navigate = useNavigate();
  const letMoon=()=>{
    navigate('/Moon')
  }
  return (
    <div className="home">
      <button onClick={ letMoon }>lets go</button>
    </div>
  )
}