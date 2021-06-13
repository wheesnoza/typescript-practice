import axios from "axios";

interface Todo {
    userId: number
}

interface TodoResponse {
    data: Todo
}

axios.request<Todo>({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    transformResponse: (r: TodoResponse) => r.data
}).then((response) => {
    const { data } = response

    console.log(data);
});