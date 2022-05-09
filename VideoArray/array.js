let n = Number(prompt("nhập vị trí cần tìm: "))
let t = [0, 1];
let i = 2;
if (n < 3) {
    console.log(t);
    console.log('so can tim: ', t[n - 1])
}
else {
    while (i <= n - 1) {
        t.push(Number(t[i - 2] + (t[i - 1] * t[i - 1])));
        i++;
    }
    console.log(t);
    console.log('so can tim: ', t[n - 1])
}




