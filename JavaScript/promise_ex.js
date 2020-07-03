let chicken = function(chick, badEgg) {
    setTimeout(function(){
        const x = Math.random();
        if (x>=0.5) {
            chick('It hatched!');
        } else {
            badEgg('It is ruined.');
        }
    }, 1000);
};

let egg = new Promise(chicken);

egg.then(
    function(success){console.log(success);},
    function(error){console.log(error);}
);
    
