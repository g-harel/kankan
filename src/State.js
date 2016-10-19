import db from './db.json';

let get = function(key, value) {
    return db.tasks.filter((val) => val[key] === value);
}

let set = function() {
    console.log(arguments);
}

export {get, set};