// function red() {
//     console.log("red");
// }

// function green() {
//     console.log("green");
// }

// function yellow() {
//     console.log("yellow")
// }

// function light(fn, time) {
//     setTimeout(fn, time)
// }

// function start(ts) {
//     ts--
//     if (ts <= 0) {
//         return;
//     }
//     // Promise.resolve().then(light(red, 1000)).then(light(yellow, 2000)).then(light(green, 3000)).then(start(ts))
//     Promise.resolve().then(light(red, 1000)).then(light(green, 1000)).then(light(yellow, 1000)).then(start(ts))
// }

// start(5)

// function red() {
//     console.log("red");
// }

// function yellow() {
//     console.log("yellow")
// }

// function green() {
//     console.log("green")
// }

// let light = (fn, time) => new Promise(res => {
//     setTimeout(function () {
//         fn()
//         res()
//     }, time)
// })

// function light(fn, time) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             fn()
//             res()
//         }, time)
//     })
// }

// console.log(typeof(() => light(red, 3000)));

// function start(t) {
//     t--;
//     let inst = new Promise((res) => {
//         res();
//     });
//     inst.then(() => {
//         return light(green, 2000)
//     }).then(() => {
//         return light(yellow, 1000)
//     }).then(() => {
//         return light(red, 3000)
//     }).then(() => {
//         return start(t)
//     })
// }

// function start(t) {
//     t--;
//     Promise.resolve().then(light(green, 1000)).then(light(yellow), 1000)
//         .then(red, 1000).then(start(t))
// }

// start(2)


function red() {
    console.log("red");
}

function yellow() {
    console.log("yellow")
}

function green() {
    console.log("green")
}


function light(fn, time) {
    setTimeout(fn, time);
}

function start(t) {
    if (t <= 0) {
        return;
    }
    t--;
    Promise.resolve().then(light(red, 1000)).then(light(green, 1000)).then(light(yellow, 1000)).then(start(t))
}
start(2)