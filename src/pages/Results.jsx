import StatsCard from "../components/StatsCard";

function Results({ results }) {

  if (!results) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Results</h1>
        <p>No backtest results available.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <div className="card">
        <p>
          These results are generated from the
          submitted trading parameters and
          backtest calculations.
        </p>
      </div>

      <br />
      <h1>Backtest Results</h1>

      <div className="stats-container">

        <StatsCard
          title="Initial Balance"
          value={`$${results.initialBalance}`}
        />

        <StatsCard
          title="Final Balance"
          value={`$${results.finalBalance}`}
        />

        <StatsCard
          title="Win Rate"
          value={results.winRate}
        />

        <StatsCard
          title="Total Trades"
          value={results.totalTrades}
        />

        <StatsCard
          title="Profit Factor"
          value={results.profitFactor}
        />

        <StatsCard
          title="Max Drawdown"
          value={results.maxDrawdown}
        />

        <StatsCard
          title="Sharpe Ratio"
          value={results.sharpeRatio}
        />

      </div>
    </div>
  );
}

export default Results;