import { useEffect, useState } from "react";
import Stock from "../Models/Stock";

const useFetch = (url: string) => {
    const [data, setData] = useState<Stock[]>([]);
    const [error, setError] = useState<string>();

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Error fetching data for this resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            });
    }, [url]);

    return { data, error };
}

export default useFetch;