let slideIndex = 1; // Zmienna przechowująca indeks aktualnego slajdu, ustawiona na pierwszy slajd
showSlides(slideIndex); // Wywołanie funkcji showSlides() z aktualnym indeksem

// Funkcja do przesuwania slajdów
function plusSlides(n) {
    showSlides(slideIndex += n); // Przesunięcie indeksu o wartość n i wywołanie funkcji showSlides() z nowym indeksem
}

// Funkcja do aktualizacji bieżącego slajdu
function currentSlide(n) {
    showSlides(slideIndex = n); // Ustawienie indeksu na wartość n i wywołanie funkcji showSlides() z nowym indeksem
}

// Funkcja do wyświetlania slajdów
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Pobranie wszystkich elementów HTML o klasie "mySlides"
    let dots = document.getElementsByClassName("dot"); // Pobranie wszystkich elementów HTML o klasie "dot"
    if (n > slides.length) {slideIndex = 1} // Jeśli indeks jest większy niż liczba slajdów, ustaw indeks na pierwszy slajd
    if (n < 1) {slideIndex = slides.length} // Jeśli indeks jest mniejszy niż 1, ustaw indeks na ostatni slajd
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ukryj wszystkie slajdy
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Usuń klasę "active" ze wszystkich kropek nawigacyjnych
    }
    slides[slideIndex-1].style.display = "block"; // Wyświetl bieżący slajd
    dots[slideIndex-1].className += " active"; // Dodaj klasę "active" do bieżącej kropki nawigacyjnej
}
