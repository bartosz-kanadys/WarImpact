# WarImpact – Global Commodity Prices & Conflict Correlation

WarImpact to interaktywna aplikacja webowa prezentująca historyczne dane cen surowców w kontekście globalnych konfliktów zbrojnych. Projekt pozwala użytkownikowi na analizę wpływu wojen i konfliktów na ceny podstawowych surowców takich jak aluminium, kawa, miedź, kukurydza, bawełna, gaz, ropa, cukier i pszenica.

Dla podwyższenia oceny końcowej, można oddać zrobione laboratoria, lecz nie są one wymagane.

# **Funkcjonalności:**
- Interaktywny wykres przedstawiający zmiany cen wybranego surowca na przestrzeni lat.
- Zaznaczenie istotnych konfliktów zbrojnych na osi czasu (np. wojna w Syrii, wojna na Ukrainie, wojna domowa w Sudanie).

# Części projektu

## Klient
- **Język programowania**: TypeScript
- **Framework**: React
- **Cechy**:
  - Udostępnianie danych o cenach surowców
  - Przedstawianie zmian cen surowców w postaci wykresów z zaznaczonymi konfliktami zbrojnymi

## Serwer
- **Język programowania**: JavaScript
- **Framework**: Express.js
- **Baza danych**: SQL
- **Features**:
  - Autoryzacja i auntetykacja za pomocą JWT
  - Pobieranie danych o cenach surowców i o konfliktach z zewnętrznego API i zapisywanie ich do bazy danych
  - Przekazywanie danych o cenach surowców i o konfliktach do klienta

## Database
- **Język**: SQL
- **Cechy**:
  - Przechowywanie danych o cenach surowców i o konfliktach
  - Przechowywanie danych użytkowników

## Zrzuty ekranu
- Strona główna
[![stronadomowa.jpg](https://i.postimg.cc/hvyPT3Ck/stronadomowa.jpg)](https://postimg.cc/y3RHznCj)
- Wykres cen 1
[![dane1.jpg](https://i.postimg.cc/25h6MG6W/dane1.jpg)](https://postimg.cc/065PJp75)
- Wykres cen 2
[![dane2.jpg](https://i.postimg.cc/2j25sVz0/dane2.jpg)](https://postimg.cc/F1kmcFkS)
- Dane cen surowców i konfliktów do pobrania
[![json.jpg](https://i.postimg.cc/bJRvNv1N/json.jpg)](https://postimg.cc/XGpWs42T)
- Rejestracja
[![rejestracja.jpg](https://i.postimg.cc/nrchst1K/rejestracja.jpg)](https://postimg.cc/ZB2Sg220)
