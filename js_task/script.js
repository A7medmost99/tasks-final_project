// var h="ali"
// console.log(h)
// var age=17
// console.log(age);
// // var x= prompt("whats your name")


// var n=18

// console.log(n>7&&age==14);
// console.log(n>7||age==14);
// console.log(!n>7);



// if (grades >=90 &&grades<100 )
//     console.log("A");
//    else if(grades >=80)
//     console.log("B");
//    else if(grades >=70)
//     console.log("C");
//    else if(grades >=60)
//     console.log("D");
//    else if(grades <60 &&  grades>0  )
//     console.log("F");
//    else (grades<0 && grades>100)
//     console.log("not def");
// else (grades == "")
//     console.log("not def");
    
    





// var x=prompt("enter first num ");
// var y=prompt("enter end num ");
// for(var i=x ; i<=y ;i++){
//     console.log(i)
// }


// function loop(x,y,breaknum,con){
//    if(x==""||y==""||breaknum==""||con==""){
//     alert("enter the num")
//    }
//    else{
//    for(var i=x;i<=y;i++){
//     if(i==18){
//         break;
//     }
//     if(i==13){
//         continue;
//     }

//     console.log(i);
//    }
// }
// }


// var x=prompt("start")
// var y=prompt("end")
// var breaknum=prompt("break")
// var con=prompt("con")

// loop(x,y,breaknum,con)

// var num=[]
// num.push(7,8,9,5)
// console.log(num)
// console.log(num.includes(2))
// console.log(num.push(2))
// // console.log(num)

// var nums=[3,10,50,100]
// var p=prompt('enter the number')

// var n=nums.find(ele => ele >p);{
//     if (n==undefined) {
        
    
//     }

// }



// var user=[
//     {
//         name:"ali",
//         age : 21
//     },
//      {
//         name:"Ahmed",
//         age : 10
//     },
//      {
//         name:"Ans",
//         age : 55
//     }
// ]
// // console.log(user)
// var index=user.findIndex (user=>user.age ==10)
// console.log(index)
// user.splice(index,1)
// console.log(user);


var users = [];

function numOfUsers() {
    var count = prompt("Enter the number of users");
    for (var i = 0; i < count; i++) {
        var name = prompt("Enter your name");
        var id = prompt("Enter your id");
        var balance = prompt("Enter your balance");
        addUser(name, id, balance);
    }
}

function addUser(name, id, balance) {
    var exist = users.some(user => user.id === id);
    if (exist) {
        console.log("This id already exists");
        id = prompt("Enter a new id"); 
        addUser(name, id, balance); 
    } else {
        users.push({ name, id, balance });
    }
}

function editUserBalance() {
    var id = prompt("Enter your id to change balance");
    var user = users.find(user => user.id === id);

    if (user) {
        var newBalance = prompt("Enter your new balance");
        user.balance = newBalance;
        console.log("Balance updated successfully");
    } else {
        console.log("User not found");
    }
}

numOfUsers();
console.log(users);
