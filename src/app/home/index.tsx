import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { ShieldAlert } from "lucide-react-native";

export function Home() {
  const FILTER_STATUS: FilterStatus[] = [
    FilterStatus.PENDING,
    FilterStatus.DONE,
  ];

  const ITEM_MOCK = [
    {
      id: "1",
      description: "Bolacha recheada",
      status: FilterStatus.DONE,
    },
    {
      id: "2",
      description: "Macarräo",
      status: FilterStatus.PENDING,
    },
    {
      id: "3",
      description: "Feijäo",
      status: FilterStatus.PENDING,
    },
  ];

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder={"O que deseja comprar?"} />
        <Button label="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEM_MOCK}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item data={item} onRemove={() => {}} onStatus={() => {}} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContent}>
              <ShieldAlert size={32} />
              <Text style={styles.emptyText}>Não possui itens na lista</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
