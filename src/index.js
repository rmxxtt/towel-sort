
// You should implement your task here.

function towelSort (matrix) {
    if (!matrix) return []
    return matrix.map((v, i) => {
        return i%2 ? v.reverse() : v;
    }).flat();
}

module.exports = towelSort
