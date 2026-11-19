function updateClock () {
    const clock=document.getElementById("Clock");
    if(clock) clock.textContent=new Date(). toLocaleDateString;
}
updateClock();
setInterval(updateClock,1000);