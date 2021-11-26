import axios from "axios";

const getData = async function getData(n) {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + n);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + n);
    return {"user" : users , "post" : posts};
}

export default getData;
