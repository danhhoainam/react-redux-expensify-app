const selectExpensesTotal = (expenses) => {

    return expenses && expenses.length !== 0
            ? expenses
                .map((expense) => expense.amount)
                .reduce((sum, value) => sum + value, 0)
            : 0;
}

export default selectExpensesTotal;