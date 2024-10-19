var submitted = false;
var inputField;
var submitButton;

window.onload = function() {

    inputField = document.getElementById('inputField');
    submitButton = document.getElementById('submitButton');

    // Store the original placeholder text
    const originalPlaceholder = inputField.placeholder;

    // Remove placeholder on focus
    inputField.addEventListener('focus', () => {
        inputField.placeholder = '';
    });

    // Restore placeholder on blur
    inputField.addEventListener('blur', () => {
        inputField.placeholder = originalPlaceholder;
    });

    inputField.addEventListener('input',  () => checkDigit());

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Delete') {
            clearInput();
        } else if (event.key === 'Enter' && checkDigit() === true) {
            document.getElementById('myForm').submit();
            submitForm();
        }
    });
};

function addInput(value) {
    inputField.value += value;
    checkDigit();
}

function clearInput() {
    inputField.value = '';
}

function checkDigit() {
    
        // Check if the value is exactly 8 digits long
        if (/^\d{8}$/.test(inputField.value)) {
            submitButton.disabled = false; // Enable the submit button
            return true;
        } else {
            submitButton.disabled = true; // Disable the submit button
            return false;
        }
}

function submitForm() {
    submitted = true;
}

function showConfirmPage() {
    if(submitted) {
        window.location.href = "submission.html";
    }
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
