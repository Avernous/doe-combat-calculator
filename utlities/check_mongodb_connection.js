module.exports = function(mongoose){
    let readyState = mongoose.connection.readyState;
    let message;
    switch (readyState) {
      case 0:
        message = "Disconnected"
        break;
      case 1:
        message = "Connected"
        break;
      case 2:
        message = "Connecting"
        break;
      case 3:
        message = "Disconnecting"
        break;
    }
    return message;
  };