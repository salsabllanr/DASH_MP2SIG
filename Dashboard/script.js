const dataIbadah = [
    { nama: "Masjid Nurussalam Guntunglai", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Muminun Sempaja", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Asysyuhada Bukitpinang", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Nurul Hidayah Airputih", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al-Firdaus", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Al Wahhab Sidodamai", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Al Khairiyah Pasarpagi", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid Sofiatul Amin", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid Ar-Rosyidin", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Darulaman Lokbahu", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Al-Hidayah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Fattah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Jami Ashshabirin", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Shiratal Mustaqim", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Asysyuhada", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Baitut Thaharah", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Jami Al Makmur", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Jami Nurulhuda", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid An Nur Mugirejo", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Nurul Hidayah Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },

    { nama: "Kelenteng Samarinda Kota", jenis: "Kelenteng", kecamatan: "Samarinda Ilir" },

    { nama: "Budhist Center Samarinda", jenis: "Vihara", kecamatan: "Sungai Pinang" },

    { nama: "Gereja Pantekosta Di Indonesia Jemaat Makroman", jenis: "Gereja", kecamatan: "Sambutan" },
    { nama: "GSJA Makroman", jenis: "Gereja", kecamatan: "Sambutan" },
    { nama: "Gereja Katolik St. Petrus Stasi Girirejo", jenis: "Gereja", kecamatan: "Samarinda Utara" },
    { nama: "Gereja Kemah Injil Jemaat Pampang Sungaisiring", jenis: "Gereja", kecamatan: "Samarinda Utara" },
    { nama: "Gereja Kemah Injil Indonesia Sidodadi", jenis: "Gereja", kecamatan: "Samarinda Ulu" },
    { nama: "Gereja Jemaat Ebenhazer", jenis: "Gereja", kecamatan: "Samarinda Ilir" },
    { nama: "Gereja Pantekosta di Indonesia", jenis: "Gereja", kecamatan: "Samarinda Kota" },
    { nama: "Gereja Masehi Advent Hari Ketujuh Jemaat Samarinda", jenis: "Gereja", kecamatan: "Samarinda Kota" },
    { nama: "Gereja Persekutuan Injil Simpangpasir", jenis: "Gereja", kecamatan: "Palaran" },
    { nama: "Gereja Khatolik Stasi St. Stefanus Bukan", jenis: "Gereja", kecamatan: "Palaran" },
    { nama: "Gereja Katolik Paroki Hati Kudus Yesus Rapakdalam", jenis: "Gereja", kecamatan: "Loa Janan Ilir" },
    { nama: "Gereja Kemah Injil Indonesia Sungaipinang Dalam", jenis: "Gereja", kecamatan: "Sungai Pinang" },
    { nama: "Gereja Katolik Sungaipinang Dalam", jenis: "Gereja", kecamatan: "Sungai Pinang" }
  ];
  
  // Tombol unduh data CSV
document.getElementById("downloadData").addEventListener("click", () => {
    const headers = ["Nama", "Jenis", "Kecamatan"];
    const rows = dataIbadah.map(d => [d.nama, d.jenis, d.kecamatan]);

    let csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(",") + "\n"
        + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tempat_ibadah_samarinda.csv");
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
});

  // TABEL
  const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const filter = this.value.toLowerCase();
    const rows = tbody.getElementsByTagName("tr");

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName("td");
        let match = false;

        Array.from(cells).forEach(cell => {
            if(cell.textContent.toLowerCase().includes(filter)){
                match = true;
            }
        });

        row.style.display = match ? "" : "none";
    });
});

  const tbody = document.getElementById("tabelIbadah");
  dataIbadah.forEach((d, i) => {
    tbody.innerHTML += `
      <tr class="hover:bg-cyan-900/30 transition">
        <td class="py-2 px-3">${i + 1}</td>
        <td class="py-2 px-3">${d.nama}</td>
        <td class="py-2 px-3 text-cyan-400">${d.jenis}</td>
        <td class="py-2 px-3">${d.kecamatan}</td>
      </tr>
    `;
  });
  
  // CHART
  const counts = {
    "Masjid": Number(document.getElementById("statMasjid").textContent),
    "Gereja": Number(document.getElementById("statGereja").textContent),
    "Kelenteng": Number(document.getElementById("statKelenteng").textContent),
    "Pura": Number(document.getElementById("statPura").textContent)
};

new Chart(document.getElementById("chartJenis"), {
    type: "doughnut",
    data: {
        labels: Object.keys(counts),
        datasets: [{
            data: Object.values(counts),
            backgroundColor: ["#06b6d4", "#3b82f6", "#9333ea", "#f97316"],
            borderColor: "#0f172a",
            borderWidth: 3
        }]
    },
    options: {
        plugins: {
            legend: {
                position: "bottom",
                labels: { color: "#e2e8f0" }
            }
        },
        cutout: "65%"
    }
});
