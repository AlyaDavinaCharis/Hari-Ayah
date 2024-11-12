// Efek Animasi untuk Halaman
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header h1');
    header.style.animation = 'fadeIn 2s ease-in-out';
});

// Interaksi Chatbot
document.getElementById('send-message').addEventListener('click', function() {
    const userMessage = document.getElementById('user-message').value;
    const responseElement = document.getElementById('response');
    
    if (userMessage.trim() === '') {
        responseElement.innerHTML = '<p>Mohon masukkan pesan terlebih dahulu.</p>';
    } else {
        responseElement.innerHTML = `
            <p><strong>Pesanmu untuk Ayah:</strong> ${userMessage}</p>
            <p><strong>Chatbot:</strong> Terima kasih telah berbagi cerita dengan kami! Pesanmu akan disampaikan.</p>
        `;
        document.getElementById('user-message').value = ''; // Reset input
    }
});

// Animasi Fade In
document.styleSheets[0].insertRule('@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }', 0);
