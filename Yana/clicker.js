
  document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.querySelector('.t-btn');
    const closeButton = document.querySelector('.c-btn');
    const settingsPanel = document.getElementById('pnlSettings');

    settingsButton.addEventListener('click', (e) => {
      e.preventDefault(); 
      settingsPanel.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
      settingsPanel.style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('edit-username').addEventListener('click', () => {
      document.getElementById('username-edit').style.display = 'block';
      document.getElementById('username-input').value = document.getElementById('username').textContent;
    });

    document.getElementById('save-username').addEventListener('click', () => {
      const newName = document.getElementById('username-input').value.trim();
      if (newName) {
        document.getElementById('username').textContent = newName;
        document.getElementById('username-edit').style.display = 'none';
      }
    });

    document.getElementById('edit-email').addEventListener('click', () => {
      document.getElementById('email-edit').style.display = 'block';
      document.getElementById('email-input').value = document.getElementById('email').textContent;
    });

    document.getElementById('save-email').addEventListener('click', () => {
      const newEmail = document.getElementById('email-input').value.trim();
      const errorMsg = document.getElementById('email-error');
      if (newEmail.includes('@')) {
        document.getElementById('email').textContent = newEmail;
        document.getElementById('email-edit').style.display = 'none';
        errorMsg.style.display = 'none';
      } else {
        errorMsg.style.display = 'block';
      }
    });
    document.getElementById('edit-avatar').addEventListener('click', () => {
      document.getElementById('avatar-edit').style.display = 'block';
      document.getElementById('avatar-input').value = document.getElementById('avatar-img').src;
    });

    document.getElementById('save-avatar').addEventListener('click', () => {
      const newURL = document.getElementById('avatar-input').value.trim();
      if (newURL) {
        document.getElementById('avatar-img').src = newURL;
        document.getElementById('avatar-edit').style.display = 'none';
      }
    });
  });