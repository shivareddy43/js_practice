console.log("Hello world");
for(let i=0;i<3;i++){
    setTimeout(function exec(){
        console.log("Timer done");
    },10)
}
for(let i=0;i<10000000000;i++){
    // some task
}
console.log("end");

/*
Output:
Hello world
end
Timer done
Timer done
Timer done
*/