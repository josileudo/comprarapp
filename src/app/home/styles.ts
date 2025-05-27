import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2d8",
    alignItems: "center",
    paddingTop: 62,
    gap: 12,
  },
  logo: {
    width: 134,
    height: 34,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 42,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 32,
    padding: 24,
    marginTop: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAE6EC",
    paddingBottom: 12,
  },
  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 12,
    color: "#828282",
    fontWeight: 600,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#eef0e5",
    marginVertical: 16,
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 62,
  },
  emptyContent: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    color: "#828282",
  },
  emptyText: {
    fontSize: 12,
    fontWeight: 400,
  },
});
