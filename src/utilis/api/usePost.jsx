export const usePost = (url) => {
    const postData = async (body) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          return result;
        } else {
          throw new Error(result.message || 'Something went wrong');
        }
      } catch (error) {
        throw new Error('Network error');
      }
    };
  
    return postData;
  };