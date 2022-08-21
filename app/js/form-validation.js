$("#main-form").validate({
    rules: {
        email: {
            required:true,
            email:true
        },
        name: {
            required: true,
            minLength:3
            }
        },
        password: {
            required:true,
            password: true,
            minLength:3
        },
        phone: {
            required:true,
            number:true,
            phone:true,
            minLength:3
        },
    messages: {
        email: {
            required: "Поле email обязательно для заполнения"
        },
        name: {
            required: "Имя должно быть заполнено",
            minLength: "Длина должна быть более 3-х символов"
        },
        password: {
            required: "Пароль обязателен для заполнения",
            minLength: "Длина должна быть более 3-х символов "
        },
        phone: {
            required: "Номер телефона обязателен для заполнения",
            minLength: "Длина должна быть более 3-х символов"
        }
    }
});
