let store=''
let show=document.querySelector(".display")

let dis=(value)=>{
store=store+value
show.innerHTML=store
}
let sq=()=>{
    store=store*store
    show.innerHTML=store
}
let fs=()=>{
    show.focus()
    dis(value)
}
let res=()=>{
show.innerHTML=eval(store)
store=eval(store)
store.toString()
}
let del=()=>{
    store=store.slice(0,-1)
    show.innerHTML=store;
    }
let clr=()=>{
    store=''
show.innerHTML=store
}