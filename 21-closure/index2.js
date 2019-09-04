// ung dung closure
function debug(name) {
    return function(str) {
        console.log(`${name} ${str}`);
    }
}
let logs = debug('mouse');
logs('Error happened');