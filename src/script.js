document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const predictBtn = document.getElementById('predict-btn');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result-text');

    const jobs = [
        "Pilot 911",
        "Penerjemah Bahasa Kucing",
        "Programmer Depresi",
        "Raja Meme",
        "Ahli Konspirasi",
        "Penguji Kasur Profesional",
        "Analis Data antar bintang",
        "Arkeolog Digital",
        "Petani ganja",
        "Spesialis Kloning Dinosaurus",
        "Desainer Planet",
        "Pengangguran"
    ];

    function predictFutureJob() {
        const name = nameInput.value.trim();
        if (!name) {
            alert("Harap masukkan nama Anda!");
            return;
        }

        resultDiv.classList.remove('hidden');
        resultText.innerHTML = "Menganalisis data takdir Anda...";

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * jobs.length);
            const futureJob = jobs[randomIndex];
            resultText.innerHTML = `> Halo, ${name}!<br>> Berdasarkan kalkulasi kosmik, pekerjaan masa depanmu adalah...<br>> <span style="color: #ffbd2e; font-size: 1.5rem;">${futureJob}</span>`;
        }, 2000); 
    }

    predictBtn.addEventListener('click', predictFutureJob);

    nameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            predictBtn.click();
        }
    });
});
