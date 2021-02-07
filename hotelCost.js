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