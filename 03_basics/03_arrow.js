const user = {
    username:"Shiva",
    price:99,

    welcomeMsg:function(){
        console.log(`${this.username}, welsome to website`)
        console.log(this)
    }

}
user.welcomeMsg()

//console.log(this) // {}  this refer to node here so this = {} but in browser it gives Window
function chai(){
    let username = "shiva"
    console.log(this.username) // this will give undefined, this is not used directly in functions it is used in objects
}
chai()

const addOne = (num)=>{
    return num+1
}

