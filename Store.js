function Store(){
    let proxy = new Proxy({},{
        get(target, property, receiver){
            return JSON.parse(localStorage[property] || "null")
        },
        set(target, property, value){
            localStorage[property] = JSON.stringify(value);
        }
    });
    return proxy;
}