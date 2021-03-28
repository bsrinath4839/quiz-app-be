const init = require("./routes");

init((error) => {
    if (error) {
        console.error({ error });
    }
    else {
        console.log("Ready");
    }
})