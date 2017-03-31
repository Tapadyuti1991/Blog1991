/**
 * Created by Lenovo on 3/30/2017.
 */

var input = [{title:'milk',body:'organic'}];
module.exports = function(app){
    app.get('/blogServer',function(req,res)
                             {res.json(input);})
};



