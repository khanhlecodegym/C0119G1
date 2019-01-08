function changeMember2(){
document.getElementById("L1").innerHTML = "Hoàng Ngọc Phúc Long";
document.getElementById("Tuoi").innerHTML = "22";
var a =true;
document.getElementById("1").innerHTML = a.sex();
}
function changeMember4(){
document.getElementById("L1").innerHTML = "Trần Mạnh Long &nbsp;|&nbsp;Hoàng Ngọc Phúc Long &nbsp;|&nbsp;Hồ Quắc Viễn";
	var Tuoi3=parseInt(31+22+22)/3;
document.getElementById("Tuoi").innerHTML = +Tuoi3;
var a =false;
document.getElementById("1").innerHTML = a.sex()+"&nbsp;<p> Tại sao không phải là Nam 😭";
}

Boolean.prototype.sex = function() {
  if (this.valueOf() == true) {
    return "Nam";
  } else {
    return "Nữ";
  }
};