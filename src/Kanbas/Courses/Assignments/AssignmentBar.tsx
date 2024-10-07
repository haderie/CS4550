import { BsPlus } from "react-icons/bs";

export default function AssignmentBar() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '10px', 
      marginLeft: 'auto', // This pushes the element to the right
      //justifyContent: 'flex-end', // Ensures children align to the right
      //alignItems: 'center', // Vertically center the buttons
      //width: '100%' // Take full width to ensure it can float to the right
    }}>
      <button
        className="wd-add-assignment-group" 
        style={{
          backgroundColor: "#E0E0E0", 
          border: '1px solid #ccc', 
          alignItems: 'center', 
          padding: '0px 10px', 
          borderRadius: '3px'
        }}
      >
        <BsPlus style={{ fontSize: '1.5em' }} /> Group
      </button>

      <button
        id="wd-add-assignment"
        style={{
          backgroundColor: '#E22121', 
          color: 'white', 
          border: 'none', 
          alignItems: 'center', 
          padding: '0px 10px', 
          borderRadius: '3px'
        }}
      >
        <BsPlus style={{ fontSize: '1.5em' }} /> Assignment
      </button>
    </div>
  );
}
