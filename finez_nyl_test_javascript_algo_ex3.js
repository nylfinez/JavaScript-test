import { check_array } from './finez_nyl_test_javascript_algo_ex2';

//1 use check_array with the to_validate table
function check_line(to_validate) {
    for (let i = 0; i < to_validate.length; i++) {
        let line = to_validate[i];
        if (!check_array(line)){
            console.error(`Error in column ${i + 1}: ${JSON.stringify(line)}`)
        }
    }
}