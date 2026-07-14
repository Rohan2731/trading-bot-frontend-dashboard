import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BackTestForm({ setResults }) {
  const [initialBalance, setInitialBalance] = useState("");
  const [riskPerTrade, setRiskPerTrade] = useState("");
  const [riskRewardRatio, setRiskRewardRatio] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/backtest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            initialBalance,
            riskPerTrade,
            riskRewardRatio,
          }),
        }
      );
      setLoading(true);
      const data = await response.json();

      setResults(data);
      setLoading(false);
      navigate("/results");

    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <div className="card">
      <h2>Run Backtest</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Starting Capital</label>
          <br />
          <input
            type="number"
            placeholder="Example: 100000"
            value={initialBalance}
            onChange={(e) =>
              setInitialBalance(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Account Risk Per Trade (%)</label>
          <br />
          <input
            type="number"
            min="0.1"
            max="10"
            step="0.1"
            placeholder="Example: 1"
            value={riskPerTrade}
            onChange={(e) =>
              setRiskPerTrade(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Risk Reward Ratio</label>
          <br />
          <select
            value={riskRewardRatio}
            onChange={(e) =>
              setRiskRewardRatio(e.target.value)
            }
          >
            <option value="">
              Select Ratio
            </option>

            <option value="2">
              1 : 2
            </option>

            <option value="3">
              1 : 3
            </option>

            <option value="4">
              1 : 4
            </option>

            <option value="5">
              1 : 5
            </option>
          </select>
        </div>

        <br />

        <button type="submit" disabled={loading}>
        {loading ? "Running Backtest..." : "Run Backtest"}
        </button>

      </form>
    </div>
  );
}

export default BackTestForm;