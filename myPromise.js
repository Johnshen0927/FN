function MyPromise(callback) {
    this.status = "pending";
    this.resultedCbs = []
    this.rejectedCbs = []

    let resFn = () => {
        setTimeout(() => {
            if (this.status == "pending") {
                this.status = "resulted";
                this.resultedCbs.forEach(cb => {
                    cb()
                })
            }
        })
    }

    let rejFn = () => {
        setTimeout(() => {
            if (this.status == "pending") {
                this.status = "rejected";
                this.rejectedCbs.forEach(cb => {
                    cb();
                })
            }
        })
    }
    callback(resFn, rejFn)
}

MyPromise.prototype.then = function (res, rej) {
    // console.log(this);
    this.resultedCbs.push(res);
    this.rejectedCbs.push(rej);
}

let ins = new MyPromise((res, rej) => {
    setTimeout(() => {
        res();
    })
})
