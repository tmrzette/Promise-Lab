// *Extra Lab*
//*Word Library*

//var arrayAnimals = ["dragon", "lion", "tiger", "bear"]
//const animals = ["dragon", "lion", "tiger", "bear"];

let favoriteAnimals = (function() {
    
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }; 
    
    const animals = ["dragon", "lion", "tiger", "bear"];

    function array(animals) {
        return wait(1000)
        .then((ifResolved) => {
            if (ifResolve) {
                return Promise.resolve(`${animals}`);
            } else {
                return Promise.reject(new Error('Error: Can not find array'));
            }
        });
    }

    function addBang(animals) {
        return wait(2000)
        .then((addBang) => {
           return arrayAnimals.map("!")
           .then((ifResolved) => {
            if (ifResolve) {
                return Promise.resolve(`${animals}`);
            } else {
                return Promise.reject(new Error('Error: Array does not have a BANG!'));
            }
        });
           
    },

    function addUppercase(animals) {
        return wait(3000)
        .then((makeUppercase) => {
            return makeUppercase.map(toUppercase)
            .then((ifResolved) => {
            if (ifResolved) {
                return Promise.resolve(`${animals}`)
            } else {
                return Promise.reject(new Error('Error: Array does not have Uppercase'));
            }
         
        });
    },

    function addPlural(animals) {
        return wait(4000)
        .then((makePlural) => {
            return makePlural.map(arrayPlural)
            .then((ifResolved) => {
            if (ifResolved) {
                return Promise.resolve(`${animals}`)
            } else {
                return Promise.reject(new Error('Error: Array does not have Uppercase'));
            }
        });        
    };

  
})();