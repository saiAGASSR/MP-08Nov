let isLoggedIn = async (req,res,next) => {
 console.log("is user logged in ?" , req.user);
 
 let loggedIn = req.isAuthenticated(); 
 if(!loggedIn) {
    req.flash("listingError","You must be logIn to perform this action ");
    return res.redirect("/login");
 } 
 next();
}

export default isLoggedIn ; 