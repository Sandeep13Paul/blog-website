import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('select');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json ' },
            body: JSON.stringify(blog)
        }).then((res) => {
            window.alert("New blog created");
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        }).catch((err) => {
            console.log(err);
        });

    };

    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Blog Title:</label>
                <input type="text" name="name" placeholder="Example: The New World" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="body">Blog Body:</label>
                <textarea name="body" placeholder="Example: The New World's Body" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label htmlFor="author">Blog Author:</label>
                <select name="author" id="" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="select">select</option>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="luigi">Luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
    );
}

export default Create;