const form = document.getElementById("contact-form");
const btn = document.getElementById("sendBtn");

emailjs.init("CxiI7JmCyun9Y-eTq");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = "Sending...";

    try {

        const result = await emailjs.sendForm(
            "service_73mibg7",
            "template_hmjtm3m",
            form
        );

        console.log(result);

        alert("✅ Message Sent Successfully!");

        form.reset();

    } catch (error) {

    console.error(error);

    alert(`
Status : ${error.status}
Message : ${error.text}
`);

}
    btn.disabled = false;
    btn.innerHTML = "Send Message";

});