import {FilterStatus} from "@/types/FilterStatus";
import {CircleCheck, CircleDashed} from "lucide-react-native";

export const StatusIcon = ({ status } : {status: FilterStatus}) => {
    return status === FilterStatus.DONE
        ? <CircleCheck size={18} color="#000" />
        : <CircleDashed size={18} color="#000"/>
}
