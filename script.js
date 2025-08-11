const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name && email && message) {
      alert("Thank you, " + name + "! We'll get back to you soon.");
      form.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}

 