FROM node:12.18-alpine

# Crear directorio de trabajo
RUN mkdir -p /opt/app

# Crear directorio de trabajo
WORKDIR /opt/app

# Instala los paquetes existentes en el package.json
COPY package.json .
RUN npm install --quiet

# Copia la Aplicación
COPY . .

# Expone la aplicación en el puerto 3000
EXPOSE 3000
CMD npm start