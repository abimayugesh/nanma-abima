import { useState } from 'react';
function usePost({url='',successCB = () => { }}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [resetCode,setResetCode]= useState('')

    const postData = async ({body={}}) => {
        setLoading(true);
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
            setLoading(false);
            if(result.sts === '00'){
                alert('Incorrect details')
                throw new Error(JSON.stringify(result))
            }
            if(result.sts === '01'){
                alert(result.msg)
                successCB({data:result})
                setData(result)
                setResetCode(result.otp)
                
            }}} 
                
        catch (error) {
            setLoading(false);
            setError(error)}}

    return { data, loading, error, postData,resetCode };
};

export default usePost;