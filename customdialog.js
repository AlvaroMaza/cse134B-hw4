var output = document.getElementById('result');
var dialog = document.getElementById("alert_dialog");
var dialog2 = document.getElementById("confirm_dialog");
var dialog3 = document.getElementById("prompt_dialog");



document.getElementById('alert').addEventListener('click', () => {
    setTimeout(() => {
        dialog.show();
    },0);
});

document.getElementById('ok').addEventListener('click', () => {
    setTimeout(() => {
        dialog.close();
    },0);
});

document.getElementById('confirm').addEventListener('click', () => {
    output.innerHTML = '';
    setTimeout(() => {
        dialog2.show();
    },0);
});

document.getElementById('conf_ok').addEventListener('click', () => {
    setTimeout(() => {
        output.innerHTML = 'The value returned by the confirm method is : True';
        dialog2.close();
    },0);
});

document.getElementById('conf_cancel').addEventListener('click', () => {
    setTimeout(() => {
        output.innerHTML = 'The value returned by the confirm method is : False';
        dialog2.close();
    },0);
});



document.getElementById('safe_prompt').addEventListener('click', () => {
    output.innerHTML = '';
    setTimeout(() => {
        dialog3.show();
    },0);
});

document.getElementById('prompt_ok').addEventListener('click', () => {
    setTimeout(() => {
        let safe_input = DOMPurify.sanitize(document.getElementById('prompt_input').value);
        if (safe_input!= ''){
        output.innerHTML = `Prompt result: ${safe_input}`;
        }
        else{
            output.innerHTML = `User didn’t enter anything`;
        };
        dialog3.close();
    },0);
});

document.getElementById('prompt_cancel').addEventListener('click', () => {
    setTimeout(() => {
        output.innerHTML = `User didn’t enter anything`;
        dialog3.close();
    },0);
});


