console.log("====== Hour2 with Fetch API (Async/Await) ======");

async function fetchData() {
    try {
        // Fetch a single post
        let response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data1 = await response1.json();
        console.log("Fetch API Data (single post):", data1);

        // Fetch all posts
        let response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data2 = await response2.json();
        console.log("First 5 Posts:", data2.slice(0, 5));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
