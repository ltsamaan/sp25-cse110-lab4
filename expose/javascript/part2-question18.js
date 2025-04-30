function t() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const intervalID = setInterval(t, 1000)