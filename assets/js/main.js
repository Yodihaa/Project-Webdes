// ================ MENU MOBILE ================
document.addEventListener('DOMContentLoaded', function() {
    // Toggle Menu Mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Animasi hamburger menu
        const bars = this.querySelectorAll('.bar');
        if (this.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Menutup menu saat link di klik
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            // Reset animasi hamburger
            const bars = mobileMenu.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    /* ================ SLIDER ================
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;
    
    // Fungsi untuk menampilkan slide tertentu
    function showSlide(index) {
        // Sembunyikan semua slide
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Hapus kelas aktif dari semua indikator
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Tampilkan slide yang dipilih
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }
    
    // Event listener untuk tombol prev dan next
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        resetSlideInterval();
    });
    
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetSlideInterval();
    });
    
    // Event listener untuk indikator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            resetSlideInterval();
        });
    });
    
    // Mulai interval slider otomatis
    function startSlideInterval() {
        slideInterval = setInterval(function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000); // Ganti slide setiap 5 detik
    }
    
    // Reset interval slider
    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }
    
    // Inisialisasi slider
    startSlideInterval();*/
    
    // ================ TOOLTIP TEKNOLOGI ================
    const techElements = document.querySelectorAll('.service-card h3, .article-title');
    const tooltip = document.getElementById('tech-tooltip');
    
    const tooltipContent = {
        'Edukasi': 'Program pelatihan langsung dan daring tentang penggunaan teknologi pertanian modern.',
        'Konsultasi': 'Analisis kebutuhan dan rekomendasi teknologi yang tepat untuk lahan Anda.',
        'Penerapan': 'Bantuan teknis dalam pemasangan dan konfigurasi teknologi pertanian.',
        'Evaluasi': 'Pengukuran hasil dan dampak penggunaan teknologi untuk perbaikan berkelanjutan.',
        'Apa itu Smart Farming?': 'Konsep pertanian yang mengintegrasikan teknologi informasi, sensor, dan otomatisasi.',
        'Manfaat Drone dalam Pertanian': 'Efisiensi pemantauan tanaman, pemetaan lahan, dan penyemprotan presisi.',
        'Sensor Tanah: Cara Kerja dan Fungsinya': 'Teknologi untuk mengukur kelembaban, nutrisi, dan pH tanah secara real-time.',
        'Teknologi Irigasi Otomatis yang Hemat Air': 'Sistem irigasi pintar yang mengoptimalkan penggunaan air berdasarkan kebutuhan tanaman.',
        'Penerapan IoT dalam Pertanian Skala Kecil': 'Solusi Internet of Things terjangkau untuk petani skala kecil.'
    };
    
    techElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const text = this.textContent;
            if (tooltipContent[text]) {
                tooltip.textContent = tooltipContent[text];
                tooltip.style.display = 'block';
                
                // Posisi tooltip
                const rect = this.getBoundingClientRect();
                tooltip.style.top = rect.bottom + window.scrollY + 10 + 'px';
                tooltip.style.left = rect.left + window.scrollX + 'px';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
    
    // ================ VALIDASI FORM KONTAK ================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi email
            const email = document.getElementById('email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email)) {
                alert('Mohon masukkan alamat email yang valid.');
                return;
            }
            
            // Simulasi submit form
            alert('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
            this.reset();
        });
    }
    
    // ================ MODAL FEEDBACK ================
    const feedbackBtn = document.getElementById('feedback-btn');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeModal = document.querySelector('.close-modal');
    const feedbackForm = document.getElementById('feedback-form');
    
    // Buka modal
    feedbackBtn.addEventListener('click', function() {
        feedbackModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Mencegah scroll pada halaman utama
    });
    
    // Tutup modal
    closeModal.addEventListener('click', function() {
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Mengaktifkan kembali scroll pada halaman utama
    });
    
    // Tutup modal jika klik di luar konten modal
    window.addEventListener('click', function(e) {
        if (e.target === feedbackModal) {
            feedbackModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Submit form feedback
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validasi email
        const email = document.getElementById('feedback-email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            alert('Mohon masukkan alamat email yang valid.');
            return;
        }
        
        // Simulasi submit form
        alert('Terima kasih atas masukan Anda!');
        this.reset();
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

     
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 500) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }  


        // ================ KALKULATOR EFISIENSI ================
    const calculator = document.getElementById('efficiency-calculator');
    const resultSection = document.getElementById('hasil-perhitungan');
    const resultContent = document.getElementById('result-content');
    
    calculator.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const luasLahan = parseFloat(document.getElementById('luas-lahan').value);
        const jenisTech = document.getElementById('jenis-teknologi').value;
        
        let efisiensiWaktu = 0;
        let efisiensiAir = 0;
        let efisiensiPanen = 0;
        let deskripsi = '';
        
        // Logika perhitungan (contoh sederhana)
        switch (jenisTech) {
            case 'drone':
                efisiensiWaktu = 70; // 70% lebih cepat
                efisiensiPanen = 15; // 15% peningkatan hasil
                deskripsi = 'Drone penyemprot dapat menjangkau area luas dengan cepat dan presisi tinggi.';
                break;
            case 'irigasi':
                efisiensiWaktu = 30; // 30% lebih cepat
                efisiensiAir = 60; // 60% penghematan air
                efisiensiPanen = 20; // 20% peningkatan hasil
                deskripsi = 'Sistem irigasi otomatis memberikan air tepat sesuai kebutuhan tanaman.';
                break;
            case 'sensor':
                efisiensiWaktu = 20; // 20% lebih cepat
                efisiensiAir = 30; // 30% penghematan air
                efisiensiPanen = 25; // 25% peningkatan hasil
                deskripsi = 'Sensor tanah memberi informasi real-time tentang kondisi tanah untuk pemupukan optimal.';
                break;
            case 'traktor':
                efisiensiWaktu = 75; // 75% lebih cepat
                efisiensiPanen = 10; // 10% peningkatan hasil
                deskripsi = 'Traktor GPS memberikan presisi tinggi dalam pengolahan tanah dan penanaman.';
                break;
        }
        
        // Perhitungan berdasarkan luas lahan
        const waktuKerja = Math.round(luasLahan * 8 * (1 - efisiensiWaktu/100)); // Asumsi: 8 jam kerja per hektar secara tradisional
        const hasilPanen = Math.round(luasLahan * 5 * (1 + efisiensiPanen/100)); // Asumsi: 5 ton per hektar secara tradisional
        
        // Menyiapkan hasil
        let hasilHTML = `
            <p><strong>Luas Lahan:</strong> ${luasLahan} hektar</p>
            <p><strong>Waktu Kerja:</strong> ${waktuKerja} jam (${efisiensiWaktu}% lebih efisien)</p>
        `;
        
        if (efisiensiAir > 0) {
            hasilHTML += `<p><strong>Penghematan Air:</strong> ${efisiensiAir}%</p>`;
        }
        
        hasilHTML += `
            <p><strong>Estimasi Hasil:</strong> ${hasilPanen} ton (${efisiensiPanen}% peningkatan)</p>
            <p><em>${deskripsi}</em></p>
        `;
        
        // Menampilkan hasil
        resultContent.innerHTML = hasilHTML;
        resultSection.style.display = 'block';
        
        // Scroll ke hasil
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
        });

        // ================ ANIMASI SCROLL ================
    // Fungsi untuk mengecek apakah elemen dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Elemen yang akan dianimasikan
    const animatedElements = document.querySelectorAll('.service-card, .article-card, .two-column, .hero-content, .section-title');
    
    // Fungsi untuk animasi scroll
    function checkScrollAnimation() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Mengatur opacity dan transform awal
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Event listener untuk scroll
    window.addEventListener('scroll', checkScrollAnimation);
    
    // Cek saat halaman dimuat
    checkScrollAnimation();
    
    // ================ SCROLL SMOOTH ================
    // Untuk semua tautan internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Cek jika targetId hanya "#" (tautan ke halaman utama)
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});