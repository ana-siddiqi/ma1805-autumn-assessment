function hideAll(){
    m1.style.display="none";
    m2.style.display="none";
    m3.style.display="none";
    m4.style.display="none";
    m5.style.display="none";
    m6.style.display="none";
}

hideAll();

window.addEventListener("load",()=>{
    audio.volume=0.3;
    audio.play().catch(()=>{
        console.log("Click anywhere to start playing the audio");
    });
});

s1.onclick=function(event){
    event.stopPropagation();
    hideAll();
    m1.style.display="block";
}

s2.onclick=function(event){
    event.stopPropagation();
    hideAll();
    m2.style.display="block";
    audio.pause();
}

s3.onclick=function(event){
    event.stopPropagation();
    hideAll();
    m3.style.display="block";
}

s4.onclick=function(event){
    event.stopPropagation();
    hideAll();
    m4.style.display="block";
    audio.pause();
}

s5.onclick=function(event){
    event.stopPropagation();
    hideAll();
    m5.style.display="block";
}

s6.onclick=function(event){
    event.stopPropagation();
    hideAll();
    m6.style.display="block";
    audio.pause();
}




document.body.onclick=function(){
    hideAll();

    if(audio.paused){
        audio.play().catch(()=>{
        console.log("users must interact with audio");
    });
    }
};

