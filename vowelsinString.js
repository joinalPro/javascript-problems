function getCount (str){
    let vowelsCount = 0
    const voewels = ['a', 'e', 'i', 'o','u'];
    for (let char of str){
        if(voewels.includes(char)){
            vowelsCount ++;

        }
    }
    return vowelsCount;
}
let result = getCount('u');
console.log(result)