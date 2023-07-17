
function show() {

    let show = document.getElementById('img-show');
    let hide = document.getElementById('img-hide');
    let pass = document.getElementById('password')
    show.style.display = 'none'
    hide.style.display = 'block'

    pass.type = 'text'

}
function hide() {

    let show = document.getElementById('img-show');
    let hide = document.getElementById('img-hide');
    let pass = document.getElementById('password')
    show.style.display = 'block'
    hide.style.display = 'none'

    pass.type = 'password'

}
function check(){
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let div = document.querySelector('.error')
    let form = document.querySelector('form')
    if (username.value == '') {
        div.innerText = 'Please enter username'
    }
    if(password.value==''){
        div.innerText = 'Please enter password'
    }
    if(password.value==''&&username.value==''){
        div.innerText = 'Please fill the form first '
    }
    if(password.value!=''&&username.value!=''){
        form.submit()
    }
   
}