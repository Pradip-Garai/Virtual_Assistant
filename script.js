const button=document.getElementById('btn');
let content=document.getElementById('contant');
let voice=document.getElementById('voice');

window.addEventListener('load',()=>{
    wiseMe();
})

function speak(text){
   let text_speak=new SpeechSynthesisUtterance(text);
   text_speak.rate=1;
   text_speak.speak=1;
   text_speak.volume=1;
   text_speak.lang="hi-IN";    // female language with bengali
   window.speechSynthesis.speak(text_speak);
}

function wiseMe(){
   let day=new Date();
   let hours=day.getHours();
   if(hours>=0 && hours<12){
    speak("Good Morning Sir")
   }
   else if(hours>=12 && hours<16){
    speak("Good Afternoon Sir")
   }
   else{
     speak("Good Evening Sir")
   }
}


let speechrecognition=window.speechRecognition || window.webkitSpeechRecognition

let recog =new speechrecognition();
recog.onresult=(event)=>{
    let currentIndex=event.resultIndex;
   let Transcript= event.results[currentIndex][0].transcript;
   content.innerText=Transcript;
    takeCommond(Transcript.toLowerCase());
}

button.addEventListener('click',()=>{
    recog.start();
    button.style.display="none";
    voice.style.display="block";
})

function takeCommond(message){
    button.style.display="flex";
      voice.style.display="none";
    if(message.includes("hello") || message.includes("hi") || message.includes("hay")){
        speak("Hello Sir , What Can I help You ?");
    }
    else if(message.includes("who are you") || message.includes("tell me about yourself")){
            speak("I am ZARA ,  ,your Virtual Assistant, created by Pradip Sir");
    }
    else if(message.includes("how are you")){
        speak("I am fine , What about you");
    }

    else if (message.includes("tell me about your developer") || message.includes("who is your developer") || message.includes("who created you")) {
        speak("I was created by PRADIP Garai, a passionate developer from Kolkata, India, currently pursuing a BCA at the Institute of Engineering and Management, dedicated to building smart and innovative solutions.");
    
        // const imgurl = "./img/pradip.jpg"; // Ensure the image path is correct
    
        // // Create an image element
        // let img = document.createElement("img");
        // img.src = imgurl;
        // img.alt = "PRADIP Garai";
        // img.style.width = "150px"; // Smaller size
        // img.style.borderRadius = "10px"; // Rounded corners
        // img.style.display = "block";
        // img.style.margin = "10px auto";
    
        // // Create a pop-up div
        // let popup = document.createElement("div");
        // popup.style.position = "fixed";
        // popup.style.top = "10px";  // Moves the image to the top
        // popup.style.left = "50%";
        // popup.style.transform = "translateX(-50%)";
        // popup.style.background = "white";
        // popup.style.padding = "10px";
        // popup.style.borderRadius = "10px";
        // popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.3)";
        // popup.style.textAlign = "center";
        // popup.style.zIndex = "1000"; // Ensures it stays on top
    
        // // Create a close button
        // let closeBtn = document.createElement("button");
        // closeBtn.innerText = "Close";
        // closeBtn.style.marginTop = "5px";
        // closeBtn.style.padding = "3px 7px";
        // closeBtn.style.background = "red";
        // closeBtn.style.color = "white";
        // closeBtn.style.border = "none";
        // closeBtn.style.cursor = "pointer";
        // closeBtn.style.fontSize = "12px";
        // closeBtn.onclick = () => popup.remove();
    
        // // Append elements
        // popup.appendChild(img);
        // popup.appendChild(closeBtn);
        // document.body.appendChild(popup);
    }
    else if(message.includes("open youtube") || message.includes("zara open youtube")){
        window.open("https://www.youtube.com/","_blank");
        speak("Opening Youtube...");
    }
    else if(message.includes("open LinkedIn") || message.includes("zara open linkedin")){
        window.open("https://www.linkedin.com/in/pradip-garai-1190232a7/","_blank");
        speak("Opening Linkedin...");
    }
    else if(message.includes("open google") || message.includes("zara open google")){
        window.open("https://www.google.com/","_blank");
        speak("Opening Google...");
    }
    else if(message.includes("open facebook") || message.includes("zara open facebook")){
        window.open("https://www.facebook.com/","_blank");
        speak("Opening facebook...");
    }
    else if(message.includes("open instagram") || message.includes("zara open instagram")){
        window.open("https://www.instagram.com/","_blank");
        speak("Opening instagram...");
    }
    else if(message.includes("what is javascript")){
        window.open("https://in.search.yahoo.com/search?fr=mcafee&type=E210IN714G0&p=javascript");
        speak("This i found at internet about javascript. JavaScript is a programming language used to create dynamic content for websites. It is a lightweight, cross-platform, and single-threaded programming language. JavaScript is an interpreted language that executes code line by line providing more flexibility.");
    }
    else if(message.includes("what is man stack")){
        window.open("https://www.geeksforgeeks.org/mern-stack/");
        speak("This i found at internet about  MERN Stack . It is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and NodeJS. It is designed to make the development process smoother and easier.");
    }
    else if(message.includes("are you able to speak bengali")){
        speak("Haa ami bangla bolte pari, kemon achen ??")
    }
    else if(message.includes("good morning") || message.includes("good afternoon") || message.includes("good evening")){
        wiseMe();
    }
}
