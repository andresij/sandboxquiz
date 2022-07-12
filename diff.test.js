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


  test('Running second test - object 2 is bigger than object 1', () => {
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


  test('Running third test - object 1 is bigger than object 2', () => {
    const first = {
        "foo": {
            "bar": "baz",
            "biz": "foo",
            "ss": {
                "xx": "yy",
                "aa": "ss",
                "asa": {
                    "a": "b"
                }
            },
            "aa": "ss"
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
            "biz": "foo",
            "aa": "ss"
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
            "bar": "baz1",
            "ss": undefined
        },
        "baz": [
            "foo1"
        ],
        "miss": undefined,   
        "new_value": 1        
    };
    
    expect(diff(first, second)).toStrictEqual(result);
  });
