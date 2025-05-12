'use client';

export default function MovingMessage() {
  return (
    <div className="container">
      <div className="message">Welcome to MYYENI, This Page is Under-Development!!!!</div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f0f0f0;
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
    </div>
  );
}
