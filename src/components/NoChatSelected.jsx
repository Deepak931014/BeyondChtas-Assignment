const NoChatSelected = () => {
  return (
    <div className="custom-bg-container">
      <div className="custom-bg-container-message">
        <h2 className="text-white bg-secondary px-3 py-1 rounded-5 bg-opacity-50 fs-6 position-fixed">
          Select a chat to start messaging
        </h2>
      </div>
    </div>
  );
};

export default NoChatSelected;
