function MyPromise(callback) {
    // 设置状态
    this.status = "pending";
    // 用数组分别存放res和rej状态列队需执行的的函数
    this.resultedCbs = []
    this.rejectedCbs = []

    let resFn = () => {
        setTimeout(() => {
            if (this.status == "pending") {
                // 只有当状态为待执行才能触发
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