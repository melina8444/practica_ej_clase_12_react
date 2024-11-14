

const TrafficLight = () => {
    
    const obtengoFondoColor = () => {
        
        if (Active) return color;
        return "gray"; 
    }
   
  return (
    <div style={{
  display: "flex",
  backgroundColor: obtengoFondoColor(),
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  margin: "10px auto",
  cursor: "pointer",
}}>
      <div style={{ backgroundColor: "red" }}></div>
      <div style={{ backgroundColor: "yellow" }}></div>
      <div style={{ backgroundColor: "green" }}></div>
    </div>
  );
}

export default TrafficLight 


/* style={{
        display: 'flex',
ligth
  style={{
          // backgroundColor: aca va un condicional,
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          margin: '10px auto',
          cursor: 'pointer',
        }} */