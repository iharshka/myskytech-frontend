import { useState, useCallback } from "react";
import axios from "axios";

const CallAPI = ({url, method, body}) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {  
            const response = await axios({
                url,
                method,
                data: body,
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            setData(response);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    },[url, method, body]);
    
    return { data, loading, error, fetchData };
}
export default CallAPI;