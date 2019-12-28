import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import GeneralStatusBarColor from "../../components/GeneralStatusBarColor/GeneralStatusBarColor";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      email: "johndoe@gmail.com",
      number: "1234567890"
    };
  }

  // handleLogout = async () => {
  //   await Auth.signOut();
  //   const { navigation } = this.props;
  //   navigation.navigate("Login");
  // };

  render() {
    const { name, email, number } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <GeneralStatusBarColor
          backgroundColor="#253037"
          barStyle="light-content"
        />
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.userInfo}>{email} </Text>
          <Text style={styles.userInfo}>{number}</Text>
        </View>

        <View
          style={{ marginLeft: 40, marginBottom: 25, marginTop: 20, flex: 5 }}
        >
          <View>
            <View>
              <Text>Name</Text>
              <TextInput
                keyboardType="email-address"
                value={name}
                onChangeText={this.setEmail}
                style={styles.textField}
                placeholder="E-mail"
                placeholderTextColor="#696969"
              />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput
                keyboardType="email-address"
                value={email}
                onChangeText={this.setEmail}
                style={styles.textField}
                placeholder="E-mail"
                placeholderTextColor="#696969"
              />
            </View>
            <View>
              <Text>Registered Phone Number</Text>
              <TextInput
                keyboardType="email-address"
                value={number}
                onChangeText={this.setEmail}
                style={styles.textField}
                placeholder="E-mail"
                placeholderTextColor="#696969"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.saveButton}>
            <Text
              style={{
                alignSelf: "center",
                padding: 15,
                fontSize: 18
              }}
            >
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default Profile;