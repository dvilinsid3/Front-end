var checkTimer = 0;
document.getElementById("myBox").addEventListener("click", function startTimer()
{
    if (checkTimer === 0)
    {
        checkTimer = 1;
        setTimeout(function resetTimer(){
            clicks = 0;
            document.getElementById("clickCount").innerHTML = clicks;
            checkTimer = 0;
        }, 30000);
    }
});