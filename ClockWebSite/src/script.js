document.addEventListener("DOMContentLoaded", function() {
    const darkToggle = document.getElementById('darkMode');
    const secArm = document.getElementById('secarm');
    const minArm = document.getElementById('minarm');
    const hArm = document.getElementById('harm');
    const currDate = new Date();
    let secDeg = Number(90+currDate.getSeconds()*6);
    let minDeg= Number(90+currDate.getMinutes()*6);
    let hDeg = Number(90+currDate.getHours()*6);
    let isDark = Boolean(true);
    function themeSwitch(){
        const html = document.getElementsByTagName('html')[0];
        const css = document.styleSheets[0];
        console.log(html);
        if(isDark){
            html.setAttribute('data-bs-theme', 'light');
            document.documentElement.style.setProperty('--clock-colors', 'black');
            document.documentElement.style.setProperty('--blatt-color', 'white');
            isDark = false;
        }
        else {
            html.setAttribute('data-bs-theme', 'dark');
            document.documentElement.style.setProperty('--clock-colors', 'white');
            document.documentElement.style.setProperty('--blatt-color', '#343a40');
            isDark = true;
        }
    }
    function getCountry() {
        const ipinfoToken = 'de7be4d28546b2';
          fetch('https://ipinfo.io/json', {
            headers: {
                Authorization: `Bearer ${ipinfoToken}`
            }
          })
          .then(response => response.json())
          .then(data => {
            const country = data.country;
            const city = data.city;
            document.getElementById('country').textContent = `Your location: ${city}, ${country}`;
          })
          .catch(error => {
            console.error('Error fetching IP information:', error);
          });
      }
    //getCountry();
    function changeSec(){
        let trStrs = "rotate("+secDeg+"deg)";
        secArm.style.transform = trStrs;
        let trStrm = "rotate("+minDeg+"deg)";
        minArm.style.transform = trStrm;
        let trStrh = "rotate("+hDeg+"deg)";
        hArm.style.transform = trStrh;
        secDeg += 6;
        minDeg += 0.1;
        hDeg += 0.001666;
    }
    setInterval(changeSec, 1000);
    darkToggle.addEventListener("change", themeSwitch);
})