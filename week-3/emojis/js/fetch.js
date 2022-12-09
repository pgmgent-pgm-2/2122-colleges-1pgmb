const getData = async (path) => {
    const response = await fetch(path);
    console.log(response);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    throw new Error('Er is iets misgelopen.');
}