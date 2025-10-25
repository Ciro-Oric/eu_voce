const memories = document.querySelectorAll('.memory');
let current = 0;

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showMemory(index) {
  memories.forEach((memory, i) => {
    memory.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % memories.length;
  showMemory(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + memories.length) % memories.length;
  showMemory(current);
});
