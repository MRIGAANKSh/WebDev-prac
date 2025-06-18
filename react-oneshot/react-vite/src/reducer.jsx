import { useReducer } from "react"
import reducer from "./redux/counter/counterslice"

function Reducer(){

    const reducer1=(state,action)=>{
       if(action.type==="INC"){
        return state+1;
       }
    };

    const [count,dispatch]=useReducer(reducer1,0)

    //counetr papp
    return(
        <>
        <h1>Counter {count}</h1>
        <button onClick={()=>{
            dispatch({type:"INC"})
        }}>
            Increase +
        </button>
        </>
    )
}
export default Reducer


//usereducer hook no much differece from usesstae but here there is a dispatch functiona dn return the value in object form ok 


//react finally done /over till then see ya typescipt satrt