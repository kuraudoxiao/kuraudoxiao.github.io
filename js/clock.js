function myTime(){
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

document.getElementById("1").innerText = Math.floor(hh / 10);
//因为js的 / 不是整除而是得到浮点数
document.getElementById("2").innerText = hh % 10;
document.getElementById("4").innerText = Math.floor(mm / 10);
document.getElementById("5").innerText = mm % 10;
document.getElementById("7").innerText = Math.floor(ss / 10);
document.getElementById("8").innerText =ss % 10;
}
setInterval(myTime,1000); //每隔1000毫秒运行一次myTime方法