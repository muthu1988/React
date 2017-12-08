export function makeApiCall() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:4000/data').then((response) => {
            response.json().then((responseJson) => resolve({ apidata: responseJson.data }));
        });
    });
}