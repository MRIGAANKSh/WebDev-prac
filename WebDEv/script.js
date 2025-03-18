function m(fn) {
    let i=fn;
    let k=a(i);
    function a(i){
        return `Hello ${i}`;
    }
    return k;
}
let result=m("Mrigaank");
console.log(result);