// import React from "react";
// import { Text, Platform, StyleSheet } from "react-native";

// export const typography = () => {
//   const oldTextRender = Text.render;

//   Text.render = function (...args) {
//     const origin = oldTextRender.call(this, ...args);
//     const children = origin.props.children;
   
//     if (typeof children === "object") {
//       return React.cloneElement(origin, {
//         children: React.cloneElement(children, {
//           style: [{ fontFamily: "SFPro-Medium" }, children?.props?.style],
//         }),
//       });
//     }

//     return React.cloneElement(origin, {
//       style: [{ fontFamily: "SFPro-Medium" }, origin.props.style],
//     });
//   };
// };

// const styles = StyleSheet.create({
//   defaultText: {
//     fontFamily: "SFPro-Medium",
//   },
// });
