const user = {
    nickname: "Tukarev_N",
    name: "Николай",
    lastName: "Тукарев",
    mail: "tukarev@mail.ru",
    birthday: "11.03.1987",
    sex: "мужской",
    phone: "+79650040444"
}

const fetchAll = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(user);
    }, 1)
});

export default {
    fetchAll
}