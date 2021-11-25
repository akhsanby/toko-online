export default function _InputNumber() {
  return (
    <div className="input-group">
      <span className="input-group-btn">
        <button type="button" style={buttonStyle1}>
          <i
            className="bi bi-dash"
            style={{ color: "white", fontSize: "20px" }}
          ></i>
        </button>
      </span>
      <input type="text" style={inputStyle} />
      <span className="input-group-btn">
        <button type="button" style={buttonStyle2}>
          <i
            className="bi bi-plus"
            style={{ color: "white", fontSize: "20px" }}
          ></i>
        </button>
      </span>
    </div>
  );
}

const buttonStyle1 = {
  border: "1px solid #ff1616",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
  backgroundColor: "#ff1616",
};
const inputStyle = {
  width: "50px",
  border: "3px solid #ff1616",
  textAlign: "center",
};
const buttonStyle2 = {
  border: "1px solid #ff1616",
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
  backgroundColor: "#ff1616",
};
