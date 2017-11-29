import moment from 'moment';

export default [{
    id: '1',
    description: 'test',
    note: 'test note',
    amount: 150,
    createAt: 0
}, {
    id: '2',
    description: 'Buy',
    note: 'test buy',
    amount: 152220,
    createAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit',
    note: 'test credit',
    amount: 3212,
    createAt: moment(0).add(4, 'days').valueOf()
}];