// Internal use only
var secret = 'fake';
if (process && process.env) {
    secret = process.env.SECRET || 'fake';
}
export var SECRET = secret;
