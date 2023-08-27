from flask import Flask, request, jsonify, send_file, render_template
import requests
from bs4 import BeautifulSoup
import logging  
from flask_cors import CORS

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/image-details', methods=['POST', 'GET'])
def image_details_route():
    logging.debug(f"Received request: {request.method} {request.url}")

    if request.method == 'POST':
        url = request.form.get('url')
    elif request.method == 'GET':
        url = request.args.get('url')
        
    logging.debug(f"URL from the request: {url}")

    if url:
        try:
            r = requests.get(url)
        except Exception as e:
            logging.error(f"Failed to fetch the URL: {e}")
            return jsonify({'message': 'Failed to fetch the URL'}), 500
        
        soup = BeautifulSoup(r.text, 'html.parser')
        images = soup.findAll('img')
        images_with_url = [{'src': image.get('src')} for image in images]
        return jsonify({'image_count': len(images_with_url), 'image_details': images_with_url})
    else:
        logging.error("Invalid URL!")
        return jsonify({'message': 'Invalid URL!'}), 400


if __name__ == '__main__':
    app.run()
