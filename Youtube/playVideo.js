

document.getElementById("c1ofc2").addEventListener("click",()=>{
    window.location.replace("index.html")
})


showVideo=()=>{

    document.getElementById("contain").innerHTML=null;

let data=JSON.parse(localStorage.getItem("youtubeData"));
let video=data.videoId;
// console.log(video)

let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${video}`;

iframe.width="100%";
iframe.height="100%";
iframe.setAttribute("allowfullscreen",true);

document.getElementById("contain").append(iframe);







}