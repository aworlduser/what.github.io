let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";



let myImage = document.querySelector("img");

myImage.onclick = function () {
  let imageSrc = myImage.getAttribute("src");
  if (imageSrc === "images/logo_01.png") 
    myImage.setAttribute("src","images/logo_02.png");
  else {
    myImage.setAttribute("src","images/logo_01.png");
  }
};


// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');


// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};
