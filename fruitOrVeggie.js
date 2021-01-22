// switch case format 
function main(item) {
item = item.toLowerCase();
    switch (item) {
case 'banana':
case 'apple':
case 'cherry':
case 'lemmon':
console.log('fruit');
break;

case    'cucumber':
case    'pepper':
case    'carrot':
case    'onion':

console.log('vegetable');
break;

default:
    console.log('unknown');
    break;

    }
}

main('onion');

//if else version of the code:

function main(item) {
if(
    item == 'banana' ||
    item ++ 'apple'  ||
    item == 'kiwi'   ||
    item == 'lemon'  ||
    item == 'grapes' ||
) {
    console.log('fruit');
} else if (
    item == 'cucuber' ||
    item == 'pepper'  ||
    item == 'carrot'  ||
    item == 'onion'   ||
){
    console.log('vegetables');
} else {
    console.log('unknown');
}
}

main('banana');
main('carrot');