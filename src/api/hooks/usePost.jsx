import { useState } from 'react';
import axios from 'axios';

function usePost({url='',successCB = () => { }}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const postData = async ({body={}}) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
          if(response.ok){
            const result = await response.json();
            console.log(result)
            if(result.sts === '00'){
                alert('Incorrect details')
                throw new Error(JSON.stringify(result))
            }
            if(result.sts === '01'){
                alert(result.msg)
                successCB({data:result})
            }
        }
          
           
        } catch (error) {
            setError(error)
        }
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return { data, loading, error, postData };
};

export default usePost;