document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
        const color1 = button.getAttribute('data-color1');
        const color2 = button.getAttribute('data-color2');

        const topCircle = document.querySelector('.top-circle');
        const bottomCircle = document.querySelector('.bottom-circle');
        const infoSection = document.querySelector('.info-section');
        const body = document.querySelector('body');

        // เพิ่มคลาสเพื่อเรียกแอนิเมชันค่อย ๆ ขึ้น
        topCircle.classList.remove('color-slide');
        bottomCircle.classList.remove('color-slide');
        void topCircle.offsetWidth; // รีเซ็ตแอนิเมชัน
        void bottomCircle.offsetWidth; // รีเซ็ตแอนิเมชัน
        topCircle.classList.add('color-slide');
        bottomCircle.classList.add('color-slide');

        // เปลี่ยนสี
        topCircle.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
        bottomCircle.style.background = `radial-gradient(circle, ${color2}, ${color1})`;

        // เปลี่ยนสีพื้นหลังของ info-section
        infoSection.style.background = `rgba(${parseInt(color1.slice(1, 3), 16)}, ${parseInt(color1.slice(3, 5), 16)}, ${parseInt(color1.slice(5, 7), 16)}, 0.1)`;

        // เปลี่ยนสีพื้นหลังของ body
        body.style.backgroundColor = `rgba(${parseInt(color1.slice(1, 3), 16)}, ${parseInt(color1.slice(3, 5), 16)}, ${parseInt(color1.slice(5, 7), 16)}, 0.2)`;
    });
});