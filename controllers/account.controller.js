const listAcc=[
    
]
exports.signupLayout=(req, res, next)=>{
    let erFullname =""
    let erUsername =""
    let erEmail =""
    let erPasswd =""
    let erRePass =""
    let obj={
        fullname:"",
        username : "",
        email: "",
        password: "",
        repass: ""
    }
    res.render('SignUp',{erFullname:erFullname, erEmail:erEmail, erUsername:erUsername, erPasswd:erPasswd, erRePass:erRePass, acc:obj})
}
exports.signup=(req, res, next)=>{
    let fullname =req.body.fullname;
    let username=req.body.username ;
    let email =req.body.email;
    let password =req.body.passwd;
    let image =req.body.avata;
    let repass = req.body.repasswd
    let erFullname =""
    let erUsername =""
    let erEmail =""
    let erPasswd =""
    let erRePass =""
    if(fullname!=""&&username!=""&&email!=""&&password!=""&&repass!=""&&password==repass){
        let acc={
            fullname:fullname,
            username : username,
            email: email,
            password: password,
            image: image
        }
        listAcc.push(acc)
        res.redirect('/')
    }else{
        let obj={
            fullname:fullname,
            username : username,
            email: email,
            password: password,
            repass: repass
        }
        if(fullname==""){
             erFullname ="không được để trống mục này"
        }else{
            erFullname=""
        }
        if(username==""){
            erUsername="Tên tài khỏa không được để trống"
        }else{
            erUsername=""
        }
        if(email==""){
            erEmail="Email không được để trống"
        }else{
            erEmail=""
        }
        if(password==""){
            erPasswd ="Mật khẩu không được để trống"
        }else{
            erPasswd=""
        }
        if(repass==""){
            erRePass="Mục này không được để trống"
        }else if(repass!=password){
            erRePass="Mật khẩu không đúng"
        }else{
            erRePass=""
        }
        res.render('SignUp',{erFullname:erFullname, erEmail:erEmail, erUsername:erUsername, erPasswd:erPasswd, erRePass:erRePass, acc:obj} )
    }
    
}
exports.login=(req, res, next)=>{
    let username = req.body.username;
    let pass = req.body.passwd;
    if(checkLogin(username, pass)==true){
        res.redirect('/home')
    }else{
        res.render('Signin',{err:"Mật khẩu không đúng",us:username } )
    }
}
exports.layoutLogin=(req, res, next)=>{
    let username = req.body.username;
    let pass = req.body.passwd;
    res.render('Signin',{err:" ",us:""} )
   
}
const checkLogin =(username, pass)=>{
    for(let i=0;i<listAcc.length;i++){
        if(username==listAcc[i].username&&pass==listAcc[i].password){
            return true
        }else{
            return false;
        }
    }
}