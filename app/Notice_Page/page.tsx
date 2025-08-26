'use client';

export default function MovingMessage() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-content">🔧 MYYENI Navbar</div>
      </nav>

      <div className="container">
        <div className="message">
          Welcome to MYYENI, This Page is Under-Development!!!!
        </div>
      </div>

      <style jsx>{`
        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
          font-weight: bold;
          z-index: 999;
        }

        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f0f0f0;
          padding-top: 60px; /* to avoid hiding behind navbar */
          box-sizing: border-box;
        }

        .message {
          font-size: 2rem;
          font-weight: bold;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(5px, 5px);
          }
          50% {
            transform: translate(0px, 10px);
          }
          75% {
            transform: translate(-5px, 5px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      `}</style>
    </>
  );
}
