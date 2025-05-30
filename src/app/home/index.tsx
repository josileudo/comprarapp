import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { ShieldAlert } from "lucide-react-native";
import { useEffect, useState } from "react";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING);
  const [description, setDescription] = useState<string>("");
  const [items, setItems] = useState<ItemStorage[]>([]);
  const FILTER_STATUS: FilterStatus[] = [
    FilterStatus.PENDING,
    FilterStatus.DONE,
  ];

  const getItemByStatus = async () => {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
    } catch (e) {
      console.log(e);
      Alert.alert("Error", "Não foi possível renderizar seus itens");
    }
  };

  const handleAddItem = async () => {
    if (!description.trim())
      Alert.alert("Atenção", "Adicionar um item no campo");

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    await getItemByStatus();

    setFilter(FilterStatus.PENDING);

    Alert.alert("Sucesso!", `${description}, adicionado com sucesso!`);

    setDescription("");
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  useEffect(() => {
    getItemByStatus();
  }, [filter]); // Sempre que o filtro for setado, renderizarar o filtro

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input
          placeholder={"O que deseja comprar?"}
          value={description}
          onChangeText={setDescription}
        />
        <Button label="Adicionar" onPress={handleAddItem} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleDeleteAll}
          >
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => {}}
              onStatus={() => {
                setFilter;
              }}
            />
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
