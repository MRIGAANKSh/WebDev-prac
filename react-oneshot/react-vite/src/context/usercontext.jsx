import { createContext } from "react"
export  const DataContext=createContext()
function UserContext({children}){
    const username="mrigaank sharma"
    return (
        <>
        <div>
            <DataContext.Provider value={username}>
                {children}
            </DataContext.Provider>
           
        </div> 
        </>
    )
}

export default UserContext