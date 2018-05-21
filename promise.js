let delayTime = 0

const delay= (callback, time)=> new Promise(resolve=>{
    setTimeout(() => {
        callback()
        resolve(++delayTime)
    }, time);
})

delay(()=>console.log('我是帥哥'),1000)
    .then((time)=>{
        return delay(
            ()=>console.log('我是修哥' + time),
            500
        )
    })
    .then((time)=>{
        return delay(
            ()=>console.log('我是修哥' + time),
            500
        )
    })
    .then((time)=>{
        return delay(
            ()=>console.log('我是修哥' + time),
            500
        )
    })
    