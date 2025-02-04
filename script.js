console.log('Dynamic Web To Lead Form - Mini Project:');

let captchachecked = false;

if (captchachecked) {
    
    function beforesubmit(event) {
        let outputdate = document.querySelector('.outputdate');
        let inputdate = document.querySelector('.inputdate');
    
        console.log('Input date value: ', inputdate.value); // type - string - convert >> date(en_IN)
    
        let formattedDate = new Date (inputdate.value).toLocaleDateString('en-IN') // replace underscore with hyphen
    
        // set the formatted for output date
        outputdate.value = formattedDate;
    }
} else {
    alert('Please Check The reCAPTCHA box to submit the Lead');
    event.preventDefault(); // It will prevent the form being submitted if the recaptcha is not populated
}

function captchasuccess() {
    captchachecked = true;
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

/*
    Repository Website Link: https://a2k-amit.github.io/Web-To-Lead-Dynamic-Form/ 
*/
