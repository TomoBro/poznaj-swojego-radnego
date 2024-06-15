# Poznaj swojego radnego

"Poznaj swojego radnego" to strona internetowa umożliwiająca mieszkańcom Warszawy łatwy dostęp do informacji na temat działalności radnych miasta oraz poszczególnych dzielnic. Projekt ma na celu zwiększenie transparentności działań radnych oraz zaangażowanie obywateli w życie lokalnej społeczności.

## Spis treści

1. [Funkcjonalności](#funkcjonalności)
2. [Technologie](#technologie)
3. [Instalacja](#instalacja)
4. [Uruchomienie](#uruchomienie)
5. [Struktura katalogów](#struktura-katalogów)
6. [Wkład](#wkład)
7. [Licencja](#licencja)

## Funkcjonalności

- **Baza danych radnych**: Szczegółowe profile radnych z informacjami kontaktowymi, biografiami i pełnionymi funkcjami.
- **Monitorowanie aktywności**: Informacje o głosowaniach, projektach uchwał i uczestnictwie w sesjach.
- **Interaktywna mapa**: Wizualizacja okręgów wyborczych oraz radnych je reprezentujących.
- **Komentarze i oceny**: Możliwość oceniania pracy radnych oraz dodawania komentarzy przez mieszkańców.
- **Powiadomienia i alerty**: Subskrypcja powiadomień o nowych działaniach radnych i ważnych wydarzeniach.
- **Edukacja obywatelska**: Zasoby edukacyjne na temat funkcjonowania samorządu terytorialnego.

## Technologie

### Backend

- Node.js
- Express.js
- PostgreSQL
- Sequelize (ORM)

### Frontend

- React.js
- CSS (z możliwością wykorzystania preprocesorów jak Sass)

### Inne

- Jest (testowanie)
- Docker (opcjonalnie, do konteneryzacji aplikacji)

## Instalacja

### Wymagania wstępne

- Node.js (v14 lub wyższa)
- PostgreSQL (v12 lub wyższa)
- Git

### Krok po kroku

1. Sklonuj repozytorium:
    ```sh
    git clone https://github.com/twoje-konto/poznaj-swojego-radnego.git
    cd poznaj-swojego-radnego
    ```

2. Backend:
    - Przejdź do katalogu backend:
      ```sh
      cd backend
      ```
    - Zainstaluj zależności:
      ```sh
      npm install
      ```
    - Skonfiguruj plik `.env` na podstawie `.env.example`:
      ```sh
      cp .env.example .env
      ```
    - Uruchom migracje bazy danych:
      ```sh
      npm run migrate
      ```

3. Frontend:
    - Przejdź do katalogu frontend:
      ```sh
      cd ../frontend
      ```
    - Zainstaluj zależności:
      ```sh
      npm install
      ```

## Uruchomienie

### Backend

1. Przejdź do katalogu backend:
    ```sh
    cd backend
    ```

2. Uruchom serwer:
    ```sh
    npm start
    ```

Serwer będzie dostępny na `http://localhost:5000`.

### Frontend

1. Przejdź do katalogu frontend:
    ```sh
    cd frontend
    ```

2. Uruchom aplikację:
    ```sh
    npm start
    ```

Aplikacja będzie dostępna na `http://localhost:3000`.

## Struktura katalogów

poznaj-swojego-radnego/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ ├── config/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── server.js
│ ├── tests/
│ ├── .env
│ ├── package.json
│ └── README.md
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── utils/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── setupTests.js
│ ├── .env
│ ├── package.json
│ └── README.md
│
├── docs/
│ ├── requirements.md
│ ├── architecture.md
│ ├── api_documentation.md
│ ├── user_manual.md
│ └── developer_guide.md
│
├── scripts/
│ ├── deploy.sh
│ ├── migrate_db.sh
│ └── seed_db.sh
│
└── README.md


## Wkład

Wszelki wkład w rozwój projektu jest mile widziany! Aby przyczynić się do rozwoju projektu, wykonaj poniższe kroki:

1. Sforkuj repozytorium
2. Utwórz nową gałąź (`git checkout -b feature/nazwa-funkcji`)
3. Wprowadź zmiany i zatwierdź je (`git commit -am 'Dodano nową funkcję'`)
4. Wypchnij gałąź (`git push origin feature/nazwa-funkcji`)
5. Utwórz nowy Pull Request

## Licencja

Ten projekt jest objęty licencją MIT - zobacz plik [LICENSE](LICENSE) aby uzyskać więcej informacji.
