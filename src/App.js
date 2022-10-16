import React from "react";
import "./style.css";

const Todos = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
];

const fetchData = () => {
  return {
    data: Todos,
  }
};
 
const Todolist = ({ data}) => {
  return (
  <ul>
    {data.map((elem) => (
      <List  key={elem.id} el = {elem} />
    ))}
    </ul>
  );
};

const List =({el}) => {
  return (
  <li>{el.task}</li> 
  )

};


const withConditionalReturn = (Component) => (props) => {
  if(props.data.length === 0){
    return <div>Data is empty</div>
  }
  if(!props.data){
    return <div>No Data loaded yet! </div>
  }
  return <Component {...props} />;
}
const Todolist1 = withConditionalReturn(Todolist)

function App() {
  const { data } = fetchData();

 return (
   <div>
     <Todolist1 data={data} />
   </div>
 );
}
export default App