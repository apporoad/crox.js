const utils = require('lisa.utils')
const uType = utils.Type
const marry = require('marry.js')

const x = async (name , oneOrWaitingHandler,options)=>{
    options = options || {}
    if(uType.isAsyncFunction(oneOrWaitingHandler) || uType.isFunction(oneOrWaitingHandler)){
        //here waiting handler
        regWaiting(name,oneOrWaitingHandler,options)
        return 
    }else{
        //here is invoking
        return invoke(name,one,options)
    }
}

const invoke = (name,one,options)=>{

    //1. find handler

}

const regWaiting = (name,handler, options)=>{

}

x.link = ()=>{}



export default x