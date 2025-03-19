class Car{
    start(){
        return 'Strating car..';
    }
    work(){
        return 'Car is running...';
    }
    btn(){
        let st=this.start();
        let kt=this.work();
        return `${st}  ${kt}`;
    }
}
let c=new Car;
let k=c.btn();
console.log(k);

//Abstraction...