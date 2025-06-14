//props componeners etc done

function Card(props){
    return(
        <>
        <div className="bg-white mr-1.5 font-bold rounded-md inline-block p-6 text-center text-black">
                <h1 >Username is {props.username}</h1>
                <h2>{props.city},{props.age}</h2>
                <button className="p-2 bg-blue-800 text-white pt-1 mt-5">Add Friend</button>
        </div>
        </>
    )
}

export default Card;