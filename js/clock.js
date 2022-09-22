let firstName = prompt("Adınızı giriniz:")
let lastName = prompt("Soyadınızı giriniz:")



firstName = firstName[0].toUpperCase() + firstName.slice(1)
lastName = lastName[0].toUpperCase() + lastName.slice(1)


document.querySelector("#myName").innerHTML= firstName +" "+ lastName


function showTime() {
    const today = new Date();
    let d = today.getDate();
    let mnth = today.getMonth();
    let year = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    nmnth = mnth + 1
    nmnth = checkTime(nmnth);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = d +"/"+ nmnth + "/"+ year +"-"+ h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
    
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()