
import axios from 'axios'
import { useState,useEffect } from 'react'

function App(){

 const [data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
      setData(response.data);
      console.log(response.data); // ✅ log here, not after setData
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
    <div className="w-full min-h-screen bg-black text-white">

    
      <div className="p-5 bg-gray-600">
        {data.map(function(elem,idx){
          return <div  key={idx} className="w-full p-4 flex items-center justify-between text-black bg-white rounded shadow mb-4">
            <img className=' h-48' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>

    </div>
    
    </>
  )
}

export default App;


//api fetch call etc using axios ....



//async 
//react api call
//axios 
