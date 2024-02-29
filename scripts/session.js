// Function to generate a unique session ID
function generateSessionId() {
  // Generate a UUID or any other unique identifier
  // Example:
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

// Function to set the session cookie
function setSessionCookie(sessionId, expirationDays = 1) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);

  const cookieOptions = {
      path: '/',
      expires: expirationDate.toUTCString(),
      sameSite: 'Strict'
  };

  document.cookie = `sessionId=${sessionId}; ${Object.entries(cookieOptions).map(([key, value]) => `${key}=${value}`).join('; ')}`;
}

// Function to get the session cookie
function getSessionCookie() {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'sessionId') {
          return value;
      }
  }
  return null;
}

// Function to check if session cookie exists
function checkSessionCookie() {
  return getSessionCookie() !== null;
}

// Function to handle session management
function manageSession() {
  if (!checkSessionCookie()) {
      const sessionId = generateSessionId();
      setSessionCookie(sessionId);
  }
  // Additional session management logic can be added here
}

// Call the function to manage session when the page loads
window.onload = manageSession;
