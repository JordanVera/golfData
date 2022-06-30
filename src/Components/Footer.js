import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a href="https://tranquil-castle-40340.herokuapp.com/">Jordan Vera</a>
        </small>
      </div>
    </footer>
  );
}
