function check() {
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const con_pass = document.getElementById('email-confirm')
    
    let div = document.querySelector('.error')
    let form = document.querySelector('form')
    if(email.value==''&&username.value==''&&con_pass.value==''){
        div.innerText = 'Please fill everything'

    }
    if (username.value == '') {
        div.innerText = 'Please enter Email'
    }
    if(email.value==''){
        div.innerText = 'Please enter password'
    }
    if(con_pass.value==''){
        div.innerText = 'Please enter Confirm pass'
    }
    if(email.value!=''&&username.value!=''&&con_pass.value!=''){
        if(email.value==con_pass.value){
            div.innerText = ''
            form.submit()
        }
        else{
            div.innerText = 'Confirm email is not match'
        }
    }
}