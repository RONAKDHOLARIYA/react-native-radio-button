import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function RadioButton({
  data = [],
  selected = "",
  containerStyle = {},
  onChange = () => {},
  disabled = false,
  color = "red",
  size = 18,
  textStyle = {},
}) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
        },
        containerStyle,
      ]}
    >
      {data.map((d, i) => {
        return (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              activeOpacity={0.9}
              onPress={() => {
                onChange(d.value);
              }}
              style={{
                borderRadius: size / 2,
                height: size,
                width: size,
                borderColor: color,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              {selected == d.value && (
                <View
                  style={{
                    backgroundColor: color,
                    height: size - 8,
                    width: size - 8,
                    borderRadius: (size - 8) / 2,
                  }}
                />
              )}
            </TouchableOpacity>
            <Text style={[{ fontSize: 16, marginLeft: 5 }, textStyle]}>
              {d.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
