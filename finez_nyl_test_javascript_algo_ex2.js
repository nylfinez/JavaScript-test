//1 Function that accepts an array as parameter
function check_array(A) {
    if(Array.isArray(A) || A.length === 9) {
        const uniqueNumbers = [];  //contains unique numbers

        for(let i = 0; i < A.length; i++) {
            let num = A[i];

            if (typeof num !== 'number' || (num < 1 || num > 9)) { //check if it's a number and is between 1 and 9
                return false; //return false
            } else if (uniqueNumbers.includes(num)) { //check if number is unique
                return false; //also return false
            } else {
                uniqueNumbers.push(num); //Add number to unique numbers
            }
        };

        return true;
    } else {
        return false; //if not an array
    }
}