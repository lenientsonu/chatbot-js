var audio = new Audio("assets/sentmessage.mp3");
var contactString =
  "<div class='social'> <a target='_blank' href='tel:+917497848201'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:lenientsonu@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/lenientsonu/'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917497848201'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString =
  "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Sonu CV.pdf</label></div><a href='assets/Sonu.pdf' download='Sonu.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString =
  "<div class='mapview'><<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d223375.4763240585!2d77.0024552!3d28.98020450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709700260325!5m2!1sen!2sin' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>SpareRows Technology Pvt. Ltd.<br>Vikas Nagar<br>Sonipat, Haryana, INDIA 131001</address>";

function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  var name = "";
  if (inputText.toLowerCase().includes("my name is")) {
    name = inputText.substring(inputText.indexOf("is") + 2);
    if (name.toLowerCase().includes("sonu")) {
      sendTextMessage("Ohh! That's my name too");
    }
    inputText = "input";
  }
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Sonu Kumar</a>.</span><br><br>✅ Co-founded  <span class='bold'>SpareRows Technology Pvt Ltd</span><br>✅ Authored an e-book - Code Guardian: A Practical Guide to Secure Code Review and Penetration Testing<br><br>📈 Developed Debt Recovery WebApp along with multiple business websites to streamline and automate the work of a debt recovery agency. Made the Digital presence and brand image to grow the bussiness.<br>🛡️ As a Cybersecurity analyst performed multiple VAPTs, Secure Code Reviews, API, and cloud security tests. also created SOPs of the above for the security team to follow.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>"
        );
      }, 2000);
      break;

    case "help":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>CyberSecurity(VAPT and Cyber Crime Responder)<br><br>I can comfortably write code in following languages :<br><span class='bold'>HTML<br>CSS<br>JavaScript<br>Python</span><br><br>I am well versed with following frameworks :<span class='bold'><br>ReactJs<br>ExpressJs<br>NextJs</span><br>"
      );
      break;

    case "education":
      sendTextMessage(
        "I have completed my BCA from IEC University.<br>Passing Year : 2021"
      );
      break;

    case "clear":
      clearChat();
      break;
    // case "about":

    //     break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/lenientsonu/'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    case "time":
      var date = new Date();
      sendTextMessage(
        "Current time is " + date.getHours() + ":" + date.getMinutes()
      );
      break;

    case "date":
      var date = new Date();
      sendTextMessage(
        "Current date is " +
          date.getDate() +
          "/" +
          date.getMonth() +
          "/" +
          date.getFullYear()
      );
      break;

    case "hai":
      sendTextMessage("Hello there 👋🏻");
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>"
      );
      break;
    case "hello":
      sendTextMessage("Hello there 👋🏻");
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>"
      );
      break;

    case "hi":
      sendTextMessage("Hello there 👋🏻");
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>"
      );
      break;

    case "hey":
      sendTextMessage("Hello there 👋🏻");
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>"
      );
      break;

    case "sonu":
      sendTextMessage("Yes, that's me");
      break;
    case "sonu k":
      sendTextMessage("Yes, that's me");
      break;
    case "sonu kumar":
      sendTextMessage("Yes, that's me");
      break;

    case "website":
      sendTextMessage(
        "You can check my website here <a target='_blank' href='https://lenientsonu.me/'>lenientsonu</a>"
      );
      break;
    case "blog":
      sendTextMessage(
        "You can check my blog here <a target='_blank' href='https://www.linkedin.com/in/sonu-webguardian/'>Sonu Kumar</a>"
      );
      break;

    case "github":
      sendTextMessage(
        "You can check my github here <a target='_blank' href='https://github.com/lenientsonu'>lenientsonu</a>"
      );
      break;
    case "linkedin":
      sendTextMessage(
        "You can check my linkedin here <a target='_blank' href='https://www.linkedin.com/in/sonu-webguardian/'>Sonu Kumar</a>"
      );
      break;
    case "friends":
    case "friend":
      sendTextMessage("I am always ready to make new friends");
      break;
    case "input":
      setTimeout(() => {
        // sendTextMessage("What a coincidence!");
        sendTextMessage("Hello " + name + "! How are you?");
      }, 2000);

      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey I couldn't catch you...😢<br>Send 'help' to know more about usage."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
