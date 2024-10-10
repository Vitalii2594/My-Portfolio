document.getElementById('pl-btn').addEventListener('click', function() {
    document.querySelectorAll('.pl').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.en, .ua').forEach(el => el.classList.add('hidden'));
});

document.getElementById('en-btn').addEventListener('click', function() {
    document.querySelectorAll('.en').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.pl, .ua').forEach(el => el.classList.add('hidden'));
});

document.getElementById('ua-btn').addEventListener('click', function() {
    document.querySelectorAll('.ua').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.pl, .en').forEach(el => el.classList.add('hidden'));
});
