
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, {delay: 1500})
    });
    var notEmplErr = toastList[0];

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    var currentModal = 0;
    var modalText = ["Голубь:Дикая и одомашненная птица, преимущественно с серовато-голубым или белым оперением и большим зобом." +
    `  <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Это птичка">Подсказка</a>`
        ,
        "Воробей: Маленькая серая птичка из семейства вьюрковых." +
        ` <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Это птичка">Подсказка</a>`
        ,
        "Орел: Орёл символизирует власть, господство, верховенство и прозорливость (государственную прозорливость). В языческие, античные времена орёл служил атрибутом и символом божества или монарха." +
        `<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Это птичка">Подсказка</a>`
        ,
        "Павлин: Удлинённый хвост павлинов плоский, в то время как у большинства фазановых — крышеобразный. Благодаря пышному, распускаемому веером глазчатому «хвосту» павлин известен как самая красивая птица среди курообразных." +
        `<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Это птичка">Подсказка</a>`
        ,
        "Колибри: Колибри обладают ярким оперением, часто с металлическим блеском. Его цвет зависит от микроструктуры перьев и меняется при разном освещении. У некоторых представителей семейства может быть хорошо выраженный хохол или своеобразный воротник." +
        `<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Это птичка">Подсказка</a>`
    ]
    var modalCount = modalText.length;
    var exampleModal = document.getElementById('exampleModal')
    function showInfo(i) {
        if(i >= 0) i = i % modalCount;
        else i = modalCount - 1;
        var modalParagraph = exampleModal.querySelector('.modal-body');
        let text = modalText[i];
        modalParagraph.innerHTML = text
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
        currentModal = i;
    }
    exampleModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget    
        let num = button.getAttribute('data-bs-num')
        showInfo(num);
    });
    exampleModal.addEventListener("keydown", event => {
        if (event.code === "ArrowLeft") {
            showInfo(currentModal - 1);
            //перекл влево;
        } else if (event.code === "ArrowRight") {
            showInfo(currentModal + 1);
            //перекл вправо;
        }
    });
    $(document).ready(function() {
        // При клике на кнопку, открываем модальное окно
        $("#myBtn").click(function() {
            $("#myModal").css("display", "block");
        });

        // При клике на крестик, закрываем модальное окно
        $(".close").click(function() {
            $("#myModal").css("display", "none");
        });

        // При клике вне модального окна, закрываем его
        $(window).click(function(event) {
            if (event.target.id == "myModal") {
                $("#myModal").css("display", "none");
            }
        });
    });