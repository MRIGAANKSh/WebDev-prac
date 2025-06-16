import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const notify = () => toast.success('Login Succesfull', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

  const n=()=>toast.warn('🦄 Wow so easy!', {
position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

const k=()=>toast.error('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

const l=()=>toast('🦄 Wow so easy!', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});



  const m=()=>{
    n(),
    notify(),
    k(),
    l()
  }

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900">
      <button
        onClick={m}
        className="px-4 py-2 rounded bg-white text-black font-semibold"
      >
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}
