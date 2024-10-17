// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
        
//     }, 2000);
// }

// //Callback Hell:
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         })
//     });
// });



//Promise Functiom
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("error occured");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });



//General programming mn data kesay use hotay hain
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    })
}

//Promise chain
getData(1)
    .then((res) => {
        return getData(2);
})
    .then((res) => {
        return getData(3);
})
    .then((res) => {
        console.log(res);
    })




//ASYNCHRONOUS FUNCTION
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1......");
// asyncFunc1().then((res) => {
//     console.log("fetching data2.......");
// asyncFunc2().then((res) => {
        
//     });
// });

