document.addEventListener('DOMContentLoaded', () => {
    const overlays = document.querySelectorAll('.overlay');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const overlayId = button.getAttribute('data-overlay');
            const details = button.getAttribute('data-details');
            const overlay = document.getElementById(overlayId);
            const detailsText = overlay.querySelector('.details-text');

            detailsText.textContent = details;
            overlay.style.display = 'flex';
        });
    });

    overlays.forEach(overlay => {
        const closeBtn = overlay.querySelector('.close-btn');
        
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == overlay) {
                overlay.style.display = 'none';
            }
        });
    });
});
