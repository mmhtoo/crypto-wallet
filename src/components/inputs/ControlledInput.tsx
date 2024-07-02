import React from 'react';
import {Control, FieldValues, Path, useController} from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  TextInput as RNTextInput,
} from 'react-native';
import {Text, TextInput, TextInputProps, useTheme} from 'react-native-paper';

type ControlledInputProps<T extends FieldValues> = TextInputProps & {
  label?: string;
  control?: Control<T>;
  fieldName: Path<T>;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: StyleProp<RNTextInput>;
  errorStyle?: TextStyle;
};

export default function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>,
) {
  const {
    label,
    control: propsControl,
    fieldName,
    labelStyle = {},
    inputStyle = {},
    errorStyle = {},
    ...otherProps
  } = props;
  const {fieldState, field} = useController({
    control: propsControl,
    name: fieldName,
  });
  const theme = useTheme();

  const defaultErrorStyle: TextStyle = {
    color: theme.colors.error,
    fontSize: 12,
  };
  return (
    <View style={styles.root}>
      <Text style={{...styles.labelStyle, ...labelStyle}}>{label}</Text>
      <TextInput
        {...otherProps}
        style={{...styles.input, ...inputStyle}}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        disabled={field.disabled}
        ref={field.ref}
        error={!!fieldState.error}
      />
      <Text style={{...defaultErrorStyle, ...errorStyle}}>
        {fieldState.error && fieldState.error.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    rowGap: 8,
  },
  labelStyle: {
    fontWeight: '700',
    fontSize: 16,
  },
  input: {},
});
