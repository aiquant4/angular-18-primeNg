# JSON Server CORS Configuration Guide

This guide explains how to configure JSON Server to handle CORS (Cross-Origin Resource Sharing) when working with Angular applications.

## Prerequisites
- Node.js and npm installed
- JSON Server installed globally (`npm install -g json-server`)
- An Angular application running on localhost:4200

## Setup Steps

### 1. Create Configuration File

Create a new file called `json-server.json` in your project root:

```json
{
  "port": 3000,
  "watch": true,
  "middlewares": "./json-server-middlewares.js"
}
```

### 2. Create Middleware File

Create a new file called `json-server-middlewares.js` in your project root:

```javascript
module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, baggage');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
};
```

### 3. Update Package.json

Add the following script to your `package.json`:

```json
{
  "scripts": {
    "json-server": "json-server --watch db.json --config json-server.json"
  }
}
```

### 4. Create Database File

Create a `db.json` file in your project root with your initial data structure:

```json
{
  "users": [],
  "posts": []
}
```

### 5. Start the Server

```bash
npm run json-server
```

## Alternative Approaches

### Using Command Line Flags

If you prefer not to create configuration files, you can use command-line flags:

```json
{
  "scripts": {
    "json-server": "json-server --watch db.json --no-cors"
  }
}
```

### Using Proxy Configuration

For development environments, you can also use Angular's proxy configuration:

1. Create `proxy.conf.json`:
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  }
}
```

2. Update `angular.json`:
```json
{
  "architect": {
    "serve": {
      "options": {
        "proxyConfig": "proxy.conf.json"
      }
    }
  }
}
```

## Troubleshooting

If you encounter CORS issues:

1. Verify JSON Server is running (`http://localhost:3000`)
2. Check browser console for specific CORS errors
3. Ensure all configuration files are in the correct locations
4. Restart both JSON Server and your Angular application
5. Clear browser cache if needed

## Common Issues and Solutions

### Issue 1: CORS Still Not Working
Try adding additional headers to the middleware:
```javascript
res.header('Access-Control-Allow-Credentials', 'true');
```

### Issue 2: Options Requests Failing
Ensure the preflight request handler is correctly implemented in the middleware.

### Issue 3: Unable to Start Server
Check if port 3000 is already in use and modify the port in `json-server.json` if needed.

## Best Practices

1. Always use environment-specific configurations
2. Keep sensitive data out of version control
3. Use proper error handling in your application
4. Implement proper security measures in production

## Production Considerations

JSON Server is intended for development and prototyping. For production:
- Use a proper backend server
- Implement proper authentication
- Use secure CORS policies
- Consider using a production-ready database

## Additional Resources

- [JSON Server Documentation](https://github.com/typicode/json-server)
- [CORS MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Angular Proxy Configuration](https://angular.io/guide/build#proxying-to-a-backend-server)