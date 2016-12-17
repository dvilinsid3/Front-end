var clicks = 0;
document.getElementById("myBox").addEventListener("click", function count()
{
    clicks = clicks + 1;
    document.getElementById("clickCount").innerHTML = clicks;
});
