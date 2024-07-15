document.addEventListener('DOMContentLoaded', () => {
  
    document.body.classList.add('fade-in');

  
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('お問い合わせありがとうございます！');
            document.querySelector('form').reset(); 
        } else {
            alert('全てのフィールドを記入してください。');
        }
    });


    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.href;

            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    });
});
