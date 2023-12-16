function openForm(button) {
    const formHTML = `
    <div class="form-container" style="height: 16.5em;">
        <form id="catForm">
            <label for="name">Ваше имя:</label>
            <input type="text" id="name" name="name" required>
                <label for="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                        <button class="btn" type="button" onclick="submitForm(); closePopup(this.closest('.popup'))" style="margin-top: 10px; display: block;">Отправить</button>
                    </form>
                </div>
                `;

    button.closest('.swiper-slide').innerHTML = formHTML;
}

function validatePhone(phone) {
    var phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,9}?$/;

    return phoneRegex.test(phone);
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if (!validatePhone(phone)) {
        alert("Пожалуйста, введите корректный номер телефона");
        return;
    }

    if (!validateEmail(email)) {
        alert("Пожалуйста, введите корректный адрес электронной почты");
        return;
    }

    if (!name.trim()) {
        alert("Пожалуйста, введите ваше имя");
        return;
    }

    location.reload();
}

function openPopup(popup) {
    popup.classList.add('show');
}

function closePopup(popup) {
    if (popup) {
        popup.classList.remove('show');
    }
}
