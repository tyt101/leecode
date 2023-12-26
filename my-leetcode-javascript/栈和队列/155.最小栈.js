var MinStack = function() {
    this.stack = []
    this.rentStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    // 这里的条件是： this.rentStack[this.rentStack.length - 1] >= val， 为什么有是>=而不是>呢
    // push进去如果有两相同的值时，我们没有push进去两个值，在pop的时候跟push进去的值的数量就不对应了。
    if(this.rentStack.length == 0 || this.rentStack[this.rentStack.length - 1] >= val) {
        this.rentStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.pop() == this.rentStack[this.rentStack.length - 1]) {
        this.rentStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.rentStack[this.rentStack.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */