document.addEventListener("DOMContentLoaded", () => {
    // Tombol "Kembali ke Atas"
    const backToTop = document.createElement("button");
    backToTop.className = "back-to-top";
    
    // Menambahkan ikon Font Awesome ke dalam tombol
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i> Kembali Ke Halaman Pertama';
    document.body.appendChild(backToTop);

    // Tambahkan styling via CSS class
    const css = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #1abc9c;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            cursor: pointer;
            display: none;
            z-index: 9999;
            font-size: 14px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            text-align: center;
        }
        .back-to-top i {
            margin-right: 8px;
        }
        .back-to-top.show {
            display: block;
        }
        @media (max-width: 600px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                padding: 10px 14px;
                font-size: 12px;
            }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = css;
    document.head.appendChild(styleSheet);

    // Tampilkan tombol saat scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    // Scroll ke atas dengan halus
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Smooth scroll untuk semua anchor link yang menuju ID
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
