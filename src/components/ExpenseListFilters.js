import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.onTextChange(e.target.value);
    };

    onSortChange = (e) => {
        const value = e.target.value;
        if (value === 'date') {
            this.props.sortByDate();
        } else if (value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text}
                    onChange={this.onTextChange} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths={2}
                    isOutsideRange={() => false}
                    showClearDates={true}/>
            </div>
        )
    }
}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch, props) => {
    return {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        onTextChange: (value) => dispatch(setTextFilter(value)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);