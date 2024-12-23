import { useState, useEffect } from "react";
interface OverView {
    [key: string]: any;
}
const useFetch = (url: string) => {
    const [data, setData] = useState<OverView[]>([]);
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed');
                }
                return response.json();
            })
            .then((arr: OverView[]) => setData(arr))
            .catch(err => console.error('Error'))
    }, [])
    return [data];
};

export default useFetch;