import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header"; // Make sure 'header' file is properly capitalized if it's named 'Header.jsx'

function App() {
  const user = {
    "users": [
      {
        "username": "john_doe",
        "age": 28,
        "city": "New York"
      },
      {
        "username": "sara_95",
        "age": 30,
        "city": "London"
      },
      {
        "username": "mike_the_builder",
        "age": 24,
        "city": "Sydney"
      },
      {
        "username": "anita_k",
        "age": 22,
        "city": "Mumbai"
      },
      {
        "username": "leo_coder",
        "age": 35,
        "city": "Berlin"
      }
    ]
  };

  return (
    <>
      <Header />
      <div className="w-full p-5 min-h-screen bg-black text-white">
        {user.users.map(function(elem){
          return <Card username={elem.username} age={elem.age} city={elem.city}/>
})}
      </div>
      <Footer />
    </>
  );
}

export default App;


// props componenetx sab hi isme page me smj jao bss 

