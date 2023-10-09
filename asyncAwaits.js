console.log('person1: shows tickets');
console.log('person1: shows tickets');

// const promiseWifeBringingTickd= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn=promiseWifeBringingTickd.then((t)=>{
//     console.log('wife: I have tics');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
// })

// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve,reject)=> resolve(`${t} butter`));
// })

// const getColdDrink=getPopcorn.then((t)=>{
//     console.log('husband: Anything else');
//     console.log('wife: I need cold drink');
//     return new Promise((resolve,reject)=> resolve(`${t} coldrink`));
// })

// getButter.then((t)=>{
//   console.log(t);
// })


const preMovie =  async()=> {
    const promiseWifeBringingTicks= new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('tocket'),3000)
    })

    const getPopcorn= new Promise((resolve, reject)=> resolve(`popcorn`));
    const addButter= new Promise((resolve, reject)=> resolve(`butter`));
    const getColdDrink= new Promise((resolve, reject)=> resolve(`coldrink`));
    // const getCake= new Promise((resolve, reject)=> resolve(`cake`));
    const ticket = await promiseWifeBringingTicks;

  //  let [popcorn,butter,cake]= await Promise.all([getPopcorn,addButter,getCake])
    //console.log(popcorn,butter,cake);
    console.log(`wife: I have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn= await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butt =  await addButter
    console.log(`husband: i got some ${butt}`);

    let coldDrink = await getColdDrink
    console.log(`husband: i got ${coldDrink} for you`);


    return ticket
    
}

preMovie().then((m)=> console.log(`person3: shows ${m}`))

console.log('person4: shows tickets');
console.log('person5: shows tickets');