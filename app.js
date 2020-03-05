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
        
            if (statusCode !== 200){
                console.error(`Unable to load data at endpoint ${apiUrls[endpoint]}`);
                reject();
            }else{
                console.log(`status: ${statusCode}`);
                resolve(() => {
                    console.log("in resolve")
                });
            }
        })        
    });
}



requestData()
    .then()
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



