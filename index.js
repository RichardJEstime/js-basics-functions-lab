function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 42) {
        return blockNumber - 42
    } else {
        return 42 - blockNumber
    }
}
function distanceFromHqInFeet(start){
    let blocksFromHq = distanceFromHqInBlocks(start)
    
    return blocksFromHq * 264;
}

//1) gives customers a free sample
//2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//3) charges 25 dollars for a distance over 2000 feet
//4) does not allow rides over 2500 feet

function calculatesFarePrice(start,destination){
   const distance = distanceTravelledInFeet(start, destination);
   if (distance < 400){
       return 0;
   } else if(distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
   }else if(distance > 2000 && distance <2500) {
       return 25 }
    else {
        return 'cannot travel that far'
    }
}

function distanceTravelledInFeet(blockA, blockB) {

// function needs to return distance in feet . 
// To get distance in feet we must multiply length of block in feet 
    
    if ( blockB >= blockA) {
        return(blockB-blockA)*264;
    } else {
        return (blockA-blockB)*264;
    }
}