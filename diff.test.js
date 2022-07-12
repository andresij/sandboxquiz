const diff = require ('./diff');
 
test('Running basic test', () => {
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
    };
    
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
    };
    
    const result = {
        "foo": {
            "bar": "baz1"
        },
        "baz": [
            "foo1"
        ],
        "miss": undefined,
        "new_value":1
    };
    
    expect(diff(first, second)).toStrictEqual(result);
  });


  test('Running second test', () => {
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
        "ZZ": {
            "x": {
                "y": "AASSk",
                "q": "m"
            }
        }, 
        "miss": 123
    };
    
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
        "ZZ": {
            "x": {
                "y": "AASSk",
                "q": "",
                "w": {
                    "sss": "zz"
                }
    
            }
        }, 
        "new_value": 1        
    };
    
    const result = {
        "foo": {
            "bar": "baz1"
        },
        "baz": [
            "foo1"
        ],
        "ZZ": {
            "x": {
                "q": "",
                "w": {
                    "sss": "zz"
                }
    
            }
        }, 
        "miss": undefined,
        "new_value":1
    };
    
    expect(diff(first, second)).toStrictEqual(result);
  });