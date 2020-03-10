
function linear_search(number, list) {
  for(let i = 0; i < list.length; i++){
    if(list[i] === number) return i;
  }
  return None;
}

function binary_search(number, list) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (list[mid] === number) {
            return mid;
        }
        if (list[mid] < number) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null;
}
function print_result(search, index) {
    let result = search + ' search ';

    if (index === null) {
        result += 'did not find it.'
    } else {
        result += `found it on index ${index}.`
    }

    console.log(result);
}


function main() {
    let numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97];
    let searched_number = Number(prompt('What is the number you are looking for? (0-100)'));

    print_result('Linear', linear_search(searched_number, numbers));
    print_result('Binary', binary_search(searched_number, numbers));
}

main();

