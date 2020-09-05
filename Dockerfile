FROM node:12.18-alpine

# Crear directorio de trabajo
RUN mkdir -p /opt/app

# Crear los directorios de la aplicacion
RUN mkdir -p /opt/app/client
RUN mkdir -p /opt/app/api

#############################
# Configuracion del cliente #
#############################
WORKDIR /opt/app/client

# Instala los paquetes existentes en el package.json
COPY client/package.json .
RUN npm install --quiet

# Copia el cliente
COPY client/ .

#Construye el cliente
RUN npm run build

#############################
# Configuracion del api #
#############################
WORKDIR /opt/app/api

# Instala los paquetes existentes en el package.json
COPY api/package.json .
RUN npm install --quiet

# Copia el api
COPY api/ .

# Expone la aplicación en el puerto 4000
EXPOSE 4000
CMD npm run deploy