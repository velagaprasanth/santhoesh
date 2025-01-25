document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('subscribeForm1').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      const emailInput = document.getElementById('emailInput1').value;
  
      if (emailInput.endsWith('@gmail.com')) {
        // Open the YouTube channel subscription link
        window.open('https://www.youtube.com/@chanakyahighschool', '_blank');
        alert('You are being redirected to the YouTube channel. Please subscribe there!');
      } else {
        alert('Only Gmail addresses are allowed.');
      }

    });
  });


  // JavaScript to handle the click
  document.getElementById('whatsappImage').addEventListener('click', function () {
    const phoneNumber = '9014809057'; // Replace with your phone number
    const message = 'Hello, I want to chat with you!'; // Optional pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
});
  