window.addEventListener('wheel', function(dets){
    if(dets.deltaY > 0){
        gsap.from('nav',{
            y: -100,
            duration: 1.4,
            delay: 0.2,
        })
    }else{
        gsap.from('nav',{
            y: 0,
            duration: 1.4,
            delay: 0.2,
        })
    }
})


let timeline = gsap.timeline();

timeline.from('nav .logo', {
    x: -200,
    duration: 0.7,
    opacity: 0,
})

timeline.from('nav h4, nav button', {
    y: -40,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
})

timeline.from('.center-part1 h1',{
    x: -300,
    opacity: 0,
    duration: 0.5,
})

timeline.from('.center-part1 p',{
    x: -100,
    opacity: 0,
    duration: 0.4,
})

timeline.from('.center-part1 button',{
    opacity: 0,
    duration: 0.2,
})

timeline.from('.center-part2 img',{
    scale: 0,
    duration: 0.6,
    ease: "elastic.out(1,1)",
},"-=1")



let timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        scroller: 'body',
        start: 'top 90%',
        end: 'top -150%',
        scrub: 2,
    }
})

timeline2.from('.section2 .top-logo img',{
    y: 100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
})

timeline2.from('.section2 .services',{
    x: -200,
    opacity: 0,
    duration: 0.5,
})

//============================================== Box Part 1 ==========================================//

timeline2.from('.section2 .container .box1',{
    x: -300,
    opacity: 0,
    duration: 1,
}, "boxPart1")

timeline2.from('.section2 .container .box2',{
    x: 300,
    opacity: 0,
    duration: 1,
}, "boxPart1")

//============================================== End Box Part 1 ==========================================//


//============================================== Box Part 2 ==========================================//

timeline2.from('.section2 .container .box3',{
    x: -300,
    opacity: 0,
    duration: 1,
}, "boxPart2")

timeline2.from('.section2 .container .box4',{
    x: 300,
    opacity: 0,
    duration: 1,
}, "boxPart2")


//============================================== End Box Part 2 ==========================================//


//============================================== Box Part 3 ==========================================//

timeline2.from('.section2 .container .box5',{
    x: -300,
    opacity: 0,
    duration: 1,
}, "boxPart3")

timeline2.from('.section2 .container .box6',{
    x: 300,
    opacity: 0,
    duration: 1,
}, "boxPart3")

//============================================== End Box Part 3 ==========================================//

gsap.from('.section3 .container',{
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: 'CustomBounce.create("myBounce")',
    scrollTrigger:{
        trigger: '.section3',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 2,
    }
})

//================================================================ Images ======================================//

gsap.to('.image-div',{
    transform: 'translateX(-1000%)',
    duration: 15,
    ease: 'none',
    repeat: -1,
})

//============================================================== End Images =================================================//

//============================================================ JavaScript ======================================//

let messages = document.querySelector('.message');
let close = document.querySelector('#close');
let headingFirst = document.querySelector('.firsth')
let headingSecond = document.querySelector('.second')
let part2Text = document.querySelector('.message-container .part2');

messages.addEventListener('click', ()=>{
    messages.classList.remove('message-display');
})
close.addEventListener('click',() => {
    messages.classList.remove('message-display');
})

//============================================================ Box 1 ==========================================================//

let socialMediaH1Box1 = document.querySelector('.box1 .h1-div');
let socialMediaIconDivBox1 = document.querySelector('.box1 .arrow-icon-div');
let socialMediaImgBox1 = document.querySelector('.box1 img');

socialMediaH1Box1.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media';
    headingSecond.innerText = 'Security Service';

    part2Text.innerText = `In our digital world, the security of social media accounts plays a key role in keeping your personal and professional life safe. Our social media security service is specifically designed to protect your online presence from unauthorized access, hacking, and information leaks. We offer a comprehensive approach including multi-level authentication, continuous monitoring of account activity, and prompt response to any suspicious actions. Our services are tailored to each client, ensuring maximum security and confidentiality. Rest assured, your online world is in safe hands.`
})

socialMediaIconDivBox1.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media';
    headingSecond.innerText = 'Security Service';

    part2Text.innerText = `In our digital world, the security of social media accounts plays a key role in keeping your personal and professional life safe. Our social media security service is specifically designed to protect your online presence from unauthorized access, hacking, and information leaks. We offer a comprehensive approach including multi-level authentication, continuous monitoring of account activity, and prompt response to any suspicious actions. Our services are tailored to each client, ensuring maximum security and confidentiality. Rest assured, your online world is in safe hands.`
})

socialMediaImgBox1.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media';
    headingSecond.innerText = 'Security Service';

    part2Text.innerText = `In our digital world, the security of social media accounts plays a key role in keeping your personal and professional life safe. Our social media security service is specifically designed to protect your online presence from unauthorized access, hacking, and information leaks. We offer a comprehensive approach including multi-level authentication, continuous monitoring of account activity, and prompt response to any suspicious actions. Our services are tailored to each client, ensuring maximum security and confidentiality. Rest assured, your online world is in safe hands.`
})

//============================================================ End Box 1 ======================================================//


//============================================================ Box 2 ==========================================================//

let socialMediaH1Box2 = document.querySelector('.box2 .h1-div');
let socialMediaIconDivBox2 = document.querySelector('.box2 .arrow-icon-div');
let socialMediaImgBox2 = document.querySelector('.box2 img');

socialMediaH1Box2.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media Profile';
    headingSecond.innerText = 'Monitoring Service';

    part2Text.innerText = `Your activity on social media is a reflection of your personality and professionalism. Our social media profile monitoring service provides constant oversight of your online presence. We track all changes and activities in your profile, whether it's updates, comments, or friend requests, to ensure that your online reputation remains unblemished. This service is particularly important for public figures, business leaders, and anyone looking to maintain a professional image online. With our help, you can focus on your life and work, knowing your social profile is under reliable protection.`
    
})

socialMediaIconDivBox2.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media Profile';
    headingSecond.innerText = 'Monitoring Service';
})

socialMediaImgBox2.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media Profile';
    headingSecond.innerText = 'Monitoring Service';
})

//============================================================ End Box 2 ======================================================//

//============================================================ Box 3 ==========================================================//

let socialMediaH1Box3 = document.querySelector('.box3 .h1-div');
let socialMediaIconDivBox3 = document.querySelector('.box3 .arrow-icon-div');
let socialMediaImgBox3 = document.querySelector('.box3 img');

socialMediaH1Box3.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media';
    headingSecond.innerText = 'Marketing';

    part2Text.innerText = `In the era of digital technology, social media marketing has become an integral part of successful business. Our team of experts offers comprehensive social media marketing services, helping you engage effectively with your audience. We specialize in developing content marketing strategies, managing social media, creating unique and engaging content, and optimizing advertising campaigns for maximum reach and audience engagement. Utilize our expertise to elevate your brand on social media, strengthen your online presence, and increase brand recognition.`
});

socialMediaIconDivBox3.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media';
    headingSecond.innerText = 'Marketing';

    part2Text.innerText = `In the era of digital technology, social media marketing has become an integral part of successful business. Our team of experts offers comprehensive social media marketing services, helping you engage effectively with your audience. We specialize in developing content marketing strategies, managing social media, creating unique and engaging content, and optimizing advertising campaigns for maximum reach and audience engagement. Utilize our expertise to elevate your brand on social media, strengthen your online presence, and increase brand recognition.`
})

socialMediaImgBox3.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Social Media';
    headingSecond.innerText = 'Marketing';

    part2Text.innerText = `In the era of digital technology, social media marketing has become an integral part of successful business. Our team of experts offers comprehensive social media marketing services, helping you engage effectively with your audience. We specialize in developing content marketing strategies, managing social media, creating unique and engaging content, and optimizing advertising campaigns for maximum reach and audience engagement. Utilize our expertise to elevate your brand on social media, strengthen your online presence, and increase brand recognition.`
})

//============================================================ End Box 3 ======================================================//

//============================================================ Box 4 ==========================================================//

let socialMediaH1Box4 = document.querySelector('.box4 .h1-div');
let socialMediaIconDivBox4 = document.querySelector('.box4 .arrow-icon-div');
let socialMediaImgBox4 = document.querySelector('.box4 img');

socialMediaH1Box4.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Email';
    headingSecond.innerText = 'Marketing';

    part2Text.innerText = `Email marketing remains one of the most powerful tools in the digital marketing arsenal, offering a direct and personalized communication path with your target audience. Our team provides a full range of email marketing services including strategy development, creation of attractive and compelling content, audience segmentation for effective targeting, and campaign analysis and optimization. We help you build and strengthen relationships with customers, increase loyalty, and stimulate sales through the power of personalized, targeted email messages.`
});

socialMediaIconDivBox4.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Email';
    headingSecond.innerText = 'Marketing';

    part2Text.innerText = `Email marketing remains one of the most powerful tools in the digital marketing arsenal, offering a direct and personalized communication path with your target audience. Our team provides a full range of email marketing services including strategy development, creation of attractive and compelling content, audience segmentation for effective targeting, and campaign analysis and optimization. We help you build and strengthen relationships with customers, increase loyalty, and stimulate sales through the power of personalized, targeted email messages.`
})

socialMediaImgBox4.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Email';
    headingSecond.innerText = 'Marketing';

    part2Text.innerText = `Email marketing remains one of the most powerful tools in the digital marketing arsenal, offering a direct and personalized communication path with your target audience. Our team provides a full range of email marketing services including strategy development, creation of attractive and compelling content, audience segmentation for effective targeting, and campaign analysis and optimization. We help you build and strengthen relationships with customers, increase loyalty, and stimulate sales through the power of personalized, targeted email messages.`
})

//============================================================ End Box 4 ======================================================//

//============================================================ Box 5 ==========================================================//

let socialMediaH1Box5 = document.querySelector('.box5 .h1-div');
let socialMediaIconDivBox5 = document.querySelector('.box5 .arrow-icon-div');
let socialMediaImgBox5 = document.querySelector('.box5 img');

socialMediaH1Box5.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Content';
    headingSecond.innerText = 'Creation AI';

    part2Text.innerText = `In a world where content defines brand perception, our AI-powered content creation solution is a revolutionary tool capable of transforming your marketing strategy. We offer cutting-edge AI technologies capable of generating unique, relevant, and engaging content - from blog posts and social media updates to marketing texts and creative product descriptions. Our intelligent algorithm adapts to your brand and target audience, ensuring content creation that resonates with your clients and enhances search engine optimization. Embrace our AI for content creation and discover new horizons in attracting and retaining an audience.`
})

socialMediaIconDivBox5.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Content';
    headingSecond.innerText = 'Creation AI';

    part2Text.innerText = `In a world where content defines brand perception, our AI-powered content creation solution is a revolutionary tool capable of transforming your marketing strategy. We offer cutting-edge AI technologies capable of generating unique, relevant, and engaging content - from blog posts and social media updates to marketing texts and creative product descriptions. Our intelligent algorithm adapts to your brand and target audience, ensuring content creation that resonates with your clients and enhances search engine optimization. Embrace our AI for content creation and discover new horizons in attracting and retaining an audience.`
})

socialMediaImgBox5.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Content';
    headingSecond.innerText = 'Creation AI';

    part2Text.innerText = `In a world where content defines brand perception, our AI-powered content creation solution is a revolutionary tool capable of transforming your marketing strategy. We offer cutting-edge AI technologies capable of generating unique, relevant, and engaging content - from blog posts and social media updates to marketing texts and creative product descriptions. Our intelligent algorithm adapts to your brand and target audience, ensuring content creation that resonates with your clients and enhances search engine optimization. Embrace our AI for content creation and discover new horizons in attracting and retaining an audience.`
})

//============================================================ End Box 5 ======================================================//

//============================================================ Box 6 ======================================================//

let socialMediaH1Box6 = document.querySelector('.box6 .h1-div');
let socialMediaIconDivBox6 = document.querySelector('.box6 .arrow-icon-div');
let socialMediaImgBox6 = document.querySelector('.box6 img');

socialMediaH1Box6.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Analytics and';
    headingSecond.innerText = 'Tracking';

    part2Text.innerText = `In the world of digital marketing, accurate and timely analytics are key to success. Our analytics and tracking service provides you with a deep understanding of your audience's behavior and preferences. We offer integrated analytical tools that collect, analyze, and interpret data about your users, enabling you to make informed decisions about marketing strategy and product development. From tracking user engagement to analyzing campaign effectiveness and behavioral targeting, our service equips you with all the necessary tools to maximize ROI and optimize user experience. With our help, you will not only see where your business is going but also where it could go.`
})

socialMediaIconDivBox6.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Analytics and';
    headingSecond.innerText = 'Tracking';

    part2Text.innerText = `In the world of digital marketing, accurate and timely analytics are key to success. Our analytics and tracking service provides you with a deep understanding of your audience's behavior and preferences. We offer integrated analytical tools that collect, analyze, and interpret data about your users, enabling you to make informed decisions about marketing strategy and product development. From tracking user engagement to analyzing campaign effectiveness and behavioral targeting, our service equips you with all the necessary tools to maximize ROI and optimize user experience. With our help, you will not only see where your business is going but also where it could go.`
})

socialMediaImgBox6.addEventListener('click',() => {
    messages.classList.add('message-display');
    headingFirst.innerText = 'Analytics and';
    headingSecond.innerText = 'Tracking';

    part2Text.innerText = `In the world of digital marketing, accurate and timely analytics are key to success. Our analytics and tracking service provides you with a deep understanding of your audience's behavior and preferences. We offer integrated analytical tools that collect, analyze, and interpret data about your users, enabling you to make informed decisions about marketing strategy and product development. From tracking user engagement to analyzing campaign effectiveness and behavioral targeting, our service equips you with all the necessary tools to maximize ROI and optimize user experience. With our help, you will not only see where your business is going but also where it could go.`
})

//============================================================ End Box 6 ======================================================//

let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email');
let sendMsgBtn = document.querySelector('.sendMsgBtn');
let messageBox = document.querySelector('textarea');

sendMsgBtn.disabled = true;
sendMsgBtn.style.backgroundColor = "#555555";

emailInput.addEventListener('keyup', function(){
    if(!emailInput.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)){
        document.querySelector('.email-valid').innerText = 'Email is not valid' 
    }else{
        document.querySelector('.email-valid').innerText = ''
    }


    if(emailInput.value != '' && messageBox.value != ''){
        sendMsgBtn.disabled = false;
        sendMsgBtn.style.backgroundColor = "#000000"
    }else{
        sendMsgBtn.disabled = true;
        sendMsgBtn.style.backgroundColor = "#555555"
    }
})

messageBox.addEventListener('keyup', function(){{
    if(emailInput.value != '' && messageBox.value != ''){
        sendMsgBtn.disabled = false;
        sendMsgBtn.style.backgroundColor = "#000000"
    }else{
        sendMsgBtn.disabled = true;
        sendMsgBtn.style.backgroundColor = "#555555"
    }
}})

nameInput.addEventListener('click', ()=>{
    nameInput.style.outlineColor = "#B9FF66"
})

emailInput.addEventListener('click', ()=>{
    emailInput.style.outlineColor = "#B9FF66"
})

messageBox.addEventListener('click', ()=>{
    messageBox.style.outlineColor = "#B9FF66"
})

sendMsgBtn.addEventListener('click', ()=>{
    localStorage.setItem('Name', nameInput.value);
    localStorage.setItem('Email', emailInput.value);
    localStorage.setItem('Message', messageBox.value);

    nameInput.value = '';
    emailInput.value = '';
    messageBox.value = '';
})