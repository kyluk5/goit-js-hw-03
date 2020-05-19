// debugger;

const findBestEmployee = function (employees) {
    // твой код
    const allEntries = Object.entries(employees);
    // console.log(allEntries);
    let beterEmploee = '';
    let matchProductive = 0;

    for (let entry of allEntries) {
        let employee = entry[0]
        let productive = entry[1]
        if (matchProductive < productive) {
            matchProductive = productive;
            beterEmploee = employee;
        }
    }
    return beterEmploee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux