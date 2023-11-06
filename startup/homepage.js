

module.exports=function(app){
    
app.get('/home', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);
}