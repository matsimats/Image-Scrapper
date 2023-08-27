Image Scraper - A Flask Web Application
This Flask-based web application is designed to scrape image URLs from a given website, providing valuable insights into the media content used on the site. The application returns a JSON object containing the number of images found and their corresponding URLs.

Features:
GET and POST Support: The application allows both GET and POST requests for added flexibility.
Error Handling: Efficient error handling to address network issues and invalid URLs.
Cross-Origin Support: The Flask-CORS package is integrated to handle CORS, allowing API access from various origins.
Detailed Logging: In-built logging to debug and keep track of requests and potential issues.
Technologies Used:
Flask: Web framework
BeautifulSoup: HTML parsing
Requests: HTTP requests
Flask-CORS: Cross-Origin Resource Sharing
Python Logging: Debugging and logging
How to Run:
Clone the repository.
Install required packages: pip install -r requirements.txt
Run app.py: python app.py
Visit http://localhost:5000 to access the application.
Endpoints:
/: Root endpoint that renders the index.html template.
/image-details: Endpoint to POST/GET a URL for scraping image details.
Error Codes:
400: Invalid URL
500: Failed to fetch the URL
This application is ideal for researchers, data analysts, and developers who want to quickly get an overview of the image content on any website. Feel free to contribute and improve its functionality!
