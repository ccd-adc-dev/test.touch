FROM    mhart/alpine-node

RUN     npm install -g http-server

# WORKDIR /tests

# ADD     ./    /tests

# The default port of the application
EXPOSE  8080

CMD ["http-server", "--cors", "-p8080", "/tests"]
