document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notes = [];
    let isDragging = false;
    let offsetX, offsetY;
  
    function createNote() {
      const note = document.createElement('div');
      note.className = 'note';
  
      if (Math.random() < 0.5) {
        note.classList.add('dark');
      }
  
      const textarea = document.createElement('textarea');
      textarea.placeholder = 'Escribe aquí...';
  
      const deleteBtn = document.createElement('span');
      deleteBtn.className = 'delete-btn';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.addEventListener('click', function () {
        app.removeChild(note);
        const index = notes.indexOf(note);
        if (index !== -1) {
          notes.splice(index, 1);
        }
      });
  
      note.appendChild(deleteBtn);
      note.appendChild(textarea);
      app.appendChild(note);
      notes.push(note);
  
      note.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - note.getBoundingClientRect().left;
        offsetY = e.clientY - note.getBoundingClientRect().top;
      });
  
      document.addEventListener('mousemove', function (e) {
        if (isDragging) {
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;
  
          note.style.left = `${x}px`;
          note.style.top = `${y}px`;
        }
      });
  
      document.addEventListener('mouseup', function () {
        isDragging = false;
      });
    }
  
    createNote();
  
    addNoteBtn.addEventListener('click', function () {
      createNote();
    });
  });