const diff = require ('./diff');

const first = {
    "foo": {
        "bar": "baz",
        "biz": "foo"
    },
    "fiz": {
        "foo": "baz"
    },
    "bar": "baz",
    "baz": [
        "foo",
        "bar"
    ],
    "miss": 123    
}

const second = {
    "foo": {
        "bar": "baz1",
        "biz": "foo"
    },
    "fiz": {
        "foo": "baz"
    },
    "bar": "baz",
    "baz": [
        "foo1"
    ],
    "new_value": 1        
}

console.log (diff (first, second));
