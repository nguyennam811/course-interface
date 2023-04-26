function CheckLastName(){
    var thongBao1 = document.getElementById("thongbao1");
    if(dangky.last_name.value ==""){
        dangky.last_name.style.border = "solid 2px red";
        thongBao1.style.display = "block";
        thongBao1.innerHTML = "* Họ đệm không được để trống";
        return false;
    } else{
        return CheckLengthLastName('last_name', 5, 20);
    }
}
function CheckLengthLastName(idText, minlength, maxlength){ 
	var inputText = document.getElementById(idText);
		var field = inputText.value; 
		var thongBao1 = document.getElementById ("thongbao1");	
		if(field.length<minlength || field.length> maxlength){
			thongBao1.style.display = "block";
			thongBao1.innerHTML ="* Hãy nhập vào giá trị từ  " + minlength +" đến " + maxlength +" kí tự";
			return false;
		} else { 
            dangky.last_name.style.border = "none";
			thongBao1.style.display ="none";
			return true;
		}

}

function CheckFirstName(){
    var thongBao2 = document.getElementById("thongbao2");
    if(dangky.first_name.value ==""){
        dangky.first_name.style.border = "solid 2px red";
        thongBao2.style.display = "block";
        thongBao2.innerHTML = "* Tên không được để trống";
        return false;
    } else{
        return CheckLengthFirstName('first_name', 2, 10);
    }
}
function CheckLengthFirstName(idText, minlength, maxlength){ 
	var inputText = document.getElementById(idText);
		var field = inputText.value; 
		var thongBao2 = document.getElementById ("thongbao2");	
		if(field.length<minlength || field.length> maxlength){
			thongBao2.style.display = "block";
			thongBao2.innerHTML ="* Hãy nhập vào giá trị từ  " + minlength +" đến " + maxlength +" kí tự";
			return false;
		} else { 
            dangky.first_name.style.border = "none";
			thongBao2.style.display ="none";
			return true;
		}
}

function CheckEmail(){
    var thongBao3 = document.getElementById("thongbao3");
    if(dangky.email.value ==""){
        dangky.email.style.border = "solid 2px red";
        thongBao3.style.display = "block";
        thongBao3.innerHTML = "* Email không được để trống";
        return false;
    } else{
        return CheckLengthEmail('email');
    }
}
function CheckLengthEmail(idTag){
    var inputTag = document.getElementById(idTag);
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var thongBao3 = document.getElementById("thongbao3");
    if(!inputTag.value.match(email)){ 
        thongBao3.style.display = "block";
        thongBao3.innerHTML = "* Hãy nhập địa chỉ email hợp lệ (Example@gmail.com)";
        return false;
    }else{
        dangky.email.style.border = "none";
        thongBao3.style.display = "none"; 
        return true;
    }
}

function CheckLengthPhone(idTag){
    var inputTag = document.getElementById(idTag);
    var numbers = /^[0-9]+$/;
    var thongBao4 = document.getElementById("thongbao4");
    if(inputTag.value.match(numbers)){ 
        dangky.phone.style.border = "none";
        thongBao4.style.display = "none"; 
        return true;
    }else{
        dangky.phone.style.border = "solid 2px red";
        thongBao4.style.display = "block";  
        thongBao4.innerHTML = "* Hãy nhập toàn số";
        return false;
    }
}

function CheckAge(){
    var thongBao5 = document.getElementById("thongbao5");
    if(dangky.age.value ==""){
        dangky.age.style.border = "solid 2px red";
        thongBao5.style.display = "block";
        thongBao5.innerHTML = "* Tuổi không được để trống";
        return false;
    } else{
        dangky.age.style.border = "none";
        thongBao5.style.display = "none";
        return true;
    }
}

function CheckCity(){
    var thongBao6 = document.getElementById("thongbao6");
    if(dangky.city.value ==""){
        dangky.city.style.border = "solid 2px red";
        thongBao6.style.display = "block";
        thongBao6.innerHTML = "* Cơ sở học không được để trống";
        return false;
    } else{
        dangky.city.style.border = "none";
        thongBao6.style.display = "none";
        return true;
    }
}

function CheckDate(){
    var thongBao7 = document.getElementById("thongbao7");
    if(dangky.start_date.value ==""){
        dangky.start_date.style.border = "solid 2px red";
        thongBao7.style.display = "block";
        thongBao7.innerHTML = "* Ngày bắt đầu không được để trống";
        return false;
    } else{
        dangky.start_date.style.border = "none";
        thongBao7.style.display = "none";
        return true;
    }
}

function kiemTraDangKy(){
    var thongBao1 = document.getElementById("thongbao1");
    var thongBao2 = document.getElementById("thongbao2");
    var thongBao3 = document.getElementById("thongbao3");
    var thongBao4 = document.getElementById("thongbao4");
    var thongBao5 = document.getElementById("thongbao5");
    var thongBao6 = document.getElementById("thongbao6");
    var thongBao7 = document.getElementById("thongbao7");

    if(dangky.last_name.value =="" && dangky.first_name.value == "" && dangky.email.value==""
    && dangky.phone.value=="" && dangky.age.value =="" && dangky.city.value==""){
        
        dangky.last_name.style.border = "solid 2px red";
        dangky.first_name.style.border = "solid 2px red";
        dangky.email.style.border = "solid 2px red";
        dangky.phone.style.border = "solid 2px red";
        dangky.age.style.border = "solid 2px red";
        dangky.city.style.border = "solid 2px red";
        dangky.start_date.style.border = "solid 2px red";

        thongBao1.style.display = "block";
        thongBao2.style.display = "block";
        thongBao3.style.display = "block";
        thongBao4.style.display = "block";
        thongBao5.style.display = "block";
        thongBao6.style.display = "block";
        thongBao7.style.display = "block";

        thongBao1.innerHTML = "* Họ đệm không được để trống";
        thongBao2.innerHTML = "* Tên không được để trống";
        thongBao3.innerHTML = "* E-mail không được để trống";
        thongBao4.innerHTML = "* Điện thoại không được để trống";
        thongBao5.innerHTML = "* Tuổi không được để trống";
        thongBao6.innerHTML = "* Cơ sở học không được để trống";
        thongBao7.innerHTML = "* Ngày bắt đầu không được để trống";
        return false;
    }else{
        return CheckLastName() && CheckFirstName() && CheckEmail() && CheckLengthPhone('phone') && CheckAge() && CheckCity() &&CheckDate();
    }
}

function kiemTraHopLe(){
    return kiemTraDangKy() && saveFormData();
}

//đọc dữ liệu
function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let information = JSON.parse(this.responseText);
            document.getElementById("title").innerText = information.title;
            document.getElementById("desc").innerText = information.desc;
            document.getElementById("title2").innerText = information.title2;
            document.getElementById("desc2").innerText = information.desc2;
        }
    };
    xhttp.open("GET", "https://myweb-5047c-default-rtdb.firebaseio.com/information/information2.json", true);
    xhttp.send();
}
getInfo();

//lưu dữ liệu
const lastname = document.getElementById('last_name');
const firstname = document.getElementById('first_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const course_select = document.getElementById('course-select');
const city = document.getElementById('city');
const cahoc = document.getElementById('cahoc');
const hinhthuc = document.getElementById('hinhthuc');
const startdate = document.getElementById('start_date');
const form = document.querySelector('form');

function saveFormData() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://myweb-5047c-default-rtdb.firebaseio.com/course.json", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
        
    var data = {
        lastname: lastname.value,
        firstname: firstname.value,
        email: email.value,
        phone: phone.value,
        gender: gender.value,
        age: age.value,
        course_select: course_select.value,
        city: city.value,
        cahoc: cahoc.value,
        hinhthuc: hinhthuc.value,
        startdate: startdate.value
    }
    xhttp.send(JSON.stringify(data));

}
form.addEventListener('submit', function(e){
    e.preventDefault()
    alert('Đăng kí thành công');
})








    
