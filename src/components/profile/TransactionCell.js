import React, { useState } from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { View, Text, Image } from "react-native";
import colors from "../../constants/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { dateFormat } from "../../extras/utils";

const TransactionCell = ({
  amount,
  pan,
  Ttype,
  Tdate,
  Tdesc,
  holderName,
  holderAccNo,
  ifsc,
  status,
}) => {
  const [click, setClick] = useState("-90deg");

  return (
    <View>
      <Collapse
        style={{
          marginLeft: 0,
          marginRight: 0,
          borderRadius: 8,
          marginTop: 10,
          paddingHorizontal: 15,
          paddingVertical: 4,
          backgroundColor: "#1C1C1E80",
        }}
        onToggle={() => setClick(click == "-90deg" ? "-270deg" : "-90deg")}
      >
        <CollapseHeader>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-between',
              }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                <MaterialCommunityIcons
                name="square-edit-outline"
                color={
                  Ttype == "DEBIT"
                    ? "red"
                    : Ttype === "CREDIT"
                    ? colors.GREEN
                    : colors.PRIMARY
                }
                size={18}
              />
               <Text
                style={{
                  color: 'white',
                    // Ttype == "DEBIT"
                    //   ? "red"
                    //   : Ttype === "CREDIT"
                    //   ? colors.GREEN
                    //   : colors.PRIMARY,
                  padding: 10,
                  fontWeight: "bold",
                  marginBottom: 3,
                  fontSize: 16,
                }}
              >
                {Ttype == "DEBIT" ? 'Withdraw' : 'Deposit'}
              </Text>

                </View>
              <Text
                style={{
                  color: 'white',
                    // Ttype == "DEBIT"
                    //   ? "red"
                    //   : Ttype === "CREDIT"
                    //   ? colors.GREEN
                    //   : colors.PRIMARY,
                  padding: 10,
                  fontWeight: "bold",
                  marginBottom: 3,
                  fontSize: 16,
                }}
              >
                {dateFormat(Tdate)}
              </Text>
              
              <Text
                style={{
                  color: 'white',
                    // Ttype == "DEBIT"
                    //   ? "red"
                    //   : Ttype === "CREDIT"
                    //   ? colors.GREEN
                    //   : colors.PRIMARY,
                  marginRight: 20,
                  fontWeight: "bold",
                  letterSpacing: 0.3,
                  fontSize: 18,
                }}
              >
                ₹{amount}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/prev.png")}
                style={{
                  transform: [{ rotate: click }],
                }}
              />
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{
            padding: 8,
            paddingTop: 0
          }}
        >
          <View
            style={{
              marginLeft: 0,
            }}
          >
            {Tdate && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                Transaction date: {dateFormat(Tdate)}
              </Text>
            )}
            {Tdesc && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                Transaction details: {Tdesc}
              </Text>
            )}
            {status && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                Status: {status}
              </Text>
            )}
            {holderAccNo && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                Account No: {holderAccNo}
              </Text>
            )}
            {ifsc && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                IFSC No: {ifsc}
              </Text>
            )}

            {holderName && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                Holder name: {holderName}
              </Text>
            )}
            {pan && (
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "bold",
                }}
              >
                PAN No: {pan}
              </Text>
            )}
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default TransactionCell;
