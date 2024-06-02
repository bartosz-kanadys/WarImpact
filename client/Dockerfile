# Użyj oficjalnego obrazu Node.js jako bazowego
FROM node:22-alpine

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj plik package.json oraz package-lock.json do katalogu roboczego
COPY package*.json .

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików aplikacji
COPY . .

# Eksponuj port, na którym aplikacja będzie działać
EXPOSE 80

# Zdefiniuj komendę startową dla kontenera
CMD ["npm","run","dev"]
