    // literals objects

    const mysym = Symbol("key1");

    const jsuser = {
        name : "balva",
        "full name" : "balva aliraza",
        [mysym] : "kka",//symbol
        age : 21,
        loggedin :1/1/1,
        loggedout : [12,"monday","jan",2024],
        date :20/12/14,
        email : "bal@gmail.com",
    }
    // console.log(typeof jsuser);
    // console.log(jsuser);
    // console.log(jsuser.email);
    // console.log(jsuser["name"]);
    // console.log(jsuser["full name"]);
    // console.log(jsuser[mysym]);
    // console.log(typeof jsuser[mysym]);
    
    jsuser.email = "ali@gmail.com";
    // console.log(jsuser);
    // Object.freeze(jsuser)
    jsuser.email = "dskjdss@gmail.com"
    // console.log(jsuser);
    
    jsuser.greet = function(){
        console.log("hello jsuser");
    }
    jsuser.greettwo = function(){
        console.log(`hello jsuser ${this.email}`);
        
    }
    
    console.log(jsuser.greet());
    console.log(jsuser.greettwo());
    
    