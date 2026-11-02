// Початковий масив зображень (використовуємо якісні заглушки-посилання для демонстрації)
let images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1019/600/400"
];

// Масив описів для зображень (Завдання 3)
const descriptions = [
    "Краєвид річки та гори (Природа 1)",
    "Засніжена долина та небо (Природа 2)",
    "Вид на місто та міст (Архітектура)"
];

const gallery = document.getElementById("gallery");
const mainImage = document.getElementById("mainImage");

// Функція рендерингу галереї на сторінці
function renderGallery(imageArray) {
    gallery.innerHTML = ""; // Очищуємо контейнер перед рендером
    
    imageArray.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        
        // Додаємо опис при наведенні (Завдання 3)
        img.title = descriptions[index] || `Зображення ${index + 1}`;
        
        // Функція попереднього перегляду великого зображення (Завдання 4)
        img.onclick = function() {
            mainImage.src = src;
        };
        
        gallery.appendChild(img);
    });

    // Встановлюємо перше зображення як головне за замовчуванням, якщо масив не порожній
    if (imageArray.length > 0 && !mainImage.src) {
        mainImage.src = imageArray[0];
    }
}

// Запуск початкового відображення галереї (Завдання 2)
document.addEventListener("DOMContentLoaded", () => {
    // Зберігаємо дані в Local Storage при першому завантаженні (Завдання 8)
    localStorage.setItem("galleryImages", JSON.stringify(images));
    
    renderGallery(images);
});

// Завдання 5: Кнопка для очищення галереї
document.getElementById("clearGallery").onclick = function() {
    gallery.innerHTML = "";
    mainImage.src = "";
    mainImage.alt = "Галерея порожня";
};

// Завдання 6: Сортування зображень за алфавітом
document.getElementById("sortImages").onclick = function() {
    images.sort();
    renderGallery(images);
};

// Завдання 8 та 9: Робота з Local Storage (Кнопка завантаження збережених даних)
document.getElementById("loadStorage").onclick = function() {
    const savedImages = JSON.parse(localStorage.getItem("galleryImages"));
    if (savedImages && savedImages.length > 0) {
        images = savedImages;
        renderGallery(images);
        alert("Зображення успішно завантажено з Local Storage!");
    } else {
        alert("У Local Storage немає збережених зображень.");
    }
};

// Завдання 7: Приклад додаткового використання jQuery після завантаження DOM
$(document).ready(function() {
    console.jqueryLoaded = "jQuery успішно ініціалізовано для роботи з галереєю!";
    console.log($(document).jqueryLoaded);
});