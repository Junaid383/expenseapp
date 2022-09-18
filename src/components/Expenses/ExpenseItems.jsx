import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      
      <ExpenseDate date={props.date} />
      
      <div className="expense-item__description">
        <h2 className="">{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    
    </Card>
  );
}

export default ExpenseItems;
