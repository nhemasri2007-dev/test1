import "./App.css";

function App() {
  // Inline CSS (ONLY for image)
  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #4f46e5",
    marginBottom: "10px",
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .student-name {
            font-size: 24px;
            font-weight: bold;
            color: #1e293b;
            margin: 8px 0;
          }

          .student-role {
            font-size: 16px;
            color: #4f46e5;
            font-weight: 600;
            margin-bottom: 6px;
          }

          .college-name {
            font-size: 15px;
            color: #475569;
            font-weight: 500;
            margin-bottom: 12px;
          }
        `}
      </style>

      <div className="page">
        <div className="id-card">
          <div className="header">
            🎓 Student ID Card
          </div>

          --{/* Replace src with YOUR photo */} 
          <img
            src="src/assets/hs.jpeg"
            alt="Student"
            style={imageStyle}
          />

          <div className="student-name">Narpareddy Hemasri</div>
          <div className="student-role">Computer Science Student</div>
          <div className="college-name">csa Institute of Technology</div>

          <div className="details">
            <p><strong>ID No:</strong> 22CS02
            27</p>
            <p><strong>Department:</strong> CSE</p>
            <p><strong>Email:</strong> nhemasri2007@gmail.com</p>
            <p><strong>Phone:</strong> +91 8XXXXXXXXX</p>
          </div>

          <button className="btn">Contact Student</button>
        </div>
      </div>
    </>
  );
}

export default App;