//Import array from javascript_test_je1
import { array_number } from 'javascript_test_je1.js';

//1 Create to_verify table with empty strings
let to_verify = new Array(9);
to_verify[0] = "";
to_verify[1] = "";
to_verify[2] = "";
to_verify[3] = "";
to_verify[4] = "";
to_verify[5] = "";
to_verify[6] = "";
to_verify[7] = "";
to_verify[8] = "";

//2 Read javascript_test_je1
function transfer_data() {
    to_verify = array_number;
    for(i = 0; i < to_verify.length; i++) {
        to_verify[i] = to_verify[i].replace(/\s/g,'').split(''); //remove all spaces and turn into array of characters
        console.log(to_verify);
    }
}

//3 Display in table
//Create table
function display_data() {
    
    const table = document.createElement('table');

    for(let i = 0; i < 9; i++) {
        const row = document.createElement('tr');

        for(let j = 0; j < 9; j++) {
            const cell = document.createElement('td');
            cell.textContent = to_verify[i][j];
            row.appendChild(cell);
        }

        table.appendChild(row)
    }

    document.body.appendChild(table);
}