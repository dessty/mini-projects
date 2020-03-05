let myPromise = new Promise((resolve, reject) => {
    let data;
    setTimeout(() => {
        data = "some payload";

        if (data)
            resolve(data);
        else
            reject();
    })
});
console.log("RUNNING 'myPromise----------");
myPromise
    .then((data) => {
        console.log(`We got some data: ${data}`)
    })

    .catch(() => {
        console.log(`There was an error`)
    });


    

    
    
    
console.log("RUNNING 'requestData----------");

const http = require('http');
// ENDPOINTS
const apiUrls = [
    "http://dummy.restapiexample.com/api/v1/employees1",
    "http://dummy.restapiexample.com/api/v1/employees2",
    "http://dummy.restapiexample.com/api/v1/employees3",
    "http://dummy.restapiexample.com/api/v1/employees"
];

let endpoint = 3;
var requestData = function(){
    return new Promise((resolve, reject) => {
        http.get(apiUrls[endpoint], (res) => {
            let { statusCode } = res; // destructing the res object to retrieve attribute 'statusCode' of http.get
            let error;

            if (statusCode == 200){
                resolve(res);
            }else{
                error = new Error(`Request failed. \nStatus code: ${statusCode}`)
                // console.error(`Unable to load data at endpoint ${apiUrls[endpoint]}`);
                reject();
            }


            if(error){
                console.log(error.message);
                return;
            }

            // receiving the data 
            let rawData;
            res.on("data", chunk => {rawData += chunk})
            console.log(`data`, rawData);

        })        
    });
}



requestData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
            console.info("here we manage the following error", err);
        }
    );


// const myPromise2 = new Promise((resolve, reject) => {
    
// });
// const getSomething = function(endpoint){
//   return new Promise((resolve, reject) => {
//     http.get(ApiUrls[endpoint], (response) => {
//       let { statusCode } = response;

//       if (statusCode !== 200){
//         reject(() => {
//           console.log(`Not able to reach endpoint: ${endpoint}`)
//           if (++endpoint >= ApiUrls.length)
//             console.log("None of the endpoints provided have resolved. Can't load data!")
//           else 
//             getSomething(endpoint);
//         })
//       }else{
//         resolve(() =>{
//           console.log(`Getting data...`, response);
//         })
//       }
//     });
//   });
// }


// getSomething(0)
//   .then(function(){

//   })

//   .catch(function(){
//     console.log("There was an error ")
//   });



