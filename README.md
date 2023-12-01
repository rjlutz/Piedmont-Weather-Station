# On-Campus Weather Station API Connector

## Overview

This repository contains code for an AWS Lambda function that connects to the API of an on-campus weather station. The function fetches current weather data and formats it into an HTML response. This documentation provides insights into the code structure, libraries used, and how to integrate it with AWS Lambda.

## Code Structure

The main code file is `index.js`, written in JavaScript. It utilizes the `https` library for making HTTPS requests. The Lambda function is exported as `handler` and is designed to be triggered by an event (not specified in this code snippet).

### Dependencies

- **https:** A built-in Node.js library for making secure HTTPS requests.

## Configuration

Before deploying the code, make sure to replace the placeholder values with your actual API key, API secret, and station ID in the `apiKey`, `apiSecret`, and `stationId` variables, respectively.

```javascript
const apiKey = 'your-api-key';
const apiSecret = 'your-api-secret';
const stationId = 'your-station-id';
```

## AWS Lambda Integration

1. **Create an AWS Lambda Function:**
   - In the AWS Lambda console, create a new function.
   - Upload the code by either pasting it into the inline code editor or uploading a ZIP file.

2. **Set Environment Variables:**
   - Add environment variables for `apiKey`, `apiSecret`, and `stationId` with your actual values.

3. **Configure Trigger:**
   - Configure an event trigger for the Lambda function based on your use case (e.g., CloudWatch Events, API Gateway, etc.).

4. **Set Permissions:**
   - Ensure that the Lambda execution role has the necessary permissions to make HTTPS requests and write CloudWatch logs.

## HTML Response

The code generates an HTML response with basic styling and weather data points. Customize the HTML structure and add more data points based on the available weather station API documentation.

## Logging

The Lambda function logs successful data retrieval and errors to CloudWatch Logs. Check the logs for troubleshooting and debugging.

## Notes

- Ensure the Lambda function has internet access to connect to the on-campus weather station API.
- Customize the HTML response according to your preferences and requirements.

Feel free to explore and adapt the code to suit your specific needs and integrate additional features or data points from the weather station API.
