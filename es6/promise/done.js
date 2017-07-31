Promise.prototype.done = function () {
    this.catch(function (reason) {
        setTimeout(() => { throw reason }, 0); 
    })
}