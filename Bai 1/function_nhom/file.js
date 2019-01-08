
function khanh() {
  var str = "Nguyễn Văn Khánh";
  var res = str.toString();
  document.getElementById("Hi").value = res;
  var tuoi = 22;
  document.getElementById("age").value = tuoi;
  var checkBoxNam = document.getElementById("nam");
  var checkBoxNu = document.getElementById("nu");
  var text = document.getElementById("gender");
  if ((checkBoxNam.checked == true)&&(checkBoxNu.checked == true)
    ||(checkBoxNam.checked == "") && (checkBoxNu.checked == "")) text.value = "";
    else if(checkBoxNam.checked == true) text.value ="Nam";    
        else document.getElementById("gender").value ="Nữ";

}
function GroupsOne() {
  var str = "Nguyễn Văn Khánh + Bùi Thiện Tâm + Hoàng Minh Chính";
  var res = str.toString();
  document.getElementById("Hi_groups").value = res;
  var tuoi = 24.6;
  document.getElementById("age_medium").value = tuoi;
  var checkBoxNam = document.getElementById("male");
  var checkBoxNu = document.getElementById("female");
  var text = document.getElementById("genneral_gender");
  if ((checkBoxNam.checked == true)&&(checkBoxNu.checked == true)
    ||(checkBoxNam.checked == "") && (checkBoxNu.checked == "")) text.value = "";
    else if(checkBoxNam.checked == true) text.value ="Nam";    
        else document.getElementById("genneral_gender").value ="Nữ";

}