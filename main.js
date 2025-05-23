'use strict';
const submitBtn = document.querySelector('#submit-btn');
const textMsg = document.querySelector('.text-msg');
const header = document.querySelector('.header');
const downloadBtn = document.querySelector('#download-image');
downloadBtn.style.display = 'none'

submitBtn.addEventListener('click', () => {
    checkName();
});

function checkName() {
    const inputName = document.querySelector('#input-name');
    if (inputName.value.trim().length <= 0) {
        inputName.placeholder = 'Name is required';
    }
    else if (inputName.value.trim().length >= 15) {
        inputName.value = '';
        inputName.placeholder = 'Name is too long';
    }
    else {
        header.textContent =  "Hello " + inputName.value + "!";
        submitBtn.disabled = true;
        greet(inputName.value);
    }
}   

function typeWriter(msg, speed) {  
    return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < msg.length) {
                textMsg.innerHTML += msg[i];
                i++;
            } else {
                clearInterval(interval);
                resolve(); // Resolve the promise when done
            }
        }, speed * 5);
    });
}
function greet(name) {
    let message = [
        `Hey, congratulations graduated na! Good luck in college life. 
        I'm very grateful dahil kahit papaano naging kaibigan ko kayo nina claire, 
        that's one of the best things that's happened to my life. 
        Thanks also for lending me your comelec pendant haha, I feel like ang dami kong ambag. 
        Pasensya na at nawala ko yung pakaw hehe. 
        I hope you'll accept this small gift from me pakonswelo narin!`,
    
        `There's something I've wanted to tell you for a long time, 
        but I just got the courage to say it now. Thanks for being my inspiration to study well. 
        You're my idol sa lahat cuz you're kyut, smart, hardworking, and of course, with your leadership skills. 
        So, pwede ako pautang mga 5k? Gipit na kasi ako e HAHAHAHA, just kidding! Please keep an eye on Claire, she might bite anytime. Salamatsuuu!`,

        `- Mark`
    ];

    const greetMsg = `Hello, ${name}!`;
    typeWriter(greetMsg, 10).then(() => {
        setTimeout(() => {
            textMsg.innerHTML += `<br><br>`
            typeWriter(message[0], 10).then(setTimeout(() => {
                textMsg.innerHTML += `<br><br>`;
                typeWriter(message[1], 10);
            }, 23500)).then(setTimeout(() => {
                textMsg.innerHTML += `<br><br>`;
                typeWriter(message[2], 5);
            }, 45000)).then(setTimeout(() => {
                downloadBtn.style.display = 'block';
            }, 45000));
        }, 200); // Delay for the greetings
    });
}
