import Hero from "../components/Hero";
import StatsCard from "../components/StatsCard";
import FeatureCard from "../components/FeatureCard";
import { tradingResults } from "../data/results";
import BackTestForm from "../components/BackTestForm";

function Home({setResults}) {
  return (
    <>
      <Hero />
      <BackTestForm setResults={setResults} />
     
      <div className="card" style={{ margin: "20px" }}>
        <h2>Project Overview</h2>

        <p>
            The AI Trading Bot Dashboard is a quantitative trading
            analytics platform designed to evaluate Forex trading
            strategies using historical market data.
        </p>

        <br />

        <p>
            The project focuses on trend-following and pullback-based
            entries while applying strict risk management principles.
        </p>
        </div>

      <h2 style={{ padding: "20px" }}>Trading Metrics</h2>

      <div className="stats-container">
        <StatsCard
          title="Final Balance"
          value={`$${tradingResults.finalBalance}`}
        />
        <StatsCard
          title="Win Rate"
          value={tradingResults.winRate}
        />
        <StatsCard
          title="Trades"
          value={tradingResults.totalTrades}
        />
        <StatsCard
          title="Profit Factor"
          value={tradingResults.profitFactor}
        />
        <StatsCard
          title="Max Drawdown"
          value={tradingResults.maxDrawdown}
        />
        <StatsCard
          title="Sharpe Ratio"
          value={tradingResults.sharpeRatio}
        />
      </div>

      <h2 style={{ padding: "20px" }}>Features</h2>

      <div className="stats-container">
        <FeatureCard
          title="Backtesting"
          description="Test trading strategies using historical data."
        />
        <FeatureCard
          title="Risk Management"
          description="Manage losses with stop loss and position sizing."
        />
        <FeatureCard
          title="Performance Analytics"
          description="Track win rate, drawdown and profitability."
        />
      </div>

      <h2 style={{ padding: "20px" }}>Tech Stack</h2>

      <div className="stats-container">
        <StatsCard title="Frontend" value="React" />
        <StatsCard title="Backend" value="Python" />
        <StatsCard title="Data Analysis" value="Pandas" />
        <StatsCard title="Numerical Computing" value="NumPy" />
      </div>
    </>
  );
}

export default Home;
