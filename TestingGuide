# On-Campus Weather Station Testing Guide

## Overview

This testing guide provides step-by-step instructions for testing the On-Campus Weather Station AWS Lambda function. The Lambda function connects to the weather station API, fetches current weather data, and formats it into an HTML response. Follow the outlined steps to ensure proper integration and functionality.

## Testing Steps

### 1. Update Lambda Code

Update the Lambda function code in the AWS Lambda console with the latest version. Make any necessary modifications or customizations to the code as per your requirements.

### 2. Refresh Page in Google Chrome or Microsoft Edge

Open either Google Chrome or Microsoft Edge and navigate to the page where the weather data is displayed. Perform a hard refresh to ensure that caching does not keep the page content the same.

**Hard Refresh Shortcut:**
- Google Chrome: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
- Microsoft Edge: `Ctrl + F5` or `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)

### 3. Verify Page Update

After the hard refresh, verify that the weather data on the page has been updated. The timestamp displayed should reflect the current time, indicating that the Lambda function successfully fetched and updated the weather information.

### 4. Periodic Updates

The Lambda function is designed to trigger periodically. Monitor the page for automatic updates every 5 minutes. The timestamp and weather data should consistently refresh to reflect the most recent information from the weather station.

## Customization and Troubleshooting

### Customizing HTML Response

If you wish to customize the HTML structure or add more data points, modify the HTML response in the Lambda function code. Customize the styling and content based on your preferences.

### Logging and Troubleshooting

Check the CloudWatch Logs for the Lambda function to review any logs related to successful data retrieval or errors. Address any issues or errors encountered during the testing process.

## Devices Tested

This On-Campus Weather Station has been tested successfully on the following devices:

- iPhone 11
- Google Pixel 5
- Samsung Galaxy S23 Ultra
- Windows 10
- Windows 11
- macOS

Ensure compatibility with your specific device and operating system for an optimal user experience.

Feel free to adapt the testing guide and Lambda function code to suit your project's unique requirements and integrate additional features from the weather station API. Happy testing!
