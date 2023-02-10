let myRoom = {
    table: 1,
    chair: 2,
    bed: 1,
    fan: 1,
    pen: 5,
    computer:1
}
console.log(myRoom);

// get value
/* let penCount = myRoom.pen;
console.log('Pen no.:', penCount);

let chairCount = myRoom['chair'];
console.log('Chair no.:', chairCount);

let properties = Object.keys(myRoom);
console.log(properties);

let values = Object.values(myRoom);
console.log(values); */

let propertyName = 'chair';
let countObject = myRoom[propertyName];
// console.log(countObject);

// put value
myRoom.pen = 10;
console.log(myRoom);
myRoom['pen'] = 20;
console.log(myRoom);

myRoom[propertyName] = 50;
console.log(myRoom);