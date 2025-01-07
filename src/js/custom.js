//Mobile Menu
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');    
    if(menu.style.display == "block") { 
        menu.style.display = "none";
    }
    else { 
        menu.style.display = "block";
    }
}
// document.getElementById("open-menu").addEventListener("click", function() {
//     var menu = document.getElementById("mobile-menu");
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "block";
//     }
// });

// Submenu close icon
document.getElementById("cross-icon").addEventListener("click", function() {
    var closeicon = document.getElementById("mobile-menu");
    if (closeicon.style.display === "block") {
        closeicon.style.display = "none";
    } else {
        closeicon.style.display = "block";
    }
});

//Dropdown Menu toggle
document.getElementById("dropdown-menu").addEventListener("click", function() {
    var closeicon = document.getElementById("disclosure");
    if (closeicon.style.display === "block") {
        closeicon.style.display = "none";
    } else {
        closeicon.style.display = "block";
    }
});




// countdown----------
function CountDown(lastDate) {
    const selectDay = document.getElementById("day");
    const selectHour = document.getElementById("hour");
    const selectMinute = document.getElementById("minute");
    const selectSecound = document.getElementById("second");
    if (selectDay && selectHour && selectMinute && selectSecound) {
      let showDate = "";
      let showHour = "";
      let showMinute = "";
      let showSecound = "";
      // count Down
      const provideDate = new Date(lastDate);
      // format date
      const year = provideDate.getFullYear();
      const month = provideDate.getMonth();
      const date = provideDate.getDate();
      const hours = provideDate.getHours();
      const minutes = provideDate.getMinutes();
      const seconds = provideDate.getSeconds();
  
      // date calculation logic
      const _seconds = 1000;
      const _minutes = _seconds * 60;
      const _hours = _minutes * 60;
      const _date = _hours * 24;
      const timer = setInterval(() => {
        const now = new Date();
        const distance =
          new Date(year, month, date, hours, minutes, seconds).getTime() -
          now.getTime();
        if (distance < 0) {
          document.getElementById('countdown-text').innerHTML = "Sale is Closed"
          document.getElementById('grab-deal').style.visibility="hidden";
          document.getElementById('sale-box').style.backgroundImage = "url('http://mydem021.unaux.com/wp-content/uploads/2024/05/flash_sale.png')";
          clearInterval(timer);
          return;
        }
        showDate = Math.floor(distance / _date);
        showMinute = Math.floor((distance % _hours) / _minutes);
        showHour = Math.floor((distance % _date) / _hours);
        showSecound = Math.floor((distance % _minutes) / _seconds);
        selectDay.innerText = showDate < 10 ? `0${showDate}` : showDate;
        selectHour.innerText = showHour < 10 ? `0${showHour}` : showHour;
        selectMinute.innerText = showMinute < 10 ? `0${showMinute}` : showMinute;
        selectSecound.innerText =
          showSecound < 10 ? `0${showSecound}` : showSecound;
      }, 1000);
    }
  }
  CountDown("2025-01-31T24:00:00.000000+05:30");
