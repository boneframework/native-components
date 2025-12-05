import { useState } from "react";

const useApi = (apiFunc: any) => {
    const [error, setError] = useState(false);
    const [headers, setHeaders] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const request = async (...args: any[]) => {
        setLoading(true);
        const response = await apiFunc(...args)
            .then((result: any) => {
                setError(!result.ok);

                return result;
            }, (reason: any) => {
                setError(true);

                return {headers: [], data: reason};
            })
            .catch(() => {
                setError(true);
            });
        setLoading(false);
        setHeaders(response.headers);
        setData(response.data);
        return response;
    }

    return {data, error, headers, loading, request}
}

export default useApi;