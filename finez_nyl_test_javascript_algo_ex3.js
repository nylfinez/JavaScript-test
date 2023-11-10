//1 Check table rows
function check_row(to_validate) {
    for (let i = 0; i < to_validate.length; i++) {
        let line = to_validate[i];
        if (!check_array(line)){
            console.error(`Error in row ${i + 1}: ${JSON.stringify(line)}`)
        }
    }
}

//2 Check table columns
function check_column(to_validate) {
    const transpose = array => array[0].map( (x, col) => array.map(row => row[col]) ); //function to switch columns and rows

    let transposedTable = transpose(to_validate);
    for (let i = 0; i < transposedTable.length; i++) {
        let col = transposedTable[i];
        if (!check_array(col)){
            console.error(`Error in column ${i + 1}: ${JSON.stringify(line)}`)
        }
    }
}

//3 check regions
