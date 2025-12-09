import axios from "axios";
async function getBlogs(){
    const b= await axios.get("https://jsonplaceholder.typicode.com/todos")
    return b.data;
}
export default async function Blogs(){
    const a:any= await getBlogs();
    return (<div>
        learn recoil/ redux fromt he best course in the market
        {a.map((a:Itodo)=><Todo title={a.title} completed={a.completed} />)}
    </div>)
}
interface Itodo{
    title:string,
    completed:boolean
}
function Todo({title,completed}:Itodo){
    return(<div>
        {title}{completed? "done!" :"not done!"}
    </div>)
}