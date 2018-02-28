class Args {

    static isUndefined(expression) {
        return expression === undefined;
    }

    static isNull(expression) {
        return expression === null;
    }

    static isTrue(expression) {
        return expression === true;
    }

    static isFalse(expression) {
        return expression === false;
    }

    static isBoolean(expression) {
        return this.isTrue(expression) || this.isFalse(expression);
    }

    static isNumber(expression) {
        return !Number.isNaN(expression) && Args._toString.call(expression) === '[object Number]';
    }

    static isNaN(expression) {
        return Number.isNaN(expression);
    }

    static isInteger(expression) {
        return !Number.isInteger(expression);
    }

    static isPositive(expression) {
        return expression > 0;
    }

    static isNegative(expression) {
        return expression < 0;
    }

    static isArray(expression) {
        return Array.isArray(expression) || Args._toString.call(expression) === '[object Array]';
    }

}

// 定义静态属性 _toString 必须在声明 Args 类之后定义
Args._toString = Object.prototype.toString;

class Assert {

    static requireUndefined(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isUndefined(expression)) {
            throw new AssertError(message);
        }
    }

    static requireNull(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isNull(expression)) {
            throw new AssertError(message);
        }
    }

    static requireTrue(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isTrue(expression)) {
            throw new AssertError(message);
        }
    }

    static requireFalse(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isFalse(expression)) {
            throw new AssertError(message);
        }
    }

    static requireBoolean(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isBoolean(expression)) {
            throw new AssertError(message);
        }
    }

    static requireNumber(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isNumber(expression)) {
            throw new AssertError(message);
        }
    }

    static requireNaN(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isNaN(expression)) {
            throw new AssertError(message);
        }
    }

    static requireInteger(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isInteger(expression)) {
            throw new AssertError(message);
        }
    }

    static requirePositive(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isPositive(expression)) {
            throw new AssertError(message);
        }
    }

    static requireNegative(expression, message = Assert.DEFAULT_ASSERT_FAIL_MESSAGE) {
        if (!Args.isNegative(expression)) {
            throw new AssertError(message);
        }
    }

}

Assert.DEFAULT_ASSERT_FAIL_MESSAGE = 'Assert error';

class AssertError extends Error {

    constructor(message) {
        super(message);
    }

    toString() {
        return `${this.message}\n${super.toString()}`
    }

}