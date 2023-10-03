//arrow function
const message = () => {
  const header = "<div style='text-align: center'><h1>Personal Information</h1></div>";
  const name = 'Putra Lombu';
  const age = '25';
  const status = 'single';
  return header + '<hr><strong>Name: </strong>' + name + '<br><strong>Age: </strong>' + age + '<br><strong>Status: </strong>' + status;
};

//export
export default message;
