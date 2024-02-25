document.addEventListener('DOMContentLoaded', function() {
    var welcomePage = document.getElementById('welcome');
    var homePage = document.getElementById('home');
    var readingPage = document.getElementById('reading');
    var settingsPage = document.getElementById('settings');

    function showPage(pageId) {
        welcomePage.style.display = 'none';
        homePage.style.display = 'none';
        readingPage.style.display = 'none';
        settingsPage.style.display = 'none';

        document.getElementById(pageId).style.display = 'block';
    }

    // Show sign-in page by default
    showPage('welcome');

    // Example: navigate to home page on sign-in success
    // Replace this with your actual sign-in logic
    document.getElementById('signin-btn').addEventListener('click', function() {
        showPage('home');
    });

    document.getElementById('home-btn').addEventListener('click', function() {
        showPage('home');
    });

    document.getElementById('settings-btn').addEventListener('click', function() {
        showPage('settings');
    });

    document.getElementById('welcome-btn').addEventListener('click', function() {
        showPage('welcome');
    });





    var colorButtons = document.querySelectorAll('.colorButton');

    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle the 'clicked' class when a button is clicked
            if (button.textContent === 'Add to Reading List') {
                button.textContent = 'Added to List';
            } else {
                button.textContent = 'Add to Reading List';
            }
            button.classList.toggle('clicked');
        });
    });
});
