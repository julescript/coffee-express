import { StyleSheet } from "react-native";
import palette, { colors } from "../../constants/palette";

export default StyleSheet.create({
  container: {
    padding: 10
  },
  topSection: {
      backgroundColor: palette.colors.background,
      padding: 30,
      flexDirection: 'row'
  },
  divider: {
    height: 30
  },
  nameContainer: {
    flexDirection: 'column',
     flex: 1,
     justifyContent: 'center',
     marginLeft: 15
  },
  imageProfile: {
    borderRadius: 50,
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: colors.primary_dark
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary_dark
  },
  caption: {
    marginTop: 5,
    fontSize: 14,
    color: colors.text_dark
  }
});
