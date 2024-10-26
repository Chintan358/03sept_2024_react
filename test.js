

// const add = (a,b,result)=>{
//     const c  =a+b;
//     result(c)  
// }

// const square = (a,sq)=>{
//    sq(a*a)
// }


// add(40,20,(r)=>{
//     console.log("Result is : "+r);
//     square(r,(sq)=>{
//         console.log("Square of result is : "+sq);
//     });
// });


const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
       // resolve(a+b)
       reject("Error in adding")
    })
}

const square = (a)=>{
    return new Promise((resolve,reject)=>{
        resolve(a*a)
    })
}

// add(10,20).then(r=>{
//     console.log("Result is : "+r);
//     return square(r)
// }).then(data=>{
//     console.log("sq is : "+data); 
// }).catch(err=>{
//     console.log(err); 
// })

const test = async ()=>{
    try {
        const r = await add(10,20);
    console.log("Result is : "+r);
    const sq = await square(r);
    console.log("sq is : "+sq); 
    } catch (error) {
        console.log(error);
        
    }
}

test()