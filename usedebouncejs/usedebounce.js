let timer;
function searchbackend()
{
    console.log("request sent to backend!")
    //fetch logic
}
function usedebounce()
{
    console.log("Inside the debounce function");
    clearTimeout(timer);
    timer = setTimeout(searchbackend() , 30);
}

usedebounce();
usedebounce();
usedebounce();
usedebounce();
usedebounce();
usedebounce();