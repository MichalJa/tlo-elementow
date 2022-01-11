
const setBackground = setP => {
    document.querySelector('.redP').style.backgroundColor = 'red';
    document.querySelector('.yellowP').style.backgroundColor = 'yellow';
};
document.getElementById('btn').addEventListener('click', setBackground);
