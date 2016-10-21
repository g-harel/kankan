import db from './db.json';

let get = {
    intersect: function(filters) {
        if (!Object.prototype.toString.call(filters) === '[object Array]') {
            return null;
        }
        return db.tasks.filter(function(task) {
            for (let i = 0; i < filters.length; i++) {
                let filter = filters[i];
                if (!Object.prototype.toString.call(filter) === '[object Array]') {
                    return false;
                }
                if (filter.length !== 2) {
                    return false;
                }
                if (task[filter[0]] !== filter[1]) {
                    return false;
                }
            }
            return true;
        });
    },
    join: function(filters) {
        if (!Object.prototype.toString.call(filters) === '[object Array]') {
            return null;
        }
        return db.tasks.filter(function(task) {
            for (let i = 0; i < filters.length; i++) {
                let filter = filters[i];
                if (!Object.prototype.toString.call(filter) === '[object Array]') {
                    return false;
                }
                if (filter.length !== 2) {
                    return false;
                }
                if (task[filter[0]] === filter[1]) {
                    return true;
                }
            }
            return false;
        });
    }
}

let set = function() {
    console.log(arguments);
}

export {get, set};