import moment from 'moment';
moment.locale( 'es' )

const today = moment();
const yesterday = moment().subtract(1, 'days');
const tomorrow = moment().add(1, 'days');

const format = 'dddd Do MMMM YYYY';


console.table(
    {
        yesterday: yesterday.format(format),
        today: today.format(format),
        tomorrow: tomorrow.format(format),
    }
);


