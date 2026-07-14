function Strategy() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Trading Strategy</h1>

      <div className="card">
        <p>
          This strategy follows a trend-following approach combined
          with pullback entries and strict risk management. The goal
          is to identify high-probability opportunities while
          minimizing risk exposure and preserving capital.
        </p>
      </div>

      <br />

      <h2>Strategy Workflow</h2>

      <div className="stats-container">

        <div className="card">
          <h3>Step 1: Trend Analysis</h3>
          <p>
            Use the 15-minute timeframe to identify the
            overall market direction.
          </p>
        </div>

        <div className="card">
          <h3>Step 2: Pullback Detection</h3>
          <p>
            Monitor the 5-minute timeframe for pullbacks
            within the established trend.
          </p>
        </div>

        <div className="card">
          <h3>Step 3: Entry Confirmation</h3>
          <p>
            Use the 1-minute timeframe to confirm
            trade entries.
          </p>
        </div>

        <div className="card">
          <h3>Step 4: Risk Management</h3>
          <p>
            Risk only 1% of the total account balance
            on each trade.
          </p>
        </div>

        <div className="card">
          <h3>Step 5: Trade Exit</h3>
          <p>
            Target a minimum Risk-to-Reward ratio
            of 1:3.
          </p>
        </div>

      </div>

      <br />

      <h2>Trading Workflow Overview</h2>

      <div className="card">
        <h3>Execution Flow</h3>

        <p>15 Minute Trend Analysis</p>
        <p>↓</p>

        <p>5 Minute Pullback Detection</p>
        <p>↓</p>

        <p>1 Minute Entry Confirmation</p>
        <p>↓</p>

        <p>Risk Management</p>
        <p>↓</p>

        <p>Trade Execution & Exit</p>
      </div>

      <br />

      <h2>Markets Traded</h2>

      <div className="stats-container">
        <div className="card">
          <h3>EUR/USD</h3>
          <p>Major Forex Currency Pair</p>
        </div>

        <div className="card">
          <h3>AUD/USD</h3>
          <p>Commodity-Linked Currency Pair</p>
        </div>

        <div className="card">
          <h3>XAU/USD</h3>
          <p>Gold vs US Dollar</p>
        </div>
      </div>

      <br />

      <h2>Risk Management Rules</h2>

      <div className="card">
        <ul>
          <li>Maximum Risk Per Trade: 1%</li>
          <li>Minimum Risk-to-Reward Ratio: 1:3</li>
          <li>Avoid Overtrading</li>
          <li>Trade Only in Trend Direction</li>
          <li>Maintain Consistent Position Sizing</li>
        </ul>
      </div>
    </div>
  );
}

export default Strategy;