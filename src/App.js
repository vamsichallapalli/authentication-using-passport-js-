
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/login'; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Post from './components/posts/post';
import {useEffect,useState} from "react"
 const posts = [
  {
    id: 1,
    title: "5 Premium Theme for React",
    img: "https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
  },
  {
    id: 2,
    title: "How to Animate Elements?",
    img: "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
  },
  {
    id: 3,
    title: "learn JS in 30 days",
    img: "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
  },
];
function App() {
  const [user, setUser] = useState(null);
  useEffect(() =>{
    const getUser = async () =>{
      try {
        const response = await fetch("http://localhost:5000/auth/login/success",{
          credentials:"include"
        })
        const data = await response.json()
        setUser(data.user)
      } catch (error) {
         console.log(error)
      }
     
     
    }
   getUser()
  },[])
  return (
    <BrowserRouter>
       <div>
     <Navbar user = {user}/>
     <Routes>
      <Route path='/' element = {<Home data = {posts}/>}/>
      <Route path='/post/:id' element = {user?<Post data = {posts}/>:<Login/>}/>
      <Route path='/login' element = {<Login/>}/>
     </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
