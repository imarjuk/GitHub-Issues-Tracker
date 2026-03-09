console.log('you lof');

document.getElementById('login-btn')
.addEventListener('click', function(){
    // 1- get the mobile number inout
    const userNameInput = document.getElementById('input-username');
    const userName= userNameInput.value;

    // 2. get the pin
    const inputPin = document.getElementById('input-pin');
    const pin= inputPin.value;

    // 3. match pin & mobile number
    if(userName == 'admin' && pin=='admin123'){
        // 3.1 true :: > alert> home page 
        alert("login Successful");
        // window.location.replace('/home.html');
        window.location.assign('home.html');
    }
        else{
            // 3.2 false::: > alert> return 
            alert('login failed');
            return;
        }
    

})