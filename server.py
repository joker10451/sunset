from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class NoCacheHTTPHandler(SimpleHTTPRequestHandler):
    def send_response_only(self, code, message=None):
        """Send the response header only."""
        super().send_response_only(code, message)
        if code == 200:
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')

    def end_headers(self):
        """Send the blank line ending the MIME headers."""
        if not self.close_connection:
            self.send_header('Connection', 'keep-alive')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, NoCacheHTTPHandler)
    print('Starting server on port 8000...')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nShutting down server...')
        httpd.server_close()
