from fastapi import FastAPI
from basemodel import InputData
app = FastAPI()


@app.get("/")
def hello():
    return{
        "message": "I am working"
    }
@app.post("/analyze")
def analyze(data :InputData):
    income = 0 
    expense = 0 
    category_map = {}
    for cat in data.categories:
        category_map[cat.title] = {
            "category" : cat.title,
            "budgeted" : cat.budgeted,
            "actual" : 0
        }
    for transaction in data.transactions:
        if transaction.type == "income":
            income += transaction.amount
        else:
            expense += transaction.amount

            for cat in category_map:
                if(cat == transaction.category):
                    category_map[cat]["actual"] += transaction.amount
                    break
    for cat in category_map.values():
        if cat["budgeted"] > 0:
            cat["utilization"] = int((cat["actual"] / cat["budgeted"]) * 100)
        else:
            cat["utilization"] = 0

    balance = income - expense
    return {
        "balance": balance,
        "income": income,
        "expense": expense,
        "categoryBreakdown": list(category_map.values())
    }
            
    