const form=document.getElementById("contact-form");

form.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_73mibg7",

"template_hmjtm3m",

this

).then(()=>{

alert("✅ Message Sent Successfully!");

form.reset();

}).catch((error)=>{

alert("❌ Failed to Send!");

console.log(error);

});

});