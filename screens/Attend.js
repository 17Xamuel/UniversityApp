// import React, { Component } from "react";
// import { Button, View } from "react-native";
// import { TextInput } from "react-native-paper";

// class Attend extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//     };
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <TextInput
//           mode="outlined"
//           label="Username"
//           value={this.state.username}
//         />
//       </View>
//     );
//   }
// }

// export default Attend;

import React, { Component } from "react";

class Attend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <QRCode value="http://awesome.link.qr" />;
  }
}

export default Attend;
