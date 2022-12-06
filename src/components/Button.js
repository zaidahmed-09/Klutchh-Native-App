import { View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Button = ({ onPress, title, isDisables, styles }) => {
  return (
    <Pressable
      onPress={onPress}
      disable={isDisables}
      style={{
        backgroundColor: "#FF326A",
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 4,
        margin: 15,
        opacity: isDisables ? 0.3 : 1,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "700",
          minHeight:44,
          fontFamily:"Inter-Bold",
          paddingTop:10
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
