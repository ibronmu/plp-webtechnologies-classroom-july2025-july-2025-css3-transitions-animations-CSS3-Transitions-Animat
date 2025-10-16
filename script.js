     // Part 2: JavaScript Functions
        
        // Global variable to demonstrate scope
        let globalCounter = 0;
        
        // Function with parameters and return value
        function addNumbers(a, b) {
            // Local variables - these only exist inside this function
            const sum = a + b;
            globalCounter++; // Modifying global variable
            return sum;
        }
        
        // Another function with parameters and return value
        function multiplyNumbers(a, b) {
            return a * b;
        }
        
        // Function that compares two numbers
        function findLargerNumber(a, b) {
            if (a > b) {
                return a;
            } else if (b > a) {
                return b;
            } else {
                return "They are equal";
            }
        }
        
        // Functions to demonstrate the above
        function calculateSum() {
            const num1 = parseInt(document.getElementById('num1').value);
            const num2 = parseInt(document.getElementById('num2').value);
            const result = addNumbers(num1, num2);
            document.getElementById('result').innerHTML = 
                `The sum of ${num1} and ${num2} is <strong>${result}</strong>. 
                 <br>Global counter: ${globalCounter}`;
        }
        
        function calculateProduct() {
            const num1 = parseInt(document.getElementById('num1').value);
            const num2 = parseInt(document.getElementById('num2').value);
            const result = multiplyNumbers(num1, num2);
            document.getElementById('result').innerHTML = 
                `The product of ${num1} and ${num2} is <strong>${result}</strong>.`;
        }
        
        function findLarger() {
            const num1 = parseInt(document.getElementById('num1').value);
            const num2 = parseInt(document.getElementById('num2').value);
            const result = findLargerNumber(num1, num2);
            document.getElementById('result').innerHTML = 
                `The larger number between ${num1} and ${num2} is <strong>${result}</strong>.`;
        }
        
        // Part 3: Combined CSS & JavaScript
        
        // Function to flip cards
        function flipCard(card) {
            card.classList.toggle('flipped');
        }
        
        // Modal functions
        function openModal() {
            document.getElementById('modalOverlay').classList.add('active');
        }
        
        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('active');
        }
        
        // Close modal when clicking outside
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Add some interactive effects to CSS animation boxes
        document.querySelectorAll('.demo-box').forEach(box => {
            box.addEventListener('click', function() {
                this.style.animationPlayState = 
                    this.style.animationPlayState === 'paused' ? 'running' : 'paused';
            });
        });