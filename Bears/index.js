var fs = require("fs");


function getBears(filepath, done) {
    fs.readFile(filepath, function(err, bears) {
        if (err) {
            console.log(err);
            done(err, null);
        }
        console.log(bears);
        fs.readFile('./dict.txt', function(err, dict) {
            if (err) {
                console.log(err);
                done(err, null);
            }
            console.log(dict);
            compareBears(bears, dict);
            
        });
    });

    function compareBears(bears, dict) {
        dict = dict.toString().split("\n");
        bears = bears.toString().split("\n").filter(function(bear) {
            return dict.indexOf(bear) !== -1;
        });
        done(null, bears);
    }
};


getBears("./bears.txt", function(err, res) {
    if (err) {
        console.log(err);
    };
    console.log(res);
})