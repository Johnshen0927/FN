// trafficLight with promise
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