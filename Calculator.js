
let nums = []
let ops = []
function clearDisplay() {

}

function chooseOperation(op) {
    let dis = document.getElementById('display');
    nums.push(parseInt(dis.textContent))
    dis.textContent = op
    ops.push(op);
}

function appendNumber(num) {
    let dis = document.getElementById('display');
    if (dis.textContent === '+' || dis.textContent === '-' || dis.textContent === '*' || dis.textContent === '/' || dis.textContent === '%') {
        dis.textContent = num;
    } else {
        dis.textContent += num;
    }
}

function clear(){
    let dis = document.getElementById('display');
    dis.textContent = 0;
}

function compute() {
    let dis = document.getElementById('display');
    nums.push(parseInt(dis.textContent))
    let j = 1;
    let k = 0;
    let ans = nums[0];
    while (j < nums.length) {
        if (ops[k] === '+') {
            ans += nums[j];
        } else if (ops[k] === '-') {
            ans -= nums[j];
        } else if (ops[k] === '*') {
            ans *= nums[j];
        } else if (ops[k] === '/') {
            ans /= nums[j];
        } else if (ops[k] === '%') {
            ans %= nums[j];
        }
        j++;
        k++;
    }
    console.log(ans)
    
    dis.textContent = ans;
}