const qs = (x)=>document.querySelector(x);
const qsa = (x)=>document.querySelectorAll(x);
const navTopHeight = qs(".third-header").offsetTop;
// ===========================header==================================
{
    qs("title").innerText = "Project Two";
    qs(".tollfree").innerText = `Toll Free: Comming Soon...`;
    // qs(".logo").innerText = `GEEG`;
    qs(".card-section>h3").innerText = `Our Goals`;
}
/*why us section */
{
        qsa(".description-for-card>h2")[0].innerText = `Offering more ways to ride green`;
        qsa(".description-for-card>p")[0].innerText = `We're committed to providing sustainable, shared alternatives to the personal car.`;
        qsa(".description-for-card>h2")[1].innerText = `Helping drivers go electric`;
        qsa(".description-for-card>p")[1].innerText = `Drivers are leading the way toward a greener future, and Geeg is committed to supporting them`;
        qsa(".description-for-card>h2")[2].innerText = `Making transparency a priority`;
        qsa(".description-for-card>p")[2].innerText = `Progress starts with taking a serious look at where we stand today and sharing results to drive accountability.`;
}
{
    qs(".sec-header>img").onmouseenter = function(){
        qs(".sec-header>img").style.cssText = `animation: logoShake .2s ease 0s 1 normal forwards;`;
    }
    qs(".sec-header>img").onmouseleave = function(){
        qs(".sec-header>img").style.cssText = `animation:none;`;
    }
}
// third nav-bar section
window.onscroll = ()=>fixedFun();
function fixedFun(){
    const store = qs(".third-header").classList;
    if(window.scrollY > navTopHeight){
        // navTopHeight is already declared at the top
        store.add("fixed");
    }else{
        store.remove("fixed");
    }
}
// nab-bar links array
(()=>{
const navLinks = ["Home","Services","Our-Goals","Blog","Contact-Us"];
    const links = qsa(".nav-bar>ul>li>a");   
    qs(".openMenu").addEventListener("click",()=>{    
        qs(".openMenu").style.cssText = `display:none;`;
        qs(".closeMenu").style.cssText = `display:block;`;
        qs(".nav-bar").style.setProperty("height",`58rem`);
        qs(".nav-bar>ul").style.display="block";
        qs(".logo").style.setProperty("display","none");
        for(let i=0;i<links.length;i++){
            links[i].addEventListener("click",()=>{
                qs(".closeMenu").click();
            });
        }
    })
    qs(".closeMenu").addEventListener("click",()=>{    
        qs(".openMenu").style.cssText = `display:block;`;
        qs(".closeMenu").style.cssText = `display:none;`;
        qs(".nav-bar").style.removeProperty("height");
        qs(".nav-bar>ul").style.display="none";
        qs(".logo").style.setProperty("display","block");
    })
    for(let i=0;i<links.length;i++){
        links[i].innerText = navLinks[i];
        // links[i].addEventListener("click",()=>{
        //     qs(".closeMenu").click();
        // });
    }
})();
// <!-- slider code from w3schools -->
{
    // for html text
    {
        let arrLen = qsa(".numbertext").length;
        for(let i=0;i<arrLen;i++){
            qsa(".numbertext")[i].innerText = `${i+1}/${arrLen}`;
            let item = ["Batuwa Cab","All Solution Nepal", "Electric Vehical"]
            // qsa(".slider_text")[i].innerText = ;
            qsa(".slider_text")[i].innerText = item[i];
        }
    }

    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds

    }

 
}
{
    // image onclick event
        function batuwa(){
            window.location.href = `https://batuwacab.com/`;
        }
        function allsolutionnp(){
             window.location.href = `https://allsolutionnepal.com/`;
            }
        function fakesite(){        
            window.location.href = `https://www.facebook.com/EvShowroomBirtamode`;
        }
}
// black band section
{
    qs(".black-band>div>h3").innerText = `We follow Uber Commitment.`;
    qs(".black-band>div>p").innerText = `“As the largest mobility platform in the world, we know that our impact goes beyond our technology. We want to do our part to build back better and support a green recovery in our cities and communities.”`;
    qs(".black-band>button").innerText = `Contact Us`;
}
// blog section
{
    let len = qsa(".content-section>div").length;
    qsa(".content-section>div>h4")[0].innerText = `Electric Bike`;
    qsa(".content-section>div>p")[0].innerText = `Planning to buy an electric scooter? Well, we know that fuel type is one of the most crucial things while buying a two wheeler. Hence, we have put together a complete list of best electric bikes in Nepal.`;
    qsa(".content-section>div>h4")[1].innerText = `Our Growth`;
    qsa(".content-section>div>p")[1].innerText = `We are committed to doing our part, and technology is at the heart of our approach. We partner with safety advocates and develop new technologies and systems to help improve safety and help make it easier for everyone to get around.`;
    qsa(".content-section>div>h4")[2].innerText = `Travel&Explore`;
    qsa(".content-section>div>p")[2].innerText = `Fill Your Life With Adventures, We helping riders find a way to go from point A to point B We offer the best vehical as your desire. Book a car,taxi,moto and many more.`;
    
    for (let i = 0; i < len; i++) {
    qsa(".content-section>div>button")[i].innerText = `Read More`;
    }
    // console.log(store);         
}
// onclick event on contact section
{
    function contactus(){
        document.getElementById("contactus").click();
    }
    function gobatuwa(){
        window.location.href = "https://www.youtube.com/channel/UCDGThF6_l6Sq8eZjHiBOx4Q";
    }
    function npage(){
        window.location.href = "./certificate.html";
    }
}