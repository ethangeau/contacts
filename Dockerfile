FROM node:16.13.2
WORKDIR /home/azureuser/contacts
COPY . .
RUN npm i
EXPOSE 3000
CMD npm start