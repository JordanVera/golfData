import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a href="https://www.jordanvera.com">Jordan Vera</a>
        </small>
      </div>
    </footer>
  );
}
