let ans=prompt("Enter your Instagram id");
let a = [
    "Initialising hacking process...",
    "Connecting to Instagram...",
    "Request Failed",
    "Trying Again...",
    "Connecting to server 1...",
    "Connected Succesfully",
    "Hacking process initialised",
    "200K passwords tried...",
    "Attempt Unsuccesfull",
    "Another 300K passwords tried...",
    "Username and Password retrieved",
    "Password matched",
    "Account Hacked Successfully!"
]



const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}
const showHack = async (message) => {
    await sleep(3)
    text.innerHTML = text.innerHTML + message + "<br>" 
}
(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})()
