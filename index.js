function mapToNegativize(sourceArray) {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++) {
        arr.push(-1 * sourceArray[i])
    }
    return arr
}

function mapToNoChange(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i])
    }
    return arr
}

function mapToDouble(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] * 2)
    }
    return arr
}

function mapToSquare(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] * array[i])
    }
    return arr
}


function reduceToTotal(array, int = 0) {
    let sum = int
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {

        if (!array[i]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            return true
        }
    }
    return false
}