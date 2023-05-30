const fetch = require ('node-fetch2');

it  ("Should test validity of token", async ()=>{
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "vangcheemeng@yahoo.com",
            password: "Cheemengvang1234!"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options);
    token = await response.text();
    const status = response.status;
    expect(status).toBe(200);
    expect(token.length).toBe(36);
});

// const fetch = require ('node-fetch2');

// it  ("Should detect bad password", async ()=>{
//     let token = "";

//     const options = {
//         method: 'POST',
//         headers: {
//             "content-type":"application/json"
//         },
//         body:JSON.stringify({
//             userName: "vangcheemeng@yahoo.com",
//             password:"Badpassword1234!"
//         })
//     };
//     const response = await fetch('https://dev.stedi.me/login',options);
//     token = await response.text()
//     const status = response.status;
//     expect(status).toBe(500)
//     expect(token.length).toBe(60);
// });
