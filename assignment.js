//https://github.com/joinalzx/basic-js

 // kiloToMeter Starting ....
 function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
       return meter;
   }
   var totalMeter = kilometerToMeter(5)
   console.log(totalMeter);

// hotelCost Starting ....
function hotelCost(days){
    var rent = 0;
    if(days<=10){
        rent = days * 100;
    } else if (days<=20){
        var first10days = 10 * 100;
        var remaining = days - 10;
        var second10days = remaining * 80;
        rent = first10days + second10days;
    }else {
        var first10days = 10*100;
        var second10days = 10* 80;
        var remaining = days - 20;
        var lastpart = remaining * 50;
        rent = first10days + second10days + lastpart;
    }return rent;
   } 
   console.log(hotelCost(21));
   
// function megaFriend(){
    
    // var name = 0;

//     var friendList = ["Abdul", "Aminul Islam", "Abdullah", "oli","ovi", "Panu Mollah"];
//     var largestName = friendList[0];
//     for(var i = 0; i < friendList.length; i++){
//         var element = friendList [i];
//         if (element > largestName){
//             largestName = element;
//         }
//     }

//     console.log(largestName);
     // return friendList;
    // var result = megaFriend(1)
  

   