function setCookie(){
  var d = new Date();
  var cMail = document.forms['userData'].inputEmail.value;
  var cName = document.forms['userData'].inputUserName.value;
  var cPhone = document.forms['userData'].inputPhoneNumber.value;

  d.setTime(d.getTime() + (10*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();

  document.cookie = "cMail=" + cMail + ";" + expires + ";path=/";
  document.cookie = "cName=" + cName + ";" + expires + ";path=/";
  document.cookie = "cPhone=" + cPhone + ";" + expires + ";path=/";
  console.log('setCookie');
  console.log('userData=', document.forms['userData'].inputEmail.value);
  return true
}
console.log("welcome");

// var d = new Date();
// d.setTime(d.getTime() + (1*24*60*60*1000));
// var expires = "expires="+ d.toUTCString();
// console.log(expires)
// document.cookie = "cMail=cvalue;" + expires + ";path=/";
// document.cookie = "cname=cvalue;" + expires + ";path=/";
// document.cookie = "cPhone=cvalue;" + expires + ";path=/";
// setcookie("cname=cvalue;" + expires + ";path=/");
