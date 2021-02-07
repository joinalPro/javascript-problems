// var a = 145;
// var b = 658;
// var c = 421;
// var d = 684;

// var highest = Math.max(a,b,c,d);
// console.log(highest);

// var marks = ["hajigonj", "dhaka","akla", "chandpur","Nasircoattttttasdf","abdul","chengatuli"]
// var max = marks[0];
// for (var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log(max);

// function megaFriend(marks = ["hajigonj", "dhaka","akla", "chandpur","Nasircoat","abdul","chengatuli"]){
//     var max = marks[2];
//     for(var i = 0; i < marks.length; i++){
//         var element = marks[i]
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// var result =megaFriend()
// console.log (result);


// function megaFriend(str){

  
//     var marks = ["hajigonj", "dhakatakafaka","akla", "chandpur" ,"Nasircoat","abdul","chengatuli"]
//     var max = marks[2];
//     for(var i = 0; i < marks.length; i++){
//         var element = marks[i]
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// var result =megaFriend()
// console.log (result);


// function megaFriend(str){
//         var friendList = ["hajigonj", "dhakatakafaka","akla", "chandpur" ,"Nasircoat","abdul","chengatuli"]
//         for( var i = 0; i<str; i++){
//             friendList = friendList * i;
//         }return friendList;
// }     
// console.log(megaFriend(1))
function mFriend(){
    var friendList = ["hajigonj", "dhakafakachaka","akla", "chandpur" ,"Nasircoat","abdul","chengatuli"]
    var max = friendList[0];
    for (var i = 0; i<friendList.length; i++){
        var element = friendList[i];
        if(element > max){
            max = element;
        }
       
    } return max;
}

var result = mFriend(4)
console.log(result);
