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

    console.log(error);

    console.log("STATUS:", error.status);

    console.log("TEXT:", error.text);

    console.log("FULL:", JSON.stringify(error));

    alert(error.text);

}

    btn.disabled = false;
    btn.innerHTML = "Send Message";

});