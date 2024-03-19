// import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
    // let name = "mario";
    /*const [name, setName] = useState('mario');
    const [flag, setFlag] = useState(false);
    const handleClick2 = () => {
        // name = 'luigi';
        // console.log(name);
        if (flag) {
            name = 'luigi';
            setName(name);
        }
        else {
            name = 'mario';
            setName(name);
        }
        (flag) ? (setName("luigi")) : (setName("mario"));
        setFlag(!flag);
        console.log("flag: " + flag + "\nname: " + name);
        
    }
    const handleClick = (event) => {
        console.log('hello ninja', event);
        window.alert("The value is printed in console"); 
    }
    const handleClickAgain = (name, event) => {
        console.log('hello ninja,' + name, event.target, event.target.value);
        window.alert("The value is printed in console"); 
    }*/

    /*const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);*/

   

    // const [name, setName] = useState("mario");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {/* <h2>Home Page</h2><br /> */}
            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {handleClickAgain("name", e);}}>Click me again</button>
            <p>{ name }</p>
            <button onClick={handleClick2}>change name</button> */}
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}{/*handleDelete={handleDelete}*/}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}
            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p> */}
        </div>
    );
}

export default Home;