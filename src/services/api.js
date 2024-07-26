async function api(endpoint, method = 'GET', data = null) {
    const url = `http://localhost:5000/${endpoint}`;

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error making API request:', error);
        return { error: error.message }; // Optionally return an error object
    }
}

export default api;