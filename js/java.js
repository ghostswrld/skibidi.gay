function toggleInspector() {
    var inspector = document.getElementById('inspector');
    inspector.style.display = inspector.style.display === 'none' ? 'flex' : 'none';
}

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j'))) {
        toggleInspector();
        e.preventDefault();
    }
});

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);
