import moment from 'moment';
moment.locale( 'es' )

const hoy = moment();

console.log( hoy.format( 'dddd Do MMMM YYYY' ) );



