import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ResultCard = (props: any) => {

  const navigate = useNavigate();
  const vote = props.item.vote.toFixed(1);

  return (
    <div className="flex flex-row my-4 border rounded-2xl">
      <img
        className="w-1/3 rounded-l-xl"
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt=""
      />
      <div className="flex flex-col w-2/3 justify-center p-4 space-y-4">
        <h1 className="text-3xl">{props.item.name}</h1>
        <h3 className="text-xl">{props.item.address}</h3>
        <h4 className="break-words my-2">{props.item.description}</h4>
        <div className="flex flex-row space-x-2">
          <Rating name="read-only" value={vote ?? 0} precision={0.5} readOnly />
          <h3 className="text-lg">{vote}</h3>
        </div>
        <button
          className="bg-gray-800 rounded-xl shadow text-xl text-white px-8 py-2 w-1/2 mx-auto mt-auto focus:outline-none"
          onClick={() => navigate("/visit", { state: props.item.email })}
        >
          Show details
        </button>
      </div>
    </div>
  )
}

export default ResultCard