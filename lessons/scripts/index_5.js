document.addEventListener("DOMContentLoaded", function() {
    const numbers = document.querySelectorAll('.number');
    const btns = document.querySelectorAll('.btn');
    const resultDiv = document.querySelector('.result');
    const refreshBtn = document.querySelector('.refresh-btn');

    
    function calculateSum() {
        let sum = 0;
        numbers.forEach(number => {
            sum += parseInt(number.textContent);
        });
        return sum;
    }

 
    function resetGame() {
        numbers.forEach(number => {
            
            number.textContent = Math.floor(Math.random() * 100);
        });
        
        const currentSum = calculateSum();
        
        const correctIndex = Math.floor(Math.random() * btns.length);
        
        btns[correctIndex].textContent = currentSum;
        
        for (let i = 0; i < btns.length; i++) {
            if (i !== correctIndex) {
                btns[i].textContent = Math.floor(Math.random() * 200);
            }
        }
        
        resultDiv.textContent = '';
    }

 
    refreshBtn.addEventListener('click', resetGame);


    resetGame();


    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const clickedSum = parseInt(btn.textContent); 
            const currentSum = calculateSum(); 
            if (clickedSum === currentSum) {
                resultDiv.textContent = "BRAVO !";
                setTimeout(resetGame, 1500); 
            } else {
                resultDiv.textContent = "PERDU !";
                setTimeout(resetGame, 1500); 
            }
        });
    });
});
