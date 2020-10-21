async function getDummyData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

    const data = await response.json();
    console.log("Data = ", data);
}

async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "My Info",
            body: "Data",
            userId: 4
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    // console.log(`Response:  ${ response }`);

    const data = await response.json();
    console.log("post Data = ", data);
}

postData();



getDummyData();