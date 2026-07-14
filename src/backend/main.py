from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Trading Bot Backend Running"}

@app.get("/test")
def test():
    return {
        "status": "success",
        "message": "Backend Connected Successfully"
    }

from fastapi import Body

@app.post("/backtest")
def run_backtest(data: dict = Body(...)):
    initial_balance = float(
        data.get("initialBalance", 10000)
    )

    return {
        "initialBalance": initial_balance,
        "finalBalance": round(initial_balance * 1.12, 2),
        "winRate": "49.8%",
        "totalTrades": 508,
        "profitFactor": 1.42,
        "maxDrawdown": "8%",
        "sharpeRatio": 1.85
    }