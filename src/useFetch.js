import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log('use effect done');
        // console.log(blogs);
        // console.log(name);
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then((res) => {
                console.log(res);
                if (!res.ok) {
                    throw new Error("Couldn't fetch the data from the server"); 
                }
                return res.json();
                
            })
            .then((data) => {
                // console.log(data);
                
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }
                
            })
        }, 1000);
        
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;