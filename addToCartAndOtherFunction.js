const cart =[]

const addToCart =(id) =>{
    if ( !Array.isArray(cart) ){
        alert('type error')
    }
    let target = cart.find(e=> e.id === id)
    if(target){
        target.amount++
    } else{
        cart.push({id, amount: 1})
    }
}

const curry = x => y => z => x + y + z



const filterDulp = array =>{

    let result = []
    array.forEach(e => {
        if(!result.includes(e)){
            result.push(e)
        }
    })


    return result
    
}
