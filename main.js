const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-glyph');
  const errorModal = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');

  errorModal.classList.add('hidden'); // Hide the error modal initially

  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (button.textContent === EMPTY_HEART) {
            button.textContent = FULL_HEART;
            button.classList.add('activated-heart');
          } else {
            button.textContent = EMPTY_HEART;
            button.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          errorMessage.textContent = error;
          errorModal.classList.remove('hidden');
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
