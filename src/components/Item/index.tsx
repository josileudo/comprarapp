import { Text, TouchableOpacity, View } from "react-native";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";
import { Trash2 } from "lucide-react-native";
import { styles } from "./styles";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type ItemProps = {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
};

export const Item = ({ data, onRemove, onStatus }: ItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity
        style={styles.delete}
        activeOpacity={0.8}
        onPress={onRemove}
      >
        <Trash2 color={"#828282"} size={18} />
      </TouchableOpacity>
    </View>
  );
};
