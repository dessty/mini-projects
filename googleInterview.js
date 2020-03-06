/**
 * Given a list of endpoints
 * Load each one until one is successful
 */

// ENDPOINTS
const apiUrls = [
    "http://dummy.restapiexample.com/api/v1/employees1",
    "http://dummy.restapiexample.com/api/v1/employees2",
    "http://dummy.restapiexample.com/api/v1/employees3",
    "http://dummy.restapiexample.com/api/v1/employees"
];

let fetch = require("node-fetch");

let endpoint = 0;
const myData;
let getData = () => {
    fetch(apiUrls[endpoint])
        .then(response => response.json())
        .then(data => {
            console.log(data)
            processData(data);
        })
        .catch(err => {
            console.error("error")
            if (++endpoint < apiUrls.length)
                getData();
        });
};

getData();

