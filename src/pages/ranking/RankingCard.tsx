import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";


interface Vote {
    email: string,
    vote: number
};

const RankingCard = (props: { item: Vote }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/visit", { state: props.item.email });
    }

    return (
        <div className="flex flex-row rounded-xl border shadow p-4">
            <div className="flex m-auto flex-row space-x-2">
                <Rating name="read-only" value={props.item.vote ?? 0} precision={0.5} readOnly />
                <h3 className="text-lg">{props.item.vote.toFixed(1)}</h3>
            </div>
            <h1 className="text-lg m-auto font-bold">{props.item.email}</h1>
            <button
                onClick={handleClick}
                className="p-3 text-gray-800 w-1/6 font-bold ml-auto focus:outline-none"
            >
                Go
            </button>
        </div>
    )
}

export default RankingCard