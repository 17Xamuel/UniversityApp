import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: true,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Requesting for camera permission </Text>
        </View>
      );
    }
    if (hasCameraPermission === false) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> No camera permission </Text>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!scanned && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, styles.container]}
          >
            <View style={styles.layerTop} />
            <View style={styles.layerCenter}>
              <View style={styles.layerLeft} />
              <View style={styles.focused} />
              <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom} />
          </BarCodeScanner>
        )}
        <View>
          {scanned && (
            <Button
              title="Scan QR"
              onPress={() =>
                this.setState({
                  scanned: false,
                })
              }
            />
          )}
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({
      scanned: true,
    });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}
const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layerTop: {
    flex: 0.75,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 0.75,
    backgroundColor: opacity,
  },
});
