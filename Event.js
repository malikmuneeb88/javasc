let btn1 = document.querySelector("#btn1");

btn1.onclick = (event) => {
    console.log(event);   //event object ki value print hogii
    console.log(event.type);  //type print hogii
    console.log(event.target);  //html mn jo button hai wo aajae gaa
    console.log(event.clientX, event.clientY);  
    // console.log("btn1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a);
}


let box = document.querySelector("div");
box.onmouseover = () => {
    console.log(event);   //event object ki value print hogii
    console.log(event.type);  //type print hogii
    console.log(event.target);  //html mn jo button hai wo aajae gaa
    console.log(event.clientX, event.clientY); 
    // console.log("you are inside div");
}