// function megaFriend(){
    
// }

    
    // var friendList = ['Abdul', "AminulIslam", "Abdullah", "oli","ovi", "PanuMollah"];
    // var largestName = friendList[5];
    // for(var i = 0; i <= friendList.length; i++){
    //     var element = friendList [i];
    //     if (element > largestName){
    //         largestName = element;
    //     }
    // }

    // console.log(largestName);

// Third Time

// function megaFriend(){
//     var fNames = ["panu mollah", "Aminul Islam", "Mushfiqur Rahman"]
//     var bigNames = fNames[0]

// }return bigNames;
// console.log(megaFriend(0))

// var array = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = 0;

// for (var i = 0; i<array.length; i++){
//     var element = array[i]
//     if(element > largest){
//         largest = element;
//     }
// }
// console.log(largest);

// function megaFriend (){
//     var array = ["panu mollah", "Aminul Islam", "Mushfiqur Rahman"];
//     var largest = 0;

//     for (var i = 0; i<array.length; i++){
//         var element = array[i]
//         if(element > largest){
//             largest = element;
//         }
// }return largest;
// }
// console.log(megaFriend())


// function findLongestWord(str) {
//     str = str.split(" ");
//     var sorted = str.sort(function(prev,current){
//       return prev.length - current.length;   
//     });
//     var index = sorted.length;
//     str = sorted[index-1];
//     return str;
//   }
    //Solution One
var friendList = ["Abdul Aziz","panu mollah", "Aminul Islam", "Mushfiqur Rahman"];
var findLongestWord = function(friendList){
    var longest = friendList.reduce(function(a,b){
    return (a.length > b.length) ? a : b;
  });
    return longest;
}
console.log(findLongestWord(friendList));

    //Solution Two
    function megaFriend (){
        var friendList = ["Abdul Aziz","panu mollahsssssssssssss", "Aminul Islam", "Mushfiqur Rahman"];
        var fName = 0;
        var longest;
        for (var i= 0; i<friendList.length; i++){
            if(friendList[i].length > fName){
                var fName = friendList[i].length
                longest = friendList[i];
            
            }
        }   return longest;
        }
        console.log(megaFriend());