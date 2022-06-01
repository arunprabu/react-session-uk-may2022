/* HOC - can receive props children and return the same props children 
  you can also return  multiple JSX elements 
  wrapper comp that can return any JSX on top of props children
  HOC - pure function with zero side effects 
  // HOC should not be in PascalCase 
*/


const LastLogin = (props) => {
  console.log(props);
  return(
    props.children
  )
}

export default LastLogin