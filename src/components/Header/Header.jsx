//go here to learn more about passing props
//https://beta.reactjs.org/learn/passing-props-to-a-component

//can "destructure" what we want from props
const Header = ({ header, fontSize }) => {
  return <div style={{ fontSize }}>{header}</div>;
};
export default Header;

//this functions the same as above, but then you have to reference props.blah
//thats why we destructured it above to clean it up
// const Header = (props) => {
//   return <div>{props.header}</div>;
// };
