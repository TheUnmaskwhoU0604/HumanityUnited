// Simple form validation
document.querySelector("button").addEventListener("click", () => {
  const name = document.querySelector("input[type='text']").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before sending.");
  } else {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    window.location.href = "thankyou.html";
  }
});
