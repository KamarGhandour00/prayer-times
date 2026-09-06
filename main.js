const API_URL = "https://api.aladhan.com/v1";
      const fetchApi = async () => {
      const date = document.getElementById("date").value;
      const city = document.getElementById("city").value;
      const country = document.getElementById("country").value;
      const routeByCity = `/timingsByCity/${date}?city=${city}&country=${country}`;


        if (!date || !city || !country)return;
        try {
          const res = await fetch(`${API_URL}/timingsByCity/${date}?city=${city}&country=${country}`);
          const data = await res.json();
          
          const timings = data.data.timings;
          const main = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
          let html = `<div class="header"> ${city} - ${date} </div>`;
          html += `<div class="grid">`;
          for (let key of main) {
            if (timings[key]) {
              html += 
              `<div class="card">
                <div class="name">${key}</div>
                <div class="time">${timings[key]}</div>
              </div>`;
            }
          }
          html += `</div>`;
          document.getElementById("result").innerHTML = html;
        } catch (e) {
          console.log(e);
        }
      };
      // fetchApi(); // Fetch default timings on page load
      // const API_URL = "https://api.aladhan.com/v1/nextPrayerByAddress";
      const fetchNextPrayers = async () => {
        const date = document.getElementById("date").value;
        const city = document.getElementById("city").value;
        const country = document.getElementById("country").value;
        const routeByAddress = `/nextPrayerByAddress/${date}?address=${city},${country}`;

        if (!date || !city || !country)return; 
        try {
          const res = await fetch(`${API_URL}/nextPrayerByAddress/${date}?address=${city},${country}`);
          const data = await res.json();
          console.log(data.data);
          const nextPrayers = data.data.timings;
          const main2 = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
          let html = `<div class="header"> Next Prayers for ${city} - ${date} </div>`;
          html += `<div class="grid">`;
            for (let key of main2) {
              if (nextPrayers[key]) {
                html += 
                `<div class="card">
                  <div class="name">${key}</div>
                  <div class="time">${nextPrayers[key]}</div>
                </div>`;
              }
            }
          html += `</div>`;
          document.getElementById("next-prayers").innerHTML = html;
        } catch (e) {
          console.log(e);
        }
      };  
      // fetchNextPrayers(); // Fetch default next prayers on page load