const dayjs = require( 'dayjs' );
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

module.exports = ( date, format ) => {
    return `${dayjs( date, 'YYYY-MM-DD' ).format( format )}`;
}
