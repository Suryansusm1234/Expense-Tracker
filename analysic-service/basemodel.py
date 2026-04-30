from pydantic import BaseModel
from typing import Optional
class Transaction(BaseModel):
    amount : int
    type :str
    title :str
    category :Optional[str] =None  
class Category(BaseModel):
    title : str
    budgeted :int 
class InputData(BaseModel):
    transactions : list[Transaction]
    categories : list[Category]