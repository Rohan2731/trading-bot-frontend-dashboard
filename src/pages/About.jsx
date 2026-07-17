function About() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>About This Project</h1>

      <div className="card">
        <p>
          This project showcases a quantitative Forex trading
          strategy developed using Python and historical market
          data. The dashboard provides trading analytics,
          performance metrics, risk evaluation, and strategy
          visualization through an interactive web interface.
        </p>
      </div>

      <br />

      <h2>Developer</h2>

      <div className="card">
        <h3>Rohan Bilagi</h3>
        <p>Computer Science Engineering Student</p>
        <p>Python Developer</p>
        <p>AI/ML Enthusiast</p>
        <p>Interested in Quantitative Finance and Data Analytics</p>
        <p><a href="https://rohan-portfolio-orpin.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", backgroundColor: "lightblue" }}>You can visit my Portfolio Here</a></p>
      </div>

      <br />

      <h2>Skills Used</h2>

      <div className="stats-container">
        <div className="card">Python</div>
        <div className="card">React</div>
        <div className="card">Pandas</div>
        <div className="card">NumPy</div>
        <div className="card">Machine Learning</div>
      </div>

      <br />

      <h2>Project Objectives</h2>

      <div className="card">
        <ul>
          <li>Analyze historical Forex market data.</li>
          <li>Evaluate trading strategy performance.</li>
          <li>Measure profitability and risk exposure.</li>
          <li>Visualize trading performance using charts and metrics.</li>
          <li>Improve quantitative trading decision-making.</li>
        </ul>
      </div>

      <br />

      <h2>Technologies Used</h2>

      <div className="card">
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Pandas</li>
          <li>NumPy</li>
          <li>Recharts</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <br />

      <h2>Key Features</h2>

      <div className="stats-container">
        <div className="card">
          <h3>Performance Analytics</h3>
          <p>Track profitability, win rate, and account growth.</p>
        </div>

        <div className="card">
          <h3>Risk Management</h3>
          <p>Monitor drawdowns and trading risk metrics.</p>
        </div>

        <div className="card">
          <h3>Strategy Evaluation</h3>
          <p>Analyze the effectiveness of trading strategies.</p>
        </div>
      </div>

      <br />

      <h2>Future Enhancements</h2>

      <div className="card">
        <ul>
          <li>Real-time market data integration.</li>
          <li>Live trade monitoring dashboard.</li>
          <li>Broker API connectivity.</li>
          <li>Portfolio management features.</li>
          <li>AI-based trading signal generation.</li>
          <li>Advanced performance reporting.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
