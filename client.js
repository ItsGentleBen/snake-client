const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });
  
  //allows the server to send a message 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //when connects to server, gives name
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: IGB');
  })

    // //when connects to server, moves up
    // conn.on('connect', () => {
    //   setInterval(() => {
    //     conn.write('Move: up');
    //   }, 50);
    // });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect, }