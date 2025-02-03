console.log('Dynamic Web To Lead Form - Mini Project:');

function beforesubmit() {
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');

    console.log('Input date value: ', inputdate.value); // type - string - convert >> date(en_IN)

    let formattedDate = new Date (inputdate.value).toLocaleDateString('en-IN') // replace underscore with hyphen

    // set the formatted for output date
    outputdate.value = formattedDate;
}

/*
    Repository Website Link: https://a2k-amit.github.io/Web-To-Lead-Dynamic-Form/ 
*/
