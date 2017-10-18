# Ionic Pro API Client

A simple JasvaScript client for interacting with Ionic Pro

## UNDER CONSTRUCTION

This is still in active development, and is far from comprehensive at the moment.  Most of it as as-of-yet undocumented and is presented "as is".

## Installation

```bash
npm install --save @ionic/pro-api-javascript-client
```

## Usage

```typescript
import { Environment, ProClient, ProUser } from 'pro-client';

...

// Instantiate the client
let cfg: Environment = { debug: true }
let client: ProClient = new ProClient();

...

// Login to Ionic Pro
client.login("username@test.com", "myAwesomePassword123").then((user: ProUser) => {
  console.log("Logged in", user);
});

...

// List apps you have access to
client.resource.apps.list().then((res: any) => {
  console.log("My apps:", res);
}, (err: any) => {
  console.error("Error getting apps:", err);
});
```