FROM ubuntu

ENV TZ="America/Bogota"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update 
RUN apt update -y

RUN apt install git -y
RUN apt install nodejs -y
RUN apt install npm -y

RUN mkdir server
WORKDIR /home/server
RUN git clone https://github.com/DkSanjed/Laboratorio-1-Distribuidos.git

WORKDIR /home/server/Laboratorio-1-Distribuidos/servidor
RUN npm install
RUN npm install pm2 -g

EXPOSE 3000
CMD ["pm2", "start", "index.js"]