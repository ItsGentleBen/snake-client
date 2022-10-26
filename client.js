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
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect, }