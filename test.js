const counters = document.querySelectorAll(".counter");
counters.forEach((el)=>{
    el.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currNum =  +el.innerText;
        const dataCeil = el.getAttribute("data-ceil");
        const increment = dataCeil/15;
        currNum = currNum + increment;
        el.innerText = Math.ceil(currNum);
        if (currNum<dataCeil) {
            setTimeout(incrementCounter,50)
        }else{
            el.innerText = dataCeil;
        }
    }
})