document.getElementById('confirm-btn').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
        if(phone && email)
    {
    const confirmMessage = `Is this your phone number: ${phone} and email: ${email}?`;
    const confirmed = confirm(confirmMessage);

    if (confirmed) {
        // Show file upload option and submit button
        document.getElementById('file-upload-container').classList.remove('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
        document.getElementById('confirm-btn').classList.add('hidden'); // Hide the confirm button
        document.getElementsByClassName('red-prompt')[0].style.visibility="visible"; // Hide the confirm button
    }
}
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show the red prompt after submission
    document.querySelector('.red-prompt').classList.remove('hidden');
    window.location.href = '../parallax_effect/parallax1.html';
});
