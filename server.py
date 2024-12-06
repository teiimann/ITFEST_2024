# server.py
import http.server
import socketserver

PORT = 8000  # Порт сервера
DIRECTORY = "shared"  # Папка, откуда будут раздаваться файлы

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
    print(f"Serving files from '{DIRECTORY}' at http://localhost:{PORT}")
    httpd.serve_forever()
