from pydantic import BaseModel
class Transaction(BaseModel):
    amount : int
    type :str
    title :str
class Category(BaseModel):
    title : str
    budgeted :int 
class InputData(BaseModel):
    transactions : list[Transaction]
    categories : list[Category]