/*
    select elements
*/
const toggle_theme_button = document.querySelector('[data_toggle_theme]');
const restart = document.querySelector('[data_restart]');
const history = document.querySelector('[data_history]');
const result = document.querySelector('[data_result]');
const input = document.querySelector('[data_input]');
const text = document.querySelector('[data_text]');

// 
const texts = [
    'JavaScript é uma linguagem de programação.',
    'Python é uma linguagem de programação.',
    'Java é uma linguagem de programação.',
    'CSS é uma linguagem de estilização.',
    'PHP é uma linguagem de programação.',
    'C# é uma linguagem de programação.',
    'HTML é uma linguagem de marcação.',
];

/*
    functions
*/
// 
const newText = () => {
    const index = Math.floor(Math.random() * texts.length);
    text.textContent = texts[index];
};

// 
const updateTest = () => {
    start();
};

// 
const start = () => {
    const test_status = JSON.parse(localStorage.getItem('test_in_progress'));

    if (!test_status) {
        localStorage.setItem('start_time', new Date().getTime());
        localStorage.setItem('test_in_progress', true);
    };
};

/*
    events
*/
// 
input.addEventListener('keyup', updateTest);

newText();