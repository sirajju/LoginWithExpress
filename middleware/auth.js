function isAuthenticated(req,res,next){
    if (req.session.email) {
        next();
      } else {
        if(req.session.fromHome&&req.url!=='/home'){
          res.setHeader('Cache-Control','no-cache , no-store')
          res.render('index',{message:"You have to login first"})
        }
        else{
        if(req.url=='/home'&&!req.session.email){
          req.session.fromHome=true
          res.redirect('/')
        }
        else{
        res.setHeader('Cache-Control', 'no-cache, no-store');
        res.render('index');
        }
        }
      }
}
module.exports = isAuthenticated