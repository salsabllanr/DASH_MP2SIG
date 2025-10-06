const dataIbadah = [
    { nama: "Masjid Nurussalam Guntunglai", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Muminun Sempaja", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Nurul Iman Sungaisiring", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Baiturrahman Sungaisiring", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Nurul Iman Pampangmuara", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Sabnalmuhtadin Sungaisiring", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Darul Muslimin Sungaisiring", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Nurul Hidayah Tanahmerah", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Darul Falah Tanahmerah", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Darul Agung Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Mujahidin Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Mubarokah Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Baitul Magfirah Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Hikmah Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Baitul Muslim Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Muminun Sempaja", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid At Taqwa Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Sabilal Mutadin Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Nurusalam Lempake", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Kubra Sempaja Utara", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Darul Hannan Samarinda", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Nurul Falah Sempaja Selatan", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Falah Komplek Perumahan Sempaja Lestari Indah Samarinda", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Assalam Sempaja Selatan", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Iman Sempaja Selatan", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid An Nur Perum Pondok Surya Indah Sempaja Selatan", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Ash Shobirin Sempaja Timur", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Darul Muhajirin", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Alhamid Sempaja Selatan", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Muhajirin Sempaja Barat", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Araaf Samarinda", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Al Kautsar Sempaja", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    { nama: "Masjid Nurul Bashirah Temindungpermai", jenis: "Masjid", kecamatan: "Samarinda Utara" },
    

    { nama: "Masjid Asysyuhada Bukitpinang", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Nurul Hidayah Airputih", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Tabikhul Khairat Gunungkelua", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al Muhajirin Airhitam", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al Falah Samarinda", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al Ikhlas Samarinda", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Babussalam Pelayaran Samarinda", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al Hijrah Sidodadi", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Asysyifaau Linnaas Samarinda", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al Khair Samarinda", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Nahdlatun Nur Dadimulya", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Jami Al Maauun Jawa", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Jami Ar Raudhah Teluklegong Ilir", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Al Fatihah Gunungkelua", jenis: "Masjid", kecamatan: "Samarinda Ulu" },
    { nama: "Masjid Darul Hannan Samarinda", jenis: "Masjid", kecamatan: "Samarinda Ulu" },

    { nama: "Masjid Al-Firdaus", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Al Wahhab Sidodamai", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Al-Ikhlas", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Asy Syifa Sungaidama", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Muizzul Islam Sidodamai", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Nurul Ilmi Sidomulyo", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Al Ihsan Sidomulyo", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Subulussalam Sidomulyo", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Subulussalam", jenis: "Masjid", kecamatan: "Samarinda Ilir" },
    { nama: "Masjid Baiturrahim Pelita", jenis: "Masjid", kecamatan: "Samarinda Ilir" },

    { nama: "Masjid Al Khairiyah Pasarpagi", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid Sofiatul Amin", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid Raya Darusallam", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid Al Fadielah Karangmumus", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid An Najahurrahman Karangmumus", jenis: "Masjid", kecamatan: "Samarinda Kota" },
    { nama: "Masjid Maninjau Asalam Seipinang Luar", jenis: "Masjid", kecamatan: "Samarinda Kota" },

    { nama: "Masjid Ar-Rosyidin", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Darulaman Lokbahu", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Baitul Muttaqien - Islamic Center Samarinda", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "MIslamic Centre Kaltim", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Adz Dzikra Samarinda", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Jami Al Musthofa Samarinda", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Hidayatul Muqorrobin Lokbahu", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Al Aqabah Lokbahu", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Al Fajar Lokbahu", jenis: "Masjid", kecamatan: "Sungai Kunjang" },
    { nama: "Masjid Baitul Musarofah", jenis: "Masjid", kecamatan: "Sungai Kunjang" },

    { nama: "Masjid Al-Hidayah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Fattah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Mukarammah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Barkah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Mumin", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Mushola Jamiatul", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Misbah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Jami Baabul Jannah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Muzammil", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Falah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Jamiatul Amal", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Baiturrahman", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid As-Sudiq", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Iman", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Mushola Nurul Islam", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid An-Nur", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Miftahul Jannah", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Mushola Darussalam Sambutan", jenis: "Masjid", kecamatan: "Sambutan" },
    { nama: "Masjid Al-Kasyaf", jenis: "Masjid", kecamatan: "Sambutan" },

    { nama: "Masjid Jami Ashshabirin", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Shiratal Mustaqim", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Politeknik Negeri Samarinda", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Baitulmutaqin", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Langgar Al-Washielah", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Baiturnur Mangkupalas", jenis: "Masjid", kecamatan: "Samarinda Seberang" },
    { nama: "Masjid Al-Badar", jenis: "Masjid", kecamatan: "Samarinda Seberang" },

    { nama: "Masjid Asysyuhada", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Baitut Thaharah", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Al-Huda", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Al-Hidayah", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Al-Muttaqin", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Baiturrrahim", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Baiturrahman", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Langgar Al-Aman Taniaman", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Masjid Darul Aman", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },
    { nama: "Langgar Al-Mujahidin", jenis: "Masjid", kecamatan: "Loa Janan Ilir" },

    { nama: "Masjid Jami Al Makmur", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Jami Nurulhuda", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Baiturrahman", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Jami At Taibah", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Langgar Al-Mubarak", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Shirotunaja Bukan", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Sabiililmuttaqin Bukan", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Al-Musafir", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Jami Jami'atul Muttaqin", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Al-Falah", jenis: "Masjid", kecamatan: "Palaran" },
    { nama: "Masjid Baiturohman Rawamakmur", jenis: "Masjid", kecamatan: "Palaran" },

    { nama: "Masjid An Nur Mugirejo", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Nurul Hidayah Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Riadhul Muttaqin Gununglingai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Darul Hannan Gununglinga", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Darul Ilmi Gununglingai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Syahidul Ashfiya Gununglingai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Baburahman Temindungpermai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Jami Babul Hafazhah Samarinda Utara", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Al Ikhlas Perum Sejahtera Permai Gununglingai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Jami At Taubah Gununglinggai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Baiturrahman Temindungpermai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Nurul Bashirah Temindungpermai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Besar Al Muhajirin Temindungpermai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Al Muhaimin Perum Temendung Indah Mugirejo", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Ar Rahmat Sungaipinang Dalam", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Nurul Huda Sungaipinang Dalam", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Al Mutaqin Sungaipinang Dalam", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid As Sunnah Komplek BPD", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Agung Pelita Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Al Khair Sungaipinang", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Baabul Jannah Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Ibaadurrahman Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Masjid Jami An Nuur Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Dato Muhammad Al Jufri Bandara", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masijd Besar Al Muhajirin Temindungpermai", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Nurul Hidayah Samarinda", jenis: "Masjid", kecamatan: "Sungai Pinang" },
    { nama: "Masjid Riadhul Muttaqin Gununglingai", jenis: "Masjid", kecamatan: "Sungai Pinang" },

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
    { nama: "Gereja Katolik St Lukas Samarinda", jenis: "Gereja", kecamatan: "Sungai Pinang" },
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
