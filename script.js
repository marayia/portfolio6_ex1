document.addEventListener('DOMContentLoaded', () => {
    
    // Click Button Listener, gets input from the input field, stores value and updates the results area accordinhly
    document.getElementById('calculateBtn').addEventListener('click', function() {
        const inputField = document.getElementById('numInput');
        const n = parseInt(inputField.value);
        const resultArea = document.getElementById('resultArea');
        
        resultArea.innerHTML = ""; // Clear screen for no input

        // Validation for 4-digit limit
        if (isNaN(n) || n < 2) {
            resultArea.innerHTML = "<p class='text-danger'>Please enter a number between 2 and 9999.</p>";
            return;
        }

        if (n > 9999) {
            resultArea.innerHTML = "<p class='text-warning'>⚠️ Number too large! Please stay under 10,000.</p>";
            inputField.value = 9999; 
            return;
        }

        let output = "<b>Primes:</b><br>";
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                output += `<span class="prime-badge">${i}</span> `;
            }
        }
        resultArea.innerHTML = output;
    });

    // checks for prime
    function isPrime(num) {
        if (num < 2) return false;
        // Check for factors up to the square root
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false; 
        }
        return true;
    }
});