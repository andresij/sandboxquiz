const diff = (o1, o2) => {
    var path = [];
    var objectDiff = {};
    
    // Verify if items inside o1 are present an equal in o2
    const compare = (obj1, obj2) => {
        const o1Props = Object.getOwnPropertyNames(obj1);
        
        for(let o1prop of o1Props){
            
            if (typeof (obj1[o1prop]) === 'object' && !Array.isArray(obj1[o1prop])) {
                path.push (o1prop);
                if (typeof(obj2) !== 'undefined') {
                    compare (obj1[o1prop], obj2[o1prop]);
                } else {
                    compare (obj1[o1prop], undefined);
                }
            } else {

                let v1 = getO1Value (path, o1prop);
                let v2 = getO2Value (path, o1prop);
                if (v1 !== v2) {
                    addDiff (objectDiff, o1prop, v2);
                }
            }
        }
        path.pop();
    }

    //get o1 value based on path and prop name
    const getO1Value = (path, prop) => {
        let subObject = o1;
        for (let x = 0; x < path.length; x++) {
            if (typeof(subObject) !== 'undefined') {
                subObject = subObject[path[x]];
            } else {
                return undefined;
            }
        }
        if (typeof(subObject) !== 'undefined') {
            return (subObject[prop]);
        } else {
            return undefined;
        }

    }
    
    //get o2 value based on path and prop name
    const getO2Value = (path, prop) => {
        let subObject = o2;
        for (let x = 0; x < path.length; x++) {
            if (typeof(subObject) !== 'undefined') {
                subObject = subObject[path[x]];
            } else {
                return undefined;
            }
        }
        if (typeof(subObject) !== 'undefined') {
            return (subObject[prop]);
        } else {
            return undefined;
        }
    }
    
    // add item to diff object (this will be the result)
    const addDiff = (object, prop, value) => {
        let p = Object.create(path);
        while (p.length > 0) {
            let k = p.shift();
            if (!object.hasOwnProperty(k)) {
                object[k] = {};
            }
            object = object[k];
        }
        object[prop] = value;
    }
    
    //compare object in o1 exists and have the same value in o2;
    compare (o1, o2);   
    //compare object in o2 exists and have the same value in o1;
    compare (o2, o1);

    return (objectDiff);
}

module.exports = diff;