// Instantiation config
export interface Environment {
  debug?: Boolean;
  host?: string;
}

// Internal use only
let secret = 'fake';
if (process && process.env) { secret = process.env.SECRET || 'fake'; }
export const SECRET = secret;