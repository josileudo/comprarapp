import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "@/components/StatusIcon";

type FilterProps = TouchableOpacityProps & {
  status: string;
  isActive: boolean;
};

export const Filter = ({
  status,
  isActive,
  ...rest
}: FilterProps & { status: FilterStatus }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
};
