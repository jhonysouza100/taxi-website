FROM node:23.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

# Instalar libssl1.1 (si está disponible para tu distribución)
#RUN apt-get update && apt-get install -y libssl1.1

COPY . .

# Define las variables de entorno
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

ARG NEXT_PUBLIC_PHONE_NUMBER
ENV NEXT_PUBLIC_PHONE_NUMBER=$NEXT_PUBLIC_PHONE_NUMBER

ARG NEXT_PUBLIC_DEVELOPER_URL
ENV NEXT_PUBLIC_DEVELOPER_URL=$NEXT_PUBLIC_DEVELOPER_URL

ARG NEXT_PUBLIC_SITE_VERIFICATION
ENV NEXT_PUBLIC_SITE_VERIFICATION=$NEXT_PUBLIC_SITE_VERIFICATION

ENV NODE_ENV=production

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]